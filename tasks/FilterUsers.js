import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import PrimaryButton from "../PrimaryButton";

const FilterUsers = () => {
  const [usrName, setUsrName] = useState("");
  const [age, setAge] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFiltered, setIsFiltered]=useState(false);

  const FilterList = () => {
    const filtered = [];

    for (let i = 0; i < usersData.length; i++) {
      const user = usersData[i];
      if (parseFloat(user.age) >= parseFloat(filter)) {
        filtered.push(user);
      }
    }
    if (filtered.length > 0) {
      setFilteredUsers(filtered);
      setIsFiltered(true);
    } else {
      alert("За цим фільтром нічого не знайдено");
      setFilteredUsers([]);
      setIsFiltered(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          Ім'я - {item.usrName}; Вік - {item.age};
        </Text>
      </View>
    );
  };

  const addEl = () => {
    if (usrName.trim() !== "" && age.trim() !== "") {
      setUsersData([
        ...usersData,
        { usrName: usrName.trim(), age: age.trim() },
      ]);
      setUsrName("");
      setAge(null);
    } else {
      alert("Заповніть усі поля!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Фільтр списку користувачів</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Фільтр"
          keyboardType="numeric"
          onChangeText={setFilter}
          value={filter}
          style={styles.inputFilter}
        />
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => FilterList(filter)}
        >
          <Text style={styles.buttonText}>Фільтр</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ім'я"
          onChangeText={setUsrName}
          value={usrName}
          style={styles.input}
        />
        <TextInput
          placeholder="Вік"
          keyboardType="numeric"
          onChangeText={setAge}
          value={age}
          style={styles.input}
        />
        <PrimaryButton children={"Додати"} onPress={addEl} />
      </View>
      <Text style={styles.text}>Користувачі:</Text>
      {isFiltered ? (
        <FlatList
          style={styles.itemContainer}
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <FlatList
          style={styles.itemContainer}
          data={usersData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default FilterUsers;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 80,
  },
  inputFilter: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: "70%",
    padding: 7,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: "34%",
    padding: 7,
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 700,
  },
  itemContainer: {
    width: "93%",
  },
  item: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#008785",
    padding: 7,
    marginBottom: 7,
  },
  itemText: {
    textAlign: "center",
    color: "white",
    fontWeight: 600,
  },
  button: {
    borderColor: "black",
		borderWidth: 2,
		borderRadius: 10,
		backgroundColor:"black",
		paddingVertical: 8,
		paddingHorizontal: 12,
		elevation: 4,
	},
	buttonText:{
		fontSize:15,
		fontWeight:700,
		color:"white"
	  },
	pressed: {
		opacity: 0.7
	}
});
