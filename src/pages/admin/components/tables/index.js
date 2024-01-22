import { useEffect, useState } from "react";
import Table from "./table";

function filterArray(dataArray, filterText, attribute) {
    return dataArray?.filter(
        item => item[attribute] && item[attribute].toLowerCase().includes(filterText.toLowerCase()),
    )
}

export function UserTable(props) {
    const [userDataArray, setUserDataArray] = useState([])

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
    }

    const userTableSchema = [
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

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    useEffect(() => {
        props.setLoading(true);
        setUserDataArray(prevState => ([...prevState, props.userTableData]))
        props.setLoading(false);
    }, [props, props.userTableData])

    return (
        <Table
            filtration={{ filterText, resetPaginationToggle, setResetPaginationToggle, setFilterText }}
            tableSchema={userTableSchema}
            filterData={filterArray(userDataArray, filterText, "name")}
        />
    )
}