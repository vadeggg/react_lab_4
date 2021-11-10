import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

import {v4 as uuidv4} from "uuid";

class TodoContainer extends React.Component{
    state = {
        todos : [
            {
                id:uuidv4(),
                title:"First",
                completed:false
            },
            {
                id:uuidv4(),
                title:"First",
                completed:true
            },
            {
                id:uuidv4(),
                title:"First",
                completed:false
            }
        ]
    };

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo=>{
                    if(todo.id===id){
                        console.log("here")
                        todo.completed = !todo.completed;
                    }
                    return todo;
            })
        })
        console.log(this.state.todos);
    };
    deleteHandler = (id) => {
        console.log('1')
        this.setState({
            todos: [
                ...this.state.todos.filter(todo=>{
                    return todo.id != id;
                })
            ]
        });
    };
    addTodoItem = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed:false
        };
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }

    render(){
        return(
            <div className="container">
                <Header/>
                <TodoList todos = {this.state.todos} handleChangeProps = {this.handleChange} deleteHandlerProps= {this.deleteHandler}></TodoList>
                <InputTodo addTodoProps = {this.addTodoItem}/>
            </div>
        )
    }
}
export default TodoContainer;