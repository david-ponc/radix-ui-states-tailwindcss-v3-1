import clns from 'classnames';

const Badge = ({ name, version }) => (
	<p
		className={clns(
			'rounded-md py-1 px-3 text-sm font-medium',
			'bg-zinc-200/70 text-zinc-500',
			'dark:bg-zinc-800'
		)}
	>
		{name} {version}
	</p>
);

export default Badge;
