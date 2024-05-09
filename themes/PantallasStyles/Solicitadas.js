import { StyleSheet } from 'react-native';

export const colors = {
	primary: '#AE3838',
	secondary: '#2A5D90',
	tertiary: '#3fb76b',
	foreground: '#1B232B',
	background: '#1B232B',
	text: 'grey',
};


export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	text: {
		fontSize: 24,
		color: colors.text,
	},
	footer: {
		position: 'absolute',
		bottom: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '85%',
		height: 50, // puedes ajustar esto a la altura que prefieras
		fontSize: 14,
		color: 'black',
		backgroundColor: "white",
		borderRadius: 30,
		borderColor: 'black',
		borderWidth: 1,
		alignSelf: 'center',
	},
	footerImage: {
		width: 30,
		height: 30,
		padding: 10,
	},
	flatContainer: {
		backgroundColor: colors.primary,
		width: '90%',
		borderRadius: 16,
		marginTop: 20,
		padding: 20
	},
	pokemonContainer: {
		marginVertical: 10,
		alignItems: 'center',
	},
	condition: {
		fontSize: 24,
		color: '#2A5D90',
		backgroundColor: "colors.background",
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	sprite: {
		width: 200,
		height: 200,
		backgroundColor: colors.background,
		borderRadius: 24,
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: colors.text,
		borderBottomWidth: 1,
		marginTop: 20,
		color: colors.text,
	},
	link: {
		color: colors.secondary,
		marginTop: 20,
	},
	title: {
		fontSize: 24,
		color: "black",
		fontWeight: 'bold',
		marginTop: 15,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignSelf : "center",
	},
});

export const citaGestor = StyleSheet.create({
	container : {
		width : "85%",
		justifyContent : "flex-start",
		alignItems : "center"
	},
	citasContainer:{
	  color: '#1e2935',
	  borderRadius: 15,
	  
	  flexDirection: "column",
	  
	},
	citasTop:{
	  width: '90%',
	  color: '#1e2935',
	  marginTop : 5,
	  marginBottom : 5,
	  justifyContent : "auto",
	},
  });
