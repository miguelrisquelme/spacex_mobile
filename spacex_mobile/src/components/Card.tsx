/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
const {width} = Dimensions.get('window');

interface ICard {
	imagem: any;
	nome: string;
}

const Card: React.FC<ICard> = ({imagem, nome}) => {

	return (
		<View style={{ width: width * 0.9, height: 250, backgroundColor: "#2f2e41", marginHorizontal: width * 0.05, marginVertical: 20, borderRadius: 10, }}>
			<View style={{ height: "70%", borderTopLeftRadius: 10, borderTopRightRadius: 10,}}>
				<Image source={{uri: imagem}}  style={{width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10,}} />
			</View>
			<View style={{justifyContent: "center", alignItems: "center", height: "30%"}}>
				<Text style={{fontSize: 30, fontWeight: "bold", color: "#F9A826"}}>{nome}</Text>
			</View>
		</View>
	);
};

export default Card;
