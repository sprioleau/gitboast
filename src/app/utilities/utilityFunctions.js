export const getNumberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const composeClasses = (classesObject) => {
	const classList = Object.entries(classesObject);

	let newClassList = [];

	classList.forEach(([classString, condition]) => {
		const validString = typeof condition === "string" && condition === "";
		const validBoolean = typeof condition === "boolean" && condition === true;
		const classIsDefined = classString !== undefined;
		const validCondition = (validString || validBoolean) && classIsDefined;

		if (!validCondition) return;
		newClassList = newClassList.concat(classString);
	});

	return newClassList.join(" ");
};

export const openInNewTab = (url) => {
	const win = window.open(url, "_blank");
	if (win != null) {
		win.focus();
	}
};

// Get Label with Subject Verb Agreement
export const getLabelWithSva = (label, value) => {
	if (value === 1) return label.replace(/s$/, "");
	return label;
};

export const truncateString = (string, truncateAfterChars) => {
	if (string.length > truncateAfterChars) return `${string.substr(0, truncateAfterChars).trim()}...`;
	return string;
};

export const spaceAfterComma = (string) => {
	return string.split(",").join(", ");
};

export const countInstances = (array) => {
	let result = {};

	for (let i = 0; i < array.length; i++) {
		result[array[i]] = (result[array[i]] || 0) + 1;
	}

	return Object.keys(result).map((key) => ({ [key]: result[key] }));
};
