import data from 'src/screenBuilder/__mocks__/mockData.js';
import parse from 'src/screenBuilder/parser.js';

export default () => {
	return parse(data);
};
