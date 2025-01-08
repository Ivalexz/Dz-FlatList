import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const Hello = ()=>{
const [userName, setUserName]=useState("user");

    return(
        <View style={styles.container}>
            <Text style={styles.mainText}> Персоналізований привіт
            </Text>
            <TextInput
             placeholder="Ваше ім'я"
             onChangeText={setUserName}
             value={userName}
             style={styles.input}
            />
            <Text style={styles.text}>Привіт, {userName}!</Text>
        </View>
    )
}

export default Hello;

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    mainText: {
      fontSize: 30,
      fontWeight: 700,
      marginTop:"50%",
      textAlign:"center"
    },
    input: {
        marginTop:20,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        width: "85%",
        height:60,
        fontSize:25,
      },
      text: {
        marginVertical: 20,
        fontSize: 40,
        width:"80%",
         textAlign:"center"
      },
})