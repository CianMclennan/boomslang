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
	if (!obj) return obj;
	const {
		screen_id: screenId,
		path: parentPath,
		component: componentName,
		...props
	} = obj;
	const component = components[componentName];
	if (component) {
		const path = parentPath ?? screenId;
		if (!path) {
			console.error(`Component '${componentName}' did not receive a path.`);
		}
		const isLoaded = loadedComponents.has(componentName);
		if (!isLoaded) loadedComponents.add(componentName);
		return isLoaded ? (
			React.createElement(component, { ...props, path })
		) : (
			<Suspense fallback={'.'}>
				{React.createElement(component, { ...props, path })}
			</Suspense>
		);
	}
	return obj;
};

export default parse;
