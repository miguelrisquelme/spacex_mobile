import React from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Home: React.FC = ({ navigation }) => {
	return (
		<ScrollView
			style={{
				flex: 1,
			}}
			showsVerticalScrollIndicator={false}
		>
			<View
				style={{
					flex: 3,
					padding: 20,
				}}
			>
				<Text style={{
					color: "#2f2e41",
					fontSize: 30,
					fontWeight: "bold",
				}}>Bem vindo a </Text><Text style={{
					color: "#F9A826",
					fontSize: 30,
					fontWeight: "bold",
				}}>SpaceX Mobile</Text>
			</View>
			<View
				style={{
					padding: 20,
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "center"
				}}
			>
				<TouchableOpacity onPress={() => {navigation.navigate("Rockets")}}>
					<View 
						style={{
							padding: 30,
							borderRadius: 15,
							backgroundColor: "#2f2e41",
							width: 125,
							margin: 10,
							borderColor: "#F9A826",
							borderWidth: 5,
						}}
					>
						<FontAwesomeIcon name="rocket" color="#F9A826" size={55} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {navigation.navigate("Dragons")}}>
					<View 
						style={{
							padding: 30,
							borderRadius: 15,
							backgroundColor: "#2f2e41",
							width: 125,
							margin: 10,
							borderColor: "#F9A826",
							borderWidth: 5,
						}}
					>
						<FontAwesomeIcon name="ethernet" color="#F9A826" size={55} />
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

export default Home;