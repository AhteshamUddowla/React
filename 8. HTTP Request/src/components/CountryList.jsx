import React from "react";
import axios from 'axios';

class CountryList extends React.Component{
    
    constructor(){
        super() 

        this.state = {
            mydata: []
        }
    }
    
    // This is a react life cycle method
    // This build in method is used to get data from the server
    componentDidMount(){
        axios.get('https://restcountries.com/v3.1/all')
             .then((response) => {
                this.setState({
                    mydata: response.data
                })
                // console.log(response.data)
             })
             .catch((error) => {
                console.log(error)
             }) 
    }
    
    render(){
        const myList = this.state.mydata
        const CountryName = myList.map((mylist) => {
            return <li>{mylist.name.common}</li>
        })
        return(
            <>
                <ol>
                    {CountryName}
                </ol>
            </>
        )
    }
}

export default CountryList