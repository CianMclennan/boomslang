export const selectCurrentScreen = ({ navigation: { current_screen } }) =>
	current_screen;
export const selectInvalidScreens = ({
	navigation: { invalid_screen_content },
}) => invalid_screen_content;
export const selectScreenContent =
	(screenId) =>
		({ navigation: { screen_content } }) => {
			return screen_content[screenId];
		};
