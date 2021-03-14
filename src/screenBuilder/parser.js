import components from 'src/components/components.js';
import React, { Suspense } from 'react';
/**
 * @type {Set<string>} Stores the names of components that have been loaded used to
 * determine if component needs to be wrapped in Suspense component
 */
const loadedComponents = new Set();

/**
 * Takes an object and tries to create a React element from it.
 * @param {*} obj
 * @returns React element or the same object that was passed in if it is unparsable.
 */
const parse = (obj) => {
	const { component: componentName, ...props } = obj;
	const component = components[componentName];
	if (component) {
		const isLoaded = loadedComponents.has(componentName);
		if (!isLoaded) loadedComponents.add(componentName);
		return isLoaded ? (
			React.createElement(component, props)
		) : (
			<Suspense fallback={'.'}>
				{React.createElement(component, props)}
			</Suspense>
		);
	}
	return obj;
};

export default parse;
