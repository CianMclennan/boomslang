import React from 'react';
import common from 'src/common/common.js';

/**
 * Takes an object and tries to create a React element from it.
 * @param {*} obj
 * @returns
 */
const parse = (obj) => {
    const { component: componentName, ...props } = obj;
    const component = common[componentName];
    console.log(componentName);
    if (component) {
        return React.createElement(component, props);
    }
    return obj;
};

export default parse;
