function Task({ task, onDelete, onToggle }) {
  const handleClick = () => {
    onToggle(task.id);
  };

  return (
    <li className="list">
      <p
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={handleClick}
      >
        {task.id} {task.text}
      </p>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default Task;
