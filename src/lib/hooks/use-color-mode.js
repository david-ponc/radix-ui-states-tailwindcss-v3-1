import { useEffect, useState } from 'react';
import { changeColorPreference } from '../utils';

const useColorMode = () => {
	const [colorMode, setColorMode] = useState('light');

	useEffect(() => {
		changeColorPreference(colorMode);
	}, [colorMode]);

	const applyColorMode = (evt) => {
		evt.preventDefault();
		const { color } = evt.target;
		setColorMode(color.value);
	};

	return {
		colorMode,
		setColorMode,
		applyColorMode,
	};
};

export default useColorMode;
