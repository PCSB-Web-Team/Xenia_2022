import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Tabs, Tab } from "../components/tabs";
import { UserTable } from "../components/tables";

export default function DatabaseTables(props) {
    const [fetchedTable, setFetchedTable] = useState({
        "1": false, "2": true, "3": false
    })
    const [fetchedTablesStack, setFetchedTablesStack] = useState(["1", "2", "3"])
    const [userTableData, setUserTableData] = useState([])
    const [participantTableData, setParticipantTableData] = useState([])
    const [teamsTableData, setTeamsTableData] = useState([])

    const checkAndFetch = useCallback(async (tableKey) => {

        async function fetchAllUsers() {
            props.setLoading(true);
            try {
                return await axios.get(process.env.REACT_APP_API_URL + '/auth/users')
                    .then(async res => {
                        if (res?.data?.status) {
                            return await res?.data?.data?.data.map(({ name, mobile, email, createdAt }, index) => {
                                const parsed_createdAt = new Date(createdAt)
                                return {
                                    id: index + 1, name, mobile, email, createdAt: parsed_createdAt.toUTCString()
                                }
                            })
                        }
                        return []
                    })
                    .catch(error => {
                        props.toast.toast.error("Error while fetching user data! : " + error?.message)
                    })
            } catch (error) {
                props.toast.toast.error("Error while fetching user data! : " + error?.message)
                return []
            }
        }

        if (fetchedTablesStack.includes(tableKey)) {
            await fetchAllUsers().then(res => {
                const userArray = Object.keys(res).map(key => res[key] || {})
                setUserTableData(previousState => ([...previousState, [...userArray]]))
            })
            setFetchedTablesStack(prevFetchedStack => (
                prevFetchedStack.filter(existingKeys => existingKeys !== tableKey)
            ))
        } else props.toast.toast.toast.warn("Records are fetched! Refresh the page to get updated records.")
    }, [props, fetchedTablesStack])

    async function fetchData(tableKey) {
        props.setLoading(true)
        switch (tableKey) {
            case "1":
                await checkAndFetch(tableKey)
                console.log(typeof userTableData, userTableData[0]);
                props.setLoading(false)
                break

            case "2":
                // setParticipantTableData(fetchAllParticipants())
                break

            case "3":
                // setTeamsTableData(fetchAllTeams())
                break

            default:
                props.toast.toast.toast.error("Error: Unknown internal error while fetching data!")
                return
        }
    }

    useEffect(() => {
        props.setLoading(true)
        // Object.entries(fetchedTable).forEach(([key, value]) => {
        //     if (value) {
        //         fetchedTablesStack.forEach(async tableKey => {
        //             if (key === tableKey) {
        //                 setFetchedTablesStack(prevFetchedStack => (
        //                     prevFetchedStack.filter(existingKeys => existingKeys !== tableKey)
        //                 ))
        //                 await fetchData(tableKey)
        //             }
        //         })
        //     }
        // })
        checkAndFetch("2")
        props.setLoading(false)
    }, [props, checkAndFetch])

    return (props.loading ? props.loader :
        <>
            {props.toast.container}
            <Tabs>
                <Tab className="event-desc-tab" component={
                    <UserTable userTableData={userTableData} setLoading={props.setLoading} />
                }><span onClick={() => fetchData("1")}>Users</span></Tab>
                <Tab className="event-desc-tab" component={
                    <></>
                } active>Participants</Tab>
                <Tab className="event-desc-tab" component={
                    <></>
                }>Teams</Tab>
            </Tabs>
        </>
    )
}