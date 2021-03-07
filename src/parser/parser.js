import React, { Suspense } from 'react';
import components from 'src/components/components.js';

/**
 * Takes an object and tries to create a React element from it.
 * @param {*} obj
 * @returns React element or the same object that was passed in if it is unparsable.
 */
const parse = (obj) => {
	const { component: componentName, ...props } = obj;
	const component = components[componentName];
	if (component) {
		return (
			<Suspense fallback={'.'}>
				{React.createElement(component, props)}
			</Suspense>
		);
	}
	return obj;
};

export default parse;
