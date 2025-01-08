import { View, TextInput, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const ContactManager = ({contactData}) => {
  const [usrName, setUsrName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState(contactData);

  const addEl = () => {
    if (usrName.trim() !== "" && phone.trim() !== "") {
      setContacts([...contacts, { usrName: usrName.trim(), phone: phone.trim() }]);
      setUsrName("");
      setPhone("");
    } else {
      alert("Заповніть усі поля!");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {item.phone} - {item.usrName}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.mainText}>Менеджер контактів</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Ім'я"
              onChangeText={setUsrName}
              value={usrName}
              style={styles.input}
            />

            <TextInput
              placeholder="Телефон"
              onChangeText={setPhone}
              value={phone}
              style={styles.input}
              keyboardType="phone-pad"
            />
            <PrimaryButton children={"Додати"} onPress={addEl} />
          </View>
          <Text style={styles.text}>Контакти:</Text>
          <FlatList
            style={styles.taskContainer}
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ContactManager;

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
    height: 39,
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
  picker: {
    marginTop: -15,
    marginLeft: -15,
    width: "130%",
  },
});
