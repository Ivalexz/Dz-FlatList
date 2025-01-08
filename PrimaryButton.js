import {Pressable, StyleSheet, Text, View} from 'react-native';

const PrimaryButton = ({children, onPress}) => {
	return (
	  <Pressable
		style={({pressed}) =>
			[styles.container, pressed && styles.pressed]
		}
		onPress={onPress}>
		  <View>
			  <Text style={styles.buttonText}>{children}</Text>
		  </View>
	  </Pressable>
	)
}

export default PrimaryButton;

const styles = StyleSheet.create({
	container: {
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 10,
		backgroundColor:"#3aaf7a",
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
