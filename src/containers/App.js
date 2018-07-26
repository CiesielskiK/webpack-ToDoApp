import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title/Title';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{id: 1, text: 'clean room', done: false},
             {id: 2, text: 'wash the dishes', done: false},
             {id: 3, text: 'feed my cat', done: false}]
      }
  }
  addTodo = (val) => {
    const todo = {
      text: val,
      id: uuid.v4(),
      done: false
    }
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  updateTodo = (id, val) => {
      const arr = this.state.data.slice();
      const index = arr.findIndex(object => object.id === id);
      arr[index] = {id: id, text: val};
      this.setState({data: arr})
  }
  doneTodo = (id, val, done) => {
    const arr = this.state.data.slice();
    const index = arr.findIndex(object => object.id === id);
    const isDone = !done;
    arr[index] = {id: id, text: val, done: isDone};
    this.setState({data: arr})
  };
  removeTodo = (id) => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title='ToDo App'/>
        <TodoForm
          add={this.addTodo}
          todoLength={this.state.data.length}
          />
        <ul>
          <TodoList
            todos={this.state.data}
            remove={this.removeTodo}
            update={this.updateTodo}
            done={this.doneTodo}
          />
        </ul>
      </div>
    )
  }
}

export default App;
