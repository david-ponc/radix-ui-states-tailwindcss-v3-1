import { CheckIcon } from '@primer/octicons-react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clns from 'classnames';

const Option = ({ value, children }) => (
	<SelectPrimitive.Item
		value={value}
		className={clns(
			'flex w-full cursor-default items-center justify-between gap-2 rounded-lg px-4 py-3 outline-none',
			'hover:bg-zinc-200 focus:bg-zinc-200 focus:ring-offset-zinc-100',
			'dark:hover:bg-zinc-700 dark:focus:bg-zinc-800 dark:focus:ring-offset-zinc-700'
		)}
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		<SelectPrimitive.ItemIndicator>
			<CheckIcon />
		</SelectPrimitive.ItemIndicator>
	</SelectPrimitive.Item>
);

export default Option;
