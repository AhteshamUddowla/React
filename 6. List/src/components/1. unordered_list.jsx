import React from "react";

class List extends React.Component{

    render(){
        const country = ['Bangladesh', 'India', 'Canada', 'Africa']
        const listItems = country.map((list) => {
            return <li>{list}</li>
        })

        return(
            <>
                <ol>
                    {listItems}
                </ol>

                <hr />
            </>
        )
    }
}

export default List