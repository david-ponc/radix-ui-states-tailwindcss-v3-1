const appendElementOnArrayByProperty = (array, element, property) => {
	const newArray = [...array];

	const lowerCasedDefault = element[property].toLowerCase().slice(0, 2);
	const index = array.findIndex((country) =>
		country[property].toLowerCase().startsWith(lowerCasedDefault)
	);

	newArray.splice(index, 0, element);

	return newArray;
};

export default appendElementOnArrayByProperty;
