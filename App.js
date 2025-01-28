import React, { useState } from "react";
import { View, Text } from "react-native";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import styles from "./styles";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    if (taskTitle.trim() === "") return;
    const newTask = { id: Date.now().toString(), title: taskTitle, status: "due" };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "due" ? "done" : "due" } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTaskStatus} onDeleteTask={deleteTask} />
    </View>
  );
};

export default App;
