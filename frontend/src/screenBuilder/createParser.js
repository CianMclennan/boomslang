import isUndefined from 'lodash/isUndefined';
import React, { Suspense } from 'react';

/**
 * @type {Set<string>} Stores the names of components that have been loaded used to
 * determine if component needs to be wrapped in Suspense component
 */
const loadedComponents = new Set();

const createParser = (components = {}, isEditor = false) => {
	const parse = (obj) => {
		if (!(typeof obj === 'object')) return obj;
		const {
			screen_id: screenId,
			path: parentPath,
			component: _componentName,
			...props
		} = obj;
		const shouldUseEditorComponent =
			isEditor && !isUndefined(components[`${_componentName}Editor`]);

		const componentName = shouldUseEditorComponent
			? `${_componentName}Editor`
			: _componentName;
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
				<Suspense fallback={<></>}>
					{React.createElement(component, { ...props, path })}
				</Suspense>
			);
		}
		return JSON.stringify(obj);
	};
	return parse;
};

export default createParser;
