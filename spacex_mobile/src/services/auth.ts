export async function signIn() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				data: {
					nome: 'Miguel Riquelme',
				}
			})
		}, 2000);
	})
}