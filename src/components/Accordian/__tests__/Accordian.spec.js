import Accordian from '../Accordian.jsx';
import { AccordianData } from 'src/__mocks__/mockData.js';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import React, { Suspense } from 'react';
import { fireEvent, render } from '@testing-library/react';

const renderAccodian = (data, deleteHandler) =>
	render(
		<div data-testid="test-id">
			<ParserProvider value={defaultParser}>
				<Suspense fallback={<></>}>
					<Accordian data={data} deleteHandler={deleteHandler} />
				</Suspense>
			</ParserProvider>
		</div>
	);

describe('Accordian Component:', () => {
	it('should render', () => {
		const { container } = renderAccodian(AccordianData);
		expect(container).toMatchSnapshot();
	});
	it('should display delete button when passed a "deleteHandler"', () => {
		let deletedIndex = null;
		const deleteHandler = jest.fn((e, i) => {
			deletedIndex = i;
		});
		const { container, getByTestId } = renderAccodian(
			AccordianData,
			deleteHandler
		);
		const deleteBtn = getByTestId('test-id').querySelector(
			'.editor-icon-btn__delete'
		);
		expect(container).toMatchSnapshot();
		fireEvent.click(deleteBtn);
		expect(deletedIndex).toBe(0);
		expect(deleteHandler).toBeCalledTimes(1);
	});
});
