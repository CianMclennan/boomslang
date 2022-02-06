export default ['screen_2', 'screen_1', 'screen_3'];

export const NavigationRules = {
	screen_3: {
		next: 'screen_2',
	},
	screen_2: {
		prev: 'screen_3',
	},
};
