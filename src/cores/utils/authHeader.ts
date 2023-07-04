export const authHeader = () => {
	// @ts-ignore
	const user = JSON.parse(sessionStorage.getItem('user'));
	if (user && user.token) {
		return { Authorization: `Bearer ${user.token}` };
	}
	return { Authorization: 'null' };
};
