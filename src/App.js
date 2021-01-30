import React, { Component } from 'react';

import './App.css'
import Auxiliary from './Auxiliary/Auxiliary'

import Form from './Components/Form/Form'
import TodoList from './Components/List/TodoList'
import Selector from './Components/Controls/Selector'
import NavBar from './Components/Navigation/NavBar';

class App extends Component {

  state = {
    inputText: '',
    todoList: [],
    filteredTodos: [],
    filter: 'all'
  };

  componentDidUpdate(prevProps, prevState) {
    if ((JSON.stringify(this.state.todoList) !== JSON.stringify(prevState.todoList)) || prevState.filter !== this.state.filter) {
      this.filterTodoHandler(this.state.filter);
    }
  }


  formInputListener = (e) => {
    this.setState({ inputText: e.target.value });
  }

  selectorOptionListener = (e) => {
    this.setState({ filter: e.target.value })
  }

  filterTodoHandler = (filter) => {
    switch (filter) {
      case "completed":
        this.setState({
          filteredTodos: this.state.todoList.filter(
            (todo) => todo.completed
          )
        })
        break;
      case "uncompleted":
        this.setState({
          filteredTodos: this.state.todoList.filter(
            (todo) => !todo.completed
          )
        })
        break;
      default:
        this.setState({ filteredTodos: this.state.todoList })
    }
  }

  setTodoHandler = (e) => {
    this.setState(previousState => ({
      todoList: [...previousState.todoList,
      {
        content: previousState.inputText,
        id: Math.random(),
        completed: false
      }]
    })
    );
    this.setState({ inputText: '' });
  }

  deleteHandler = (content) => {
    let newTodoList = this.state.todoList.filter(todo => (
      todo.content !== content
    ))
    this.setState({ todoList: newTodoList })
  }

  setCompletedHandler = (todo) => {

    this.setState({
      todoList: this.state.todoList.map((t) => {
        if (t.content === todo.content) {
          return {
            ...t, completed: (!t.completed)
          }
        }
        return t;
      })
    })
  }

  render() {
    return (
      <Auxiliary>
        <NavBar></NavBar>
        <header>
          <h1>Jack's To-Do List</h1>
        </header>
        <Form
          setInputText={(e) => this.formInputListener(e)}
          addTodo={() => this.setTodoHandler()}
          displayedText={this.state.inputText}>
          <Selector option={this.selectorOptionListener} />
        </Form>
        <TodoList
          todos={this.state.filteredTodos}
          delete={this.deleteHandler}
          setComplete={this.setCompletedHandler} />
      </Auxiliary>
    );
  }
}

export default App;
