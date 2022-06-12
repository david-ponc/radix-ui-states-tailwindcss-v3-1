import { appendElementOnArrayByProperty } from '../utils';
import countries from './countries.json';

const countriesList = appendElementOnArrayByProperty(
	countries,
	{
		name: 'Select once country',
		code: '',
	},
	'name'
);

export default countriesList;
