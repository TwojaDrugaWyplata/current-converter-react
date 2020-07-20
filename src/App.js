import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

  function App() {
    const [hideDone, setHideDone] = useState(false);

    const [tasks, setTasks] = useState([
      { id: 1, name: "Przejść na React", done: false},
      { id: 2, name: "Zjeść obiad", done: true },
    ]);

    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      }));
    };

    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...tasks,
        done: true,
      })));
    };

    const addNewTask = (newTaskContent) => {
      setTasks(tasks => [
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: task.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ]);

    };

    return (
      <Container>
        <Header title="Lista zadań" />
        <Section
          title={`Dodaj nowe zadanie`}
          body={<Form addNewTask={addNewTask} />}
        />

        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />}
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTasks={removeTasks}
              toggleTaskDone={toggleTaskDone}
            />}
        />
      </Container>
    );
  }
export default App;


