import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import styles from "./styles";

const TaskCard = ({ task, onToggleStatus, onDelete }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>{task.title}</Text>

      <View style={styles.statusContainer}>
        <Text style={{ color: task.status === "due" ? "#E53935" : "#4CAF50", fontWeight: "bold" }}>
          {task.status.toUpperCase()}
        </Text>
        <Switch
          value={task.status === "done"}
          onValueChange={onToggleStatus}
          thumbColor={task.status === "done" ? "#4CAF50" : "#E53935"}
        />
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteButton}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
