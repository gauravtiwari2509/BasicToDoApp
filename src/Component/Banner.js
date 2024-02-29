import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import './Banner.css';

const Banner = () => {
  const [todolist, setTodolist] = useState([]);
  const [work, setWork] = useState('');

  useEffect(() => {
    const storedTodolist = JSON.parse(localStorage.getItem('todolist')) || [];
    setTodolist(storedTodolist);
  }, []);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }, [todolist]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!work.trim()) {
      return;
    }

    setTodolist([...todolist, { id: Date.now(), work, cond: false }]);
    setWork('');
  };

  const toggleCondition = (id) => {
    setTodolist((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, cond: !item.cond } : item
      )
    );
  };

  const deleteItem = (id) => {
    const newList = todolist.filter((list) => list.id !== id);
    setTodolist(newList);
  };

  return (
    <>
    <div className="todoCont">
      <div className="todoContbox">
        <form onSubmit={handleSubmit} className="listForm">
          <input
            autoFocus
            type="text"
            name="work"
            placeholder="Add Task"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
      <div className="todolist">
        {todolist.map((item) => (
          <div key={item.id} className="task">
           
            <LibraryAddCheckIcon
                onClick={() => toggleCondition(item.id)}
                style={item.cond ? { color: 'green', cursor:'pointer' } : { color: 'red', cursor:'pointer' }}
              />
               <span>{item.work}</span>
            <div> 
              <DeleteIcon
                style={{ color: 'red', cursor:'pointer'}}
                onClick={() => deleteItem(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div class="hero"> 
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
    </>
  );
};

export default Banner;
