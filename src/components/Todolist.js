import React, { useState } from 'react';

export default function TodoList() {

  const [todo, setToDo] = useState({ description: "", date: "" });
  const [todos, setToDos] = useState([]);

  const addToDo = (event) => {
    event.preventDefault();
    setToDos([...todos, todo]);
  };

  const inputChanged = (event) => {
    setToDo({ ...todo, [event.target.name]: event.target.value });
  };


  const deleteToDo = (index) => {
    const newListToDo = todos.filter((todo, i) => i !== index);
    return setToDos([...newListToDo]);
  }

  return (
    <div className="App">
      <div className="todoHeader">
        <br></br>
        <h3 id="hthree">Add todo:</h3>
      </div>
      <form onSubmit={addToDo}>
        <label>
          Description:
            <input
            type="text"
            name="description"
            value={todo.description}
            onChange={inputChanged}
          />
        </label>
        <label>
          Date:
            <input
            type="date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <br />
      <table className="DescDate">
        <tbody>
          <tr>
            <td id="date">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="desc">Description</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table >
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}
                </td>
                <td> <button onClick={e => deleteToDo(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
