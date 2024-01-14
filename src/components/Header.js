import { useState } from "react";

const Header = ({setRefresh}) => {
  const [title, setTitle] = useState("");


  const addTodo = () => {
	  const newTodo = {title, done: false}

	  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
		
			setTitle("")
			setRefresh(true)

			setTimeout(() => {
				alert('Data Baru Berhasil Ditambahkan.')
			}, 500)
        });
  }

  return (
    <div id="todo-header" className="header">
      <h2>Today List</h2>
	  <input 
		  type="text"
		  value={title}
		  onChange={(e) => setTitle(e.target.value)}
	  />
      <span className="add-button" onClick={addTodo}>Add</span>
    </div>
  );
};

export default Header;