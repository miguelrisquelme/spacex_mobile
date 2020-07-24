/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

interface IRockets {
	imagem: any;
	titulo: string;
	descricao: string;
}

const CardInfo: React.FC<IRockets> = ({imagem, titulo, descricao}) => {
	return (
		<>
			<TouchableOpacity onPress={() => {}}>
			<View style={{
					flexDirection: "row",
					alignItems: "center",
					width: width * 0.9,
					padding: 15
				}}>
					<View>
						<Image source={{uri: imagem}} style={{width: 180, height: 180, borderRadius: 30}} />
					</View>
					<View
						style={{
							marginLeft: 10,
							width: 200
						}}
					>
						<Text 
						numberOfLines={2}
						style={{
							fontSize: 30,
							fontWeight: "bold"
						}}>{titulo}</Text>
						<Text
							numberOfLines={7}
						>{descricao}</Text>
						<Text style={{color: "#F9A826", fontSize: 17, fontWeight: "bold"}}>Ver mais</Text>
					</View>
				</View>
			</TouchableOpacity>
		</>
	);
};

export default CardInfo;
