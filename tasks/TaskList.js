import {
  View,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { Picker } from "@react-native-picker/picker";

const TaskList = ({ taskHouse, taskOther, taskStudy, taskWork }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [work, setWork] = useState(taskWork);
  const [study, setStudy] = useState(taskStudy);
  const [house, setHouse] = useState(taskHouse);
  const [other, setOther] = useState(taskOther);

  const types = ["Робота", "Навчання", "Дім", "Інше"];

  const addEl = () => {
    if (task.trim() !== "" && category.trim() !== "") {
      if (category.trim() == "Робота") {
        setWork([...work, { task: task.trim(), category: category.trim() }]);
      } else if (category.trim() == "Навчання") {
        setStudy([...study, { task: task.trim(), category: category.trim() }]);
      } else if (category.trim() == "Дім") {
        setHouse([...house, { task: task.trim(), category: category.trim() }]);
      } else if (category.trim() == "Інше") {
        setOther([...other, { task: task.trim(), category: category.trim() }]);
      }
      setTask("");
      setCategory("");
    } else {
      alert("Заповніть усі поля!");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.task}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.mainText}>Список справ</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Завдання"
              onChangeText={setTask}
              value={task}
              style={styles.input}
            />

            <View style={styles.input}>
              <Picker
                selectedValue={category}
                onValueChange={(item) => setCategory(item)}
                style={styles.picker}>
                {types.map((type) => (
                  <Picker.Item key={type} label={type} value={type} />
                ))}
              </Picker>
            </View>
            <PrimaryButton children={"Додати"} onPress={addEl} />
          </View>
          <Text style={styles.text}>Робота:</Text>
          <FlatList
            style={styles.taskContainer}
            data={work}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.text}>Навчання:</Text>
          <FlatList
            style={styles.taskContainer}
            data={study}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.text}>Дім:</Text>
          <FlatList
            style={styles.taskContainer}
            data={house}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.text}>Інше:</Text>
          <FlatList
            style={styles.taskContainer}
            data={other}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 80,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 25,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: "33%",
    padding: 7,
    height:39,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },
  taskContainer: {
    marginTop: 10,
    width: "80%",
  },
  item: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#3aaf7a",
    padding: 7,
    marginBottom: 7,
  },
  itemText: {
    color: "white",
    fontWeight: 600,
    textAlign: "center",
  },
  picker:{
    marginTop:-15,
    marginLeft:-15,
    width:"130%"
  }
});
