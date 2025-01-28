import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    onAddTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity
        style={[
          styles.addButton,
          { backgroundColor: taskTitle.trim() ? "#4CAF50" : "#ccc" },
        ]}
        onPress={handleAddTask}
        disabled={!taskTitle.trim()}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
