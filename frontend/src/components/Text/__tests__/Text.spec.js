import React from 'react';
import Text from '../Text.jsx';
import { render } from '@testing-library/react';

describe('Accordian Component:', () => {
	it('should render', () => {
		const { container } = render(
			<Text text="Hello World" style={{ fontSize: '2rem' }} />
		);
		expect(container).toMatchSnapshot();
	});
});
