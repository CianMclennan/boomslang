import parse from 'src/parser/parser.js';
import data from 'src/parser/__mocks__/mockData.js';

export default () => {
	return parse(data);
};
