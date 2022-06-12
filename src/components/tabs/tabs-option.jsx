import { Trigger } from '@radix-ui/react-tabs';
import clns from 'classnames';

const TabsOption = ({ value, children }) => (
	<Trigger
		className={clns(
			'cursor-default rounded-lg px-8 py-2 text-sm font-medium',
			'hover:bg-zinc-200/60 [&[data-state=active]]:bg-white',
			'dark:hover:bg-zinc-700/50 dark:[&[data-state=active]]:bg-zinc-700'
		)}
		value={value}
	>
		{children}
	</Trigger>
);

export default TabsOption;
