import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  deleteButton: {
    fontSize: 18,
    color: "#E53935",
  },
});

export default styles;
