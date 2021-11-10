import React from "react";

const  Header = () =>{
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
       }
    return(
        <header style={headerStyle}>
            <h1>Todo app</h1>
            <p>Add todo</p>
        </header>
    )
}

export default Header;