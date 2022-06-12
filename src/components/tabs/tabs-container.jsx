import { Root } from '@radix-ui/react-tabs';

const TabsContainer = ({ defaultValue, children, ...props }) => (
	<Root defaultValue={defaultValue} {...props}>
		{children}
	</Root>
);

export default TabsContainer;
