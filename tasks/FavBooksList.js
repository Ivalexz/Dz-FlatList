import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  FlatList,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const FavBooksList = ({ books }) => {
  const [book, setBook] = useState("");
  const [list, setList] = useState(books);

 const addBook = () => {
     if (book.trim() !== "") {
         setList([...list, book.trim()]);
       setBook("");
     }
     else{
         alert("Заповніть поле!");
     }
   };
 
   const renderItem = ({ item }) => (
     <View style={styles.book}>
       <Text style={styles.bookText}>{item}</Text>
     </View>
   );

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Улюблені книги</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Назва книги"
          onChangeText={setBook}
          value={book}
          style={styles.input}
        />
        <PrimaryButton
          children={"Додати"}
          onPress={addBook}
          style={styles.button}
        />
      </View>
      <Text style={styles.text}>Список:</Text>
      <FlatList
        style={styles.bookContainer}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FavBooksList;

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
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
  },
  bookContainer: {
    marginTop: 10,
    width: "80%",
  },
  book: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#3aaf7a",
    padding: 7,
    marginBottom:7,
  },
  bookText: {
    color: "white",
    fontWeight: 600,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: "70%",
    padding: 7,
  },
  button: {
    width: "20%",
  },
});
