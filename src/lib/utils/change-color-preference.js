const changeColorPreference = (colorMode) =>
	colorMode === 'dark'
		? document.documentElement.classList.add(colorMode)
		: document.documentElement.classList.remove('dark');

export default changeColorPreference;
