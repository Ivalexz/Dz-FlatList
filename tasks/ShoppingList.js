import {
  View,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const ShoppingList = () => {
  const [buy, setBuy] = useState("");
  const [list, setList] = useState([]);

  const addEl = () => {
    if (buy.trim() !== "") {
        setList([...list, buy.trim()]);
      setBuy("");
    }
    else{
        alert("Заповніть поле!");
    }
  };

  const element = ({ item, index }) => (
    <View style={styles.buy}>
      <Text style={styles.buyText}>
        {index + 1}. {item}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Список покупок</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Покупка"
          onChangeText={setBuy}
          value={buy}
          style={styles.input}
        />
        <PrimaryButton
          children={"Додати"}
          onPress={addEl}
        />
      </View>
      <Text style={styles.text}>Список:</Text>
      <FlatList
      style={styles.buyContainer}
        data={list}
        renderItem={element}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ShoppingList;

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
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: "70%",
    padding: 7,
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 700,
  },
  buyContainer:{
    width: "90%",
  },
  buy: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#3aaf7a",
    padding: 7,
    marginBottom:7,
  },
  buyText: {
    color: "white",
    fontWeight: 600,
  },
});
