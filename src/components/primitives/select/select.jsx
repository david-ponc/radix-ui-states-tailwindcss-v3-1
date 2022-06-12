import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clns from 'classnames';

const Select = ({ name, value, onChange, defaultValue, children }) => (
	<SelectPrimitive.Root
		value={value}
		name={name}
		onValueChange={onChange}
		defaultValue={defaultValue}
	>
		<SelectPrimitive.Trigger
			aria-label='option'
			className={clns(
				'flex w-full cursor-default items-center justify-between gap-2 rounded-lg px-4 py-3',
				'bg-zinc-100',
				'dark:bg-zinc-800'
			)}
		>
			<SelectPrimitive.Value />
			<SelectPrimitive.Icon className='flex'>
				<ChevronDownIcon />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
		<SelectPrimitive.Content
			className={clns('w-full rounded-lg', 'bg-zinc-50', 'dark:bg-zinc-800')}
		>
			<SelectPrimitive.ScrollUpButton className='flex items-center justify-center p-2'>
				<ChevronUpIcon />
			</SelectPrimitive.ScrollUpButton>
			<SelectPrimitive.Viewport>
				<SelectPrimitive.Group className='p-2'>
					{children}
				</SelectPrimitive.Group>
			</SelectPrimitive.Viewport>
			<SelectPrimitive.ScrollDownButton className='flex items-center justify-center p-2'>
				<ChevronDownIcon />
			</SelectPrimitive.ScrollDownButton>
		</SelectPrimitive.Content>
	</SelectPrimitive.Root>
);

export default Select;
