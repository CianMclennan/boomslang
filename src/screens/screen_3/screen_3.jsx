import data from 'src/parser/__mocks__/mockData.js';
import parse from 'src/parser/parser.js';

export default () => {
	return parse(data);
};
