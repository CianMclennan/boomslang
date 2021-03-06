import React from 'react';
import PropTypes from 'prop-types';

const Text = ({text}) => {
    return <>
        {text}
    </>
}

Text.propTypes = {
    text: PropTypes.string,
}


export default Text;