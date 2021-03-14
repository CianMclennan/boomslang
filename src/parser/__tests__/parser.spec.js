import data from '../__mocks__/mockData.js';
import parse from '../parser.js';

describe('Component Parser', () => {
	it('Should return the value that is passed into it when it has no component attribute.', () => {
		let value = parse('string');
		expect(value).toBe('string');
		value = parse(2);
		expect(value).toBe(2);
	});
	it('Should return a react component if passed an object with valid component attribute', () => {
		const value = parse(data);
		expect(value['$$typeof']).not.toBeUndefined();
	});
});
