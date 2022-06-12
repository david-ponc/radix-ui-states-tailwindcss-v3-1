import { List } from '@radix-ui/react-tabs';
import clns from 'classnames';

const TabsOptions = ({ children }) => (
	<List
		className={clns(
			'my-6 flex items-center gap-2 justify-self-center rounded-lg p-1',
			'bg-zinc-100',
			'dark:bg-zinc-800'
		)}
	>
		{children}
	</List>
);

export default TabsOptions;
