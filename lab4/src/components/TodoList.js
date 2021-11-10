import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                {this.props.todos.map(todo=>{
                    return <TodoItem key={todo.id} 
                    todo={todo}
                    handleChangeProps={this.props.handleChangeProps}
                    deleteHandlerProps={this.props.deleteHandlerProps}/>
                })}
            </div>
        )
    }
}

export default TodoList;