import React from 'react';
import { View, Button } from 'react-native';
import {signIn} from './../../services/auth';

const SignIn: React.FC = () => {

	async function handleSignIn() {
		const response = await signIn();
		console.log(response);
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center'
			}}
		>
			<Button title="Sign In" onPress={handleSignIn}></Button>
		</View>
	);
}

export default SignIn;