import { useState } from "react";
import { View, StyleSheet, Text, FlatList, TextInput } from "react-native";
import PrimaryButton from "../PrimaryButton";

const Quiz = ({ questions }) => {
  const [answersData, setAnswersData] = useState([]);
  const [answer, setAnswer] = useState("");

  const addAnswer = (index) => {
    if (answer[index] !== "") {
        const newAnswersData = [...answersData];
        newAnswersData[index] = answer[index];
        setAnswersData(newAnswersData);
  
        const newCurrentAnswers = [...answer];
        newCurrentAnswers[index] = "";
        setAnswer(newCurrentAnswers);
      } else {
        alert('Заповніть поле!');
      }
  };

  const AnswerChange = (text, index) => {
    const newCurrentAnswers = [...answer];
    newCurrentAnswers[index] = text;
    setAnswer(newCurrentAnswers);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.question}>
          {item.id}. {item.question}
        </Text>
        <Text style={styles.text}>
          Відповідь: {answersData[index] || '-'}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ваша відповідь"
            onChangeText={(text) => AnswerChange(text, index)}
            value={answer[index]}
            style={styles.input}
          />
          <PrimaryButton onPress={() => addAnswer(index)}>
            Додати
          </PrimaryButton>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Сортувальник даних:</Text>

      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 80,
    marginBottom: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    width: "60%",
    backgroundColor:"white"
  },
  item:{
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#cffbe2",
    padding: 7,
    marginBottom:7,
  },
  text:{
    textAlign:"center"

  },
  question:{
    fontWeight:700,
    textAlign:"center"
  }
});
