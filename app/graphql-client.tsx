'use client';

import SearchQuery from './SearchQuery';

import { createContext, useContext, useRef } from 'react';

const places = [
	'Boston',
	'New York',
	'New Mexico',
	'New Jersey',
	'Bogota',
	'Nevada',
	'Naples',
];

async function wait(ms) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

const CacheContext = createContext({ promises: {} , values: {} });
export const CacheProvider = ({ children }) => {
  // Please ignore my completely invalid use of refs as a request local to hack this together.
  const val = useRef({ promises: {}, values: {} });
  return  <CacheContext.Provider value={val.current}>{children}</CacheContext.Provider>;
}

export function useQuery(query, variables = {}) {
  console.log('started', query, Date.now());
	let data = null;

	const { promises, values } = useContext(CacheContext);

	if (query === SearchQuery) {
		if (variables.search in values) {
			return values[variables.search];
		}
		if (!(variables.search in promises)) {
			promises[variables.search] = new Promise(async (resolve) => {
				await wait(500);
				values[variables.search] = [places.filter(p => p.startsWith(variables.search))]
				resolve(values[variables.search]);
			})
		}

		throw promises[variables.search];
	}

	return [data];
}