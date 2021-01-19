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
