import React from "react";

class JSONList extends React.Component{
    render(){
        const myList = [
            {
                city: "Chittagong",
                zip: 6000
            },
            {
                city: "Dhaka",
                zip: 5000
            },
            {
                city: "Sylhet",
                zip: 4000
            }
        ]

        const myCity = myList.map((data) => {
            return <option>{data.city}</option>
        })

        const myZip = myList.map((data) => {
            return <option>{data.zip}</option>
        })

        return(
            <>
                <select>
                    {myCity}
                </select>
                <p></p>
                <select>
                    {myZip}
                </select>

                <hr />
            </>
        )
    }
}

export default JSONList