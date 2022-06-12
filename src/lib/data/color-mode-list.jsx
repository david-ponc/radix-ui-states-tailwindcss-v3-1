import { MoonIcon, SunIcon } from '@primer/octicons-react';

const colorModeList = [
	{
		value: 'light',
		child: (
			<>
				<SunIcon /> Light
			</>
		),
	},
	{
		value: 'dark',
		child: (
			<>
				<MoonIcon /> Dark
			</>
		),
	},
];

export default colorModeList;
