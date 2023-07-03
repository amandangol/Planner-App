import React, { useState, useEffect } from 'react';

const QuoteWidget = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchQuoteOfTheDay();
  }, []);

  const fetchQuoteOfTheDay = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleRandomize = () => {
    fetchQuoteOfTheDay();
  };

  const handleCopyToClipboard = () => {
    const textToCopy = `${quote} - ${author}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const textToShare = `"${quote}" - ${author}`;
    if (navigator.share) {
      navigator.share({
        title: 'Quote of the Day',
        text: textToShare,
      })
        .catch((error) => console.error('Error sharing:', error));
    }
  };

  return (
    <div className="quote-widget">
      <div className="quote">{quote}</div>
      <div className="author">- {author}</div>
      <div className="button-container">
      <button className="randomize-button tooltip" onClick={handleRandomize}>
      <i className="fas fa-random"></i>
  <span className="tooltiptext">Shuffle</span>
</button>

<button className="copy-button tooltip" onClick={handleCopyToClipboard}>
<i className="fas fa-clipboard"></i>
  <span className="tooltiptext">Copy to Clipboard</span>
</button>

      </div>
      {copied && <div className="copy-message">Copied to Clipboard</div>}
    </div>
  );
};

// TaskManagerWidget component

const TaskManagerWidget = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null); 
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        text: newTask,
        done: false,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditTaskIndex(index);
    setEditedTask(tasks[index].text);
  };

  const saveEditedTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editTaskIndex].text = editedTask;
    setTasks(updatedTasks);
    setEditTaskIndex(null);
    setEditedTask('');
  };

  return (
    <div className="task-manager">
      <h3>Organize Your Day</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          required
        />
        <button type="submit" className="add-task-button">Add Task</button>
      </form>
      <div className="task-list-container">
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {editTaskIndex === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="edit-task-input"
                />
              ) : (
                <>
                 <label className="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTaskDone(index)}
                />
                <span className="checkmark">
                  {task.done && <i className="fas fa-check"></i>}
                </span>
              </label>
              <span className={`task-text ${task.done ? 'done' : ''}`}>
                {task.text}
              </span>

                </>
              )}
               <div className="action-button-space"></div>  
              <div className="task-actions">
                {editTaskIndex === index ? (
                  <button className="save-task-button" onClick={saveEditedTask}>
                    Save
                  </button>
                  
                ) : (
                  <button className="edit-task-button" onClick={() => editTask(index)}>
                   <i className="fas fa-edit"></i>
                  </button>
                  
                )}
               <div className="action-button-space"></div> 
                <button className="remove-task-button" onClick={() => removeTask(index)}>
                <i className="fas fa-trash"></i>

                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {tasks.length > 0 && (
        <button className="reset-button" onClick={() => setTasks([])}>
          Reset Tasks
        </button>
      )}
    </div>
  );
};


const DecorativeLine = () => {
  return <hr className="decorative-line" />;
};

const App = () => {
  return (
    <div className="app">
      <QuoteWidget />
      <div className="quote-widget-separator">
        <DecorativeLine />
        <span className="quote-widget-separator-text">
          "Stay Inspired, Stay Productive"
        </span>
        <DecorativeLine />
      </div>
      <TaskManagerWidget />
    </div>
  );
};

export default App;
