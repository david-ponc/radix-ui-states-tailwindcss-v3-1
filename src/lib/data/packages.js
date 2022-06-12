import packageJson from '../../../package.json';

const packages = [
	{
		name: 'tailwindcss',
		version: packageJson.devDependencies.tailwindcss,
		to: 'https://tailwindcss.com/blog/tailwindcss-v3-1',
	},
	{
		name: '@radix-ui/react-select',
		version: packageJson.dependencies['@radix-ui/react-select'],
		to: 'https://www.radix-ui.com/docs/primitives/components/select',
	},
	{
		name: '@radix-ui/react-tabs',
		version: packageJson.dependencies['@radix-ui/react-tabs'],
		to: 'https://www.radix-ui.com/docs/primitives/components/tabs',
	},
];

export default packages;
