import clns from 'classnames';
import { Option, Select } from '../../../components/primitives/select';

const SelectUncontrolledContent = ({
	colorMode,
	colorModeList,
	applyColorMode,
}) => (
	<form
		className='flex w-80 flex-col items-center gap-6'
		onSubmit={applyColorMode}
	>
		<Select name='color' defaultValue={colorMode}>
			{colorModeList.map(({ value, child }) => (
				<Option key={value} value={value}>
					{child}
				</Option>
			))}
		</Select>
		<button className='w-full cursor-default rounded-lg bg-blue-500 px-4 py-3 text-zinc-50 transition-all duration-75 hover:bg-blue-500/90 active:scale-98 active:bg-blue-600/90'>
			Change color mode
		</button>
		<p className='font-sm text-zinc-500'>
			Selected option:{' '}
			<span
				className={clns('font-medium', 'text-zinc-800', 'dark:text-zinc-300')}
			>
				{colorMode}
			</span>
		</p>
	</form>
);
export default SelectUncontrolledContent;
