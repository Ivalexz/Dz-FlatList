import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const Translator = () => {
  const [word, setWord] = useState("");
  const [tran, setTran] = useState("");
  const [search, setSearch] = useState("");
  const [translationData, setTranslationData] = useState([]);
  const [searchItem, setSearchItem] = useState(null);

  const SearchItemFunc = (item) => {
    const foundItem = translationData.find(
      (data) => item.trim() === data.word || item.trim() === data.translation
    )
  
    if (foundItem) {
      setSearch("");
      setSearchItem(foundItem);
    } 
    else {
      alert("Нічого не знайдено по вашому запиту");
      setSearchItem(null);
    }
  };

  const renderItem = ({ item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {item.word} - {item.translation}
        </Text>
      </View>
    );
  };

  const addEl = () => {
    if (word.trim() !== "" && tran.trim() !== "") {
      setTranslationData([
        ...translationData,
        { word: word.trim(), translation: tran.trim() },
      ]);
      setTran("");
      setWord("");
    } else {
      alert("Заповніть усі поля!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Перекладач слів</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Пошук"
          onChangeText={setSearch}
          value={search}
          style={styles.inputSearch}
        />
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => SearchItemFunc(search)}
        >
          <Text style={styles.buttonText}>Шукати</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Слово"
          onChangeText={setWord}
          value={word}
          style={styles.input}
        />
        <TextInput
          placeholder="Переклад"
          onChangeText={setTran}
          value={tran}
          style={styles.input}
        />
        <PrimaryButton children={"Додати"} onPress={addEl} />
      </View>
      <Text style={styles.text}>Словник:</Text>
      {searchItem  ? (
        <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            {searchItem.word} - {searchItem.translation}
          </Text>
        </View>
        </View>
      ) : (
        <FlatList
          style={styles.itemContainer}
          data={translationData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Translator;

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
  inputSearch: {
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
