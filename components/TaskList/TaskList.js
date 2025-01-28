import React from "react";
import { FlatList, Text } from "react-native";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./styles";

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskCard
          task={item}
          onToggleStatus={() => onToggleTask(item.id)}
          onDelete={() => onDeleteTask(item.id)}
        />
      )}
      ListEmptyComponent={<Text style={styles.emptyMessage}>No tasks found. Add a task to get started!</Text>}
    />
  );
};

export default TaskList;
