import {
	TabsContainer,
	TabsContent,
	TabsOption,
	TabsOptions,
} from './components/tabs/';
import { colorModeList, options, packages } from './lib/data';

import {
	SelectControlledContent,
	SelectLargestContent,
	SelectUncontrolledContent,
} from './screens/home/tabs-content';

import Badge from './components/badge';
import useColorMode from './lib/hooks/use-color-mode';

const App = () => {
	const { colorMode, setColorMode, applyColorMode } = useColorMode();

	return (
		<section className='mx-auto flex h-screen max-w-3xl flex-col'>
			<TabsContainer
				className='grid grow grid-rows-[auto_1fr]'
				defaultValue={options[0].value}
			>
				<TabsOptions>
					{options.map(({ value, label }) => (
						<TabsOption key={value} value={value}>
							{label}
						</TabsOption>
					))}
				</TabsOptions>
				<main className='flex items-center justify-center'>
					<TabsContent value={options[0].value}>
						<SelectUncontrolledContent
							colorMode={colorMode}
							colorModeList={colorModeList}
							applyColorMode={applyColorMode}
						/>
					</TabsContent>
					<TabsContent value={options[1].value}>
						<SelectControlledContent
							colorMode={colorMode}
							onChange={setColorMode}
							colorModeList={colorModeList}
						/>
					</TabsContent>
					<TabsContent value={options[2].value}>
						<SelectLargestContent />
					</TabsContent>
				</main>
			</TabsContainer>
			<footer className='flex items-center justify-center gap-4 p-4'>
				{packages.map((pack) => (
					<a
						key={pack.name}
						href={pack.to}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Badge {...pack} />
					</a>
				))}
			</footer>
		</section>
	);
};

export default App;
