import React from "react";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import axios from "axios"

class Table extends React.Component{

    constructor(){
        super()

        this.state = {
            tableInfo: []
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.com/v3.1/all')
             .then((response) => {
                this.setState({
                    tableInfo: response.data
                })
             })
             .catch((error) => {
                alert("Something went wrong...")
             })
    }


    render(){
        const tableData = this.state.tableInfo
        const col = [
            {
                Header: "Country Name",
                accessor: "name.common"
            },
            {
                Header: "Capital",
                accessor: "capital"
            }
        ]
        return(
            <>
                <ReactTable 
                 data={tableData}
                 columns={col}
                 defaultPageSize={2}
                 pageSizeOptions={[2,4,6,8,10]} />
            </>
        )
    }
}

export default Table