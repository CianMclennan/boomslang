import React from 'react';
import parse from 'src/parser/parser.js';
import data from '../../parser/__mock__/mockData.js';

export default () => parse(data);