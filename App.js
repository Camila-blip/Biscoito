import { useState, useCallback } from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import biscoitoAberto from "./src/Assets/biscoitoAberto.png";
import biscoito from "./src/Assets/biscoito.png";

export default function App() {
	const [textoFrase, setTextoFrase] = useState("");

	const quebraBiscoito = useCallback(() => {
		const Frases = [
			"Siga os bons e aprenda com eles.", 
			"O bom-senso vale mais do que muito conhecimento.", 
			"O riso é a menor distância entre duas pessoas.", 
			"Deixe de lado as preocupações e seja feliz.",
			"Realize o óbvio, pense no improvável e conquiste o impossível.",
			"Acredite em milagres, mas não dependa deles.",
			"A maior barreira para o sucesso é o medo do fracasso."
		];
    
		let numeroAleatorio = Math.floor(Math.random() * Frases.length );
		setTextoFrase(Frases[numeroAleatorio]);
	}, []);
    
	return (
		<View style={styles.container}>
			<Image
				source={textoFrase ? biscoitoAberto : biscoito} 
				style={styles.img}
			/>
			<Text style={styles.textofrase}>{textoFrase}</Text>
			<TouchableOpacity style={styles.botao} onPress={() => quebraBiscoito()}>
				<View style={styles.btnArea}>
					<Text style={styles.btnTexto}> Quebrar Biscoito</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	img:{
		width: 250,
		height:250
	},
	textofrase:{
		fontSize: 20,
		color: "#dd7b22",
		margin:30,
		fontStyle: "italic",
		textAlign: "center"
	},
	botao:{
		width: 230,
		height: 50,
		borderWidth:2,
		borderColor: "#dd7b22",
		borderRadius: 25,
	},
	btnArea:{
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	btnTexto:{
		fontSize: 18,
		fontWeight: "bold",
		color: "#dd7b22"
	}
});
