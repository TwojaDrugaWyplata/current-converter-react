import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(({ id, name, done }) => (
            <li key={id}
                className={`list__item${done && hideDone ? " list__item--hidden" : ""}`}
            >
                <button
                    className="list__button"
                    onClick={() => toggleTaskDone(tasks.id)}
                >{done ? "✔" : ""}</button>
                <span className={`list__taskName ${done ? "list__taskName--done" : ""}`}>
                    {name}
                </span>
                <button
                    className="list__button list__button--delete"
                    onClick={() => removeTask(tasks.id)}
                >🗑</button>
            </li>
        ))}
    </ul>
)
export default Tasks;

