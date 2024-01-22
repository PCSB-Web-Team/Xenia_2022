import { useMemo } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import styled from "styled-components";

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

const Input = styled.input.attrs((props) => ({
    type: "text",
    size: props.small ? 5 : undefined,
}))`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	padding: 0 32px 0 16px;
    color: white;
    background: transparent;
    border: 1px solid rgba(160, 160, 160, 0.4);
    
	&:hover, &:focus {
        border: 1px solid #e5e5e5;
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 32px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
    border: 1px solid rgba(160, 160, 160, 0.4);
    color: rgba(160, 160, 160, 0.4);
    background: transparent;
    
    &:hover, &:focus {
        color: white;
        border: 1px solid #e5e5e5;
		cursor: pointer;
	}
`;

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export default function Table(props) {

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
            <Input
                id="search"
                type="text"
                placeholder="Search"
                value={filterText}
                onChange={onFilter}
            />
            <ClearButton onClick={onClear}>X</ClearButton>
        </>
    );

    let { filterText, resetPaginationToggle, setResetPaginationToggle, setFilterText } = props.filtration;

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        }

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        )
    }, [filterText, resetPaginationToggle]);

    return (
        <>
            <DataTable
                fixedHeader
                fixedHeaderScrollHeight="500px"
                columns={props.tableSchema}
                data={props.filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                progressPending={props.pending}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                customStyles={customStyles}
                theme="solarized"
                highlightOnHover
                pointerOnHover
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />
        </>
    )
}