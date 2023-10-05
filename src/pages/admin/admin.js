import "./admin.css";
import GenerateCredential from "./services/generateCredential";
import { Tabs, Tab } from "./components/tabs";
import Table from "./components/tables/table";
import Requests from "../../api/requests";
import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable, { createTheme } from 'react-data-table-component';

function filterArray(dataArray, filterText, attribute) {
    return dataArray?.filter(
        item => item[attribute] && item[attribute].toLowerCase().includes(filterText.toLowerCase()),
    )
}

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
            backgroundColor: '#6b6b6b'
        }
    },
}

const dateWiseSort = (rowA, rowB) => {
    let a = rowA.createdAt[5] + rowA.createdAt[6]
    let b = rowB.createdAt[5] + rowB.createdAt[6]
    a = parseInt(a);
    b = parseInt(b);

    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
};

createTheme('solarized', {
    text: {
        primary: '#fff',
        secondary: '#c4e7f9',
    },
    background: {
        default: 'transparent',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');

const usersSchema = [
    {
        name: 'Name',
        selector: row => row.name,
        centre: true,
        sortable: true
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
        sortable: true,
        sortFunction: dateWiseSort
    },
]

const participantsSchema = [
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'Mobile',
        selector: row => row.mobile,
    },
    {
        name: 'Event',
        selector: row => row.eventName,
        sortable: true,
        center: true,
    },
    {
        name: 'Team ID',
        selector: row => row.teamId,
        sortable: true,
        center: true,
    },
]

const teamsSchema = [
    {
        name: 'Name',
        selector: row => row.name,
        center: true,
    },
    {
        name: 'Event',
        selector: row => row.eventId,
        sortable: true,
        center: true
    },
    {
        name: 'Team ID',
        selector: row => row._id,
        center: true
    },
    {
        name: 'Count',
        selector: row => row.count,
        center: true
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
        center: true
    }
]

export default function Admin(props) {
    const [auth, setAuth] = useState({
        username: "",
        password: "",
        isAdmin: false
    })
    const [services, setServices] = useState(1)
    const [loading, setLoading] = useState(false)
    const [userTableData, setUserTableData] = useState([])
    const [participantsTableData, setParticipantsTableData] = useState([])
    const [teamsTableData, setTeamsTableData] = useState([])
    // const [teamTableData, setTeamTableData] = useState([])
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [events, setEvents] = useState([])
    const [pending, setPending] = useState(true)

    // const [filterText, setFilterText] = useState('');
    // const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    // const filteredItems = userTableData.filter(
    //     item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    // )

    // const subHeaderComponentMemo = useMemo(() => {
    //     const handleClear = () => {
    //         if (filterText) {
    //             setResetPaginationToggle(!resetPaginationToggle);
    //             setFilterText('');
    //         }
    //     }

    //     return (
    //         <input onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    //     )
    // }, [filterText, resetPaginationToggle]);

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
                .catch(error => {
                    props.toast.toast.error("Error while fetching user data! : " + error?.message)
                })
        } catch (error) {
            setLoading(false)
            props.toast.toast.error("Error while fetching user data! : " + error?.message)
            return []
        }
    }

    async function fetchAllParticipants() {
        setLoading(true);
        try {
            await axios.get(process.env.REACT_APP_API_URL + '/participant')
                .then(async res => {
                    if (res?.data?.status) {
                        setLoading(false)
                        let participantsTableData = await res?.data?.data?.data.map(({ email, mobile, eventName, teamId }, index) => ({
                            id: index + 1, email, mobile, eventName, teamId: teamId || 'NA'
                        }))
                        setParticipantsTableData(participantsTableData)
                    }
                    setLoading(false)
                    return []
                })
                .catch(error => {
                    props.toast.toast.error("Error while fetching participants data! : " + error?.message)
                })
        } catch (error) {
            setLoading(false)
            props.toast.toast.error("Error while fetching participants data! : " + error?.message)
            return []
        }
    }

    async function fetchAllTeams() {
        setLoading(true);
        try {
            await axios.get(process.env.REACT_APP_API_URL + '/teams')
                .then(async res => {
                    if (res?.data?.status) {
                        setLoading(false)
                        let teamsTableData = await res?.data?.data?.map(({ count, eventId, isFull, max, name, _id }, index) => ({
                            id: index + 1, name, _id, eventId, count: [count + "/" + max], status: isFull ? 'Full' : 'Available'
                        }))
                        setTeamsTableData(teamsTableData)
                    }
                    setLoading(false)
                    return []
                })
                .catch(error => {
                    props.toast.toast.error("Error while fetching teams data! : " + error?.message)
                })
        } catch (error) {
            setLoading(false)
            props.toast.toast.error("Error while fetching teams data! : " + error?.message)
            return []
        }
    }

    async function fetchEventsData() {
        setLoading(true);
        await Requests.getEvents()
            .then((res) => {
                setEvents(res?.data?.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                props.toast.toast.error("Error while fetching events data! : " + err?.message);
            });
        setLoading(false);
    }

    async function authAdmin(e) {
        e.preventDefault()
        if (auth.isAdmin) {
            props.toast.toast.success("Admin Authenticated successfully!")
            return
        } else {
            // console.log(process.env.REACT_APP_ADMIN_USERNAME, process.env.REACT_APP_ADMIN_PASSWORD);
            if (auth.username === process.env.REACT_APP_ADMIN_USERNAME) {
                if (auth.password === process.env.REACT_APP_ADMIN_PASSWORD) {
                    setAuth(prevAuth => ({ ...prevAuth, isAdmin: true }))
                    setLoading(true)
                    await fetchAllUsers()
                    await fetchEventsData()
                    await fetchAllParticipants()
                    await fetchAllTeams()
                    setLoading(false)
                    props.toast.toast.success("Admin Authenticated successfully!")
                    return
                }
            }
            setAuth(auth)
            props.toast.toast.error("Invalid login credentials!")
        }
    }

    useEffect(() => {
        !auth.isAdmin && props.toast.toast.warn("Please authenticate as Admin before accessing Admin Page!");
        const timeout = setTimeout(() => {
            setUserTableData(events);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [])

    return (!auth.isAdmin ?
        <div className="admin-page h-screen">
            <div className="admin-login">
                <h1>Admin Page</h1>
                <input type="text" name="username" placeholder="Username" onChange={(e) => setAuth(prevAuth => ({ ...prevAuth, username: e.target.value }))} required />
                <input type="password" name="password" placeholder="Password" onChange={(e) => setAuth(prevAuth => ({ ...prevAuth, password: e.target.value }))} required />
                <button type="submit" onClick={async (e) => await authAdmin(e)}>Login</button>
            </div>
        </div>
        : loading ? props.loader : <div className="admin-page">
            {props.toast.container}
            <h1>Admin Page</h1>
            <div className="w-full flex flex-center p-10 text-white">
                <p>Select Services: </p>
                <span>
                    <button onClick={() => { setServices(1) }} className={`p-2 rounded mx-4 ${services === 1 ? `bg-white text-black` : `bg-black text-white`}`}>Check Database</button>
                    <button onClick={() => { setServices(2) }} className={`p-2 rounded mx-4 ${services === 2 ? `bg-white text-black` : `bg-black text-white`}`}>Generate Credentials</button>
                </span>
            </div>
            <div className="admin-tabs-wrapper">
                {services === 1 && (
                    <Tabs>
                        <Tab className="event-desc-tab" component={
                            // <DataTable
                            //     fixedHeader
                            //     fixedHeaderScrollHeight="500px"
                            //     columns={usersSchema}
                            //     data={userTableData}
                            //     pagination
                            //     // paginationResetDefaultPage={resetPaginationToggle}
                            //     progressPending={pending}
                            //     expandableRows
                            //     expandableRowsComponent={ExpandedComponent}
                            //     customStyles={customStyles}
                            //     theme="solarized"
                            //     highlightOnHover
                            //     pointerOnHover
                            //     subHeader
                            //     // subHeaderComponent={subHeaderComponentMemo}
                            //     persistTableHead
                            // />
                            <Table
                                filtration={{ filterText, resetPaginationToggle, setResetPaginationToggle, setFilterText: (text) => setFilterText(text) }}
                                tableSchema={usersSchema}
                                filteredItems={filterArray(userTableData, filterText, "name")}
                            />
                        }>Users</Tab>
                        <Tab className="event-desc-tab" component={
                            <DataTable
                                fixedHeader
                                fixedHeaderScrollHeight="500px"
                                columns={participantsSchema}
                                data={participantsTableData}
                                pagination
                                // paginationResetDefaultPage={resetPaginationToggle}
                                progressPending={pending}
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                customStyles={customStyles}
                                theme="solarized"
                                highlightOnHover
                                pointerOnHover
                                selectableRows
                                subHeader
                                // subHeaderComponent={subHeaderComponentMemo}
                                persistTableHead
                            />
                        } active>Participants</Tab>
                        <Tab className="event-desc-tab" component={
                            <DataTable
                                fixedHeader
                                fixedHeaderScrollHeight="500px"
                                columns={teamsSchema}
                                data={teamsTableData}
                                pagination
                                // paginationResetDefaultPage={resetPaginationToggle}
                                progressPending={pending}
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                customStyles={customStyles}
                                theme="solarized"
                                highlightOnHover
                                pointerOnHover
                                selectableRows
                                subHeader
                                // subHeaderComponent={subHeaderComponentMemo}
                                persistTableHead
                            />
                        }>Teams</Tab>
                    </Tabs>
                )}
                {services === 2 && <GenerateCredential loader={props.loader} setLoading={(value) => setLoading(value)} toast={props.toast} events={events} />}
            </div>
        </div>
    )
}