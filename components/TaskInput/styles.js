import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
