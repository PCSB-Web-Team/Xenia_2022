import "./admin.css";
import { Tabs, Tab } from "./tabs";
import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

const customStyles = {
    headRow: {
        style: {
            borderRadius: '12px'
        }
    },
    headCells: {
        style: {
            fontSize: '1.4rem',
            letterSpacing: '1.2px',
            justifyContent: 'center',
            background: '#5bb9d8a2',
            border: '2px solid #0092c3',
        }
    },
    cells: {
        style: {
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #808080'
        }
    }
}

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        centre: true,
    },
    {
        name: 'Mobile',
        selector: row => row.mobile,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'Created At',
        selector: row => row.createdAt,
        sortable: true
    },
]

export default function Admin(props) {
    const [loading, setLoading] = useState(false)
    const [userTableData, setUserTableData] = useState([])

    async function fetchAllUsers() {
        setLoading(true);
        try {
            await axios.get(process.env.REACT_APP_API_URL + '/auth/users')
                .then(async res => {
                    if (res?.data?.status) {
                        setLoading(false)
                        let userTableData = await res?.data?.data?.data.map(({ name, mobile, email, createdAt }, index) => {
                            const parsed_createdAt = new Date(createdAt)
                            return {
                                id: index + 1, name, mobile, email, createdAt: parsed_createdAt.toUTCString()
                            }
                        })
                        setUserTableData(userTableData)
                    }
                    setLoading(false)
                    return []
                })
                .catch(error => (error))
        } catch (error) {
            console.log(error);
            setLoading(false)
            return []
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])

    return (loading ? props.loader :
        <div className="admin-page">
            <h1>Admin Page</h1>
            <div className="admin-tabs-wrapper">
                <Tabs>
                    <Tab className="event-desc-tab" component={
                        <DataTable
                            columns={columns}
                            data={userTableData}
                            expandableRows
                            expandableRowsComponent={ExpandedComponent}
                            customStyles={customStyles}
                        />
                    }>Users</Tab>
                    <Tab className="event-desc-tab" component={
                        <></>
                    } active>Participants</Tab>
                    <Tab className="event-desc-tab" component={
                        <></>
                    }>Teams</Tab>
                </Tabs>
            </div>
        </div>
    )
}