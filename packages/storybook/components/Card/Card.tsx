import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

type IITCardProps = {
	
	title: string
	description: string
    image: string

}

export const IITCard: React.FC<IITCardProps> = (props) => {
	const { title, description, image } = props

	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			{/* <Button title={buttonText} onPress={onButtonPress} color={colorButton}></Button> */}
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		marginBottom: 10,
		textAlign: "center"
	}
})