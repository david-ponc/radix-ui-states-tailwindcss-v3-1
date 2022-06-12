import clns from 'classnames';
import { useState } from 'react';
import { Option, Select } from '../../../components/primitives/select';
import { countriesList } from '../../../lib/data';

const SelectLargestContent = () => {
	const [country, setCountry] = useState('');

	return (
		<main className='flex w-80 flex-col items-center gap-6'>
			<Select value={country} onChange={setCountry}>
				{countriesList.map(({ name, code }) => (
					<Option key={code} value={code}>
						{name}
					</Option>
				))}
			</Select>
			<p className='font-sm text-zinc-500'>
				Selected option:{' '}
				<span
					className={clns('font-medium', 'text-zinc-800', 'dark:text-zinc-300')}
				>
					{country}
				</span>
			</p>
		</main>
	);
};

export default SelectLargestContent;
