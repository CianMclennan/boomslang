import { createContext, useContext } from 'react';

const ParserContext = createContext();

export const useParser = () => {
	return useContext(ParserContext);
};

export default ParserContext.Provider;
