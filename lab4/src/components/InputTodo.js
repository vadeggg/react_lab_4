import React from "react";

class InputTodo extends React.Component{
    state = {
        title:""
    }

    onChange = event => {
        console.log(event.target.name)
        this.setState(prev=>({...prev, ...{
            [event.target.name] : event.target.value,
        }}))
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title:""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input name="title"
                type="text" 
                placeholder="add..." 
                value={this.state.title}
                onChange={this.onChange}
                className="input-text"/>
                <input type="submit" value={"Submit"} className="input-submit"/>
            </form>
        )
    }
}

export default InputTodo;