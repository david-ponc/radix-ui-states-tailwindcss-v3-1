import clns from 'classnames';
import { Option, Select } from '../../../components/primitives/select';

const SelectControlledContent = ({ colorMode, onChange, colorModeList }) => (
	<main className='flex w-80 flex-col items-center gap-6'>
		<Select value={colorMode} onChange={onChange}>
			{colorModeList.map(({ value, child }) => (
				<Option key={value} value={value}>
					{child}
				</Option>
			))}
		</Select>

		<p className='font-sm text-zinc-500'>
			Selected option:{' '}
			<span
				className={clns('font-medium', 'text-zinc-800', 'dark:text-zinc-300')}
			>
				{colorMode}
			</span>
		</p>
	</main>
);

export default SelectControlledContent;
