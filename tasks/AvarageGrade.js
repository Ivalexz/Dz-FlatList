import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import PrimaryButton from "../PrimaryButton";

const AvarageGrade = () => {
  const [gradesArr, setGradesArr] = useState([]);
  const [grade, setGrade] = useState("");
  const [count, setCount] = useState(0);
  const [sum, setSum]=useState(0);

  const addGrade = () => {
    if (grade.length !== 0) {
      setGradesArr([...gradesArr, grade]);
      setSum(sum+parseInt(grade))
      setGrade("");
      setCount(count + 1);
    } else {
      alert("Заповніть усі поля!");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Калькулятор середнього балу</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Оцінка"
          keyboardType="numeric"
          value={grade}
          onChangeText={setGrade}
          style={styles.input}
        />
        <PrimaryButton
          children={"Додати"}
          onPress={() => {
            addGrade()
          }}
        />
      </View>

      <Text style={styles.text}>Середній бал:  {count > 0 ? Math.round((sum/count) * 10) / 10 : 0}</Text>
    </View>
  );
};

export default AvarageGrade;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: "50%",
    textAlign: "center",
    width: "85%",
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
    marginVertical: 20,
    fontSize: 25,
    width: "80%",
    textAlign: "center",
  },
});
