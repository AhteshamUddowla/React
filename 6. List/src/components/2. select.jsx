import React from "react";

class Select extends React.Component{

    myChild = (list) => {
        return <option>{list}</option>
    }

    render(){
        const country = ['Bangladesh', 'India', 'Canada', 'Africa']
        // const listItems = country.map((list) => {
        //     return <option>{list}</option>
        // })

        const listItems = country.map(this.myChild)

        return(
            <>
                <select>
                    {listItems}
                </select>

                <hr />
            </>
        )
    }
}

export default Select