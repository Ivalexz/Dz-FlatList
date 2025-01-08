import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import PrimaryButton from "../PrimaryButton";

const SortData = ({ numbers }) => {
  const [sortedData, setSortedData] = useState(numbers);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  const SortUp = () => {
    let nums = [...numbers];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          let tmp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = tmp;
        }
      }
    }
    setSortedData(nums);
  };

  const SortDown = () => {
    let nums = [...numbers];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] < nums[j + 1]) {
          let tmp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = tmp;
        }
      }
    }
    setSortedData(nums);
  };

  const Default = () => {
    setSortedData(numbers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Сортувальник даних:</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton children={"Зростання"} onPress={SortUp} />
        <PrimaryButton children={"Спадання"} onPress={SortDown} />
        <PrimaryButton children={"Скинути"} onPress={Default} />
      </View>
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SortData;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 80,
    marginBottom:10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  itemContainer:{
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#009b84",
    padding: 6,
    marginBottom:5,
    width:50,
  },
  item:{
    color: "white",
    textAlign:"center"
  }
});

