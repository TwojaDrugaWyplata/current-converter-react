import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div className="buttonContainer">
        {tasks.length > 0 && (
            <>
                <button onclick={toggleHideDone}
                    className="buttonContainer__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button onclick={setAllDone}
                    className="buttonContainer__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);
export default Buttons;