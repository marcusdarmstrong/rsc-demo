'use client';

import SearchQuery from './SearchQuery';

import { createContext, useContext, useRef, type ReactNode } from 'react';

const places = [
	'Boston',
	'New York',
	'New Mexico',
	'New Jersey',
	'Bogota',
	'Nevada',
	'Naples',
];

async function wait(ms: number) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

type CacheContextType = {
  promises: { [key: string]: Promise<unknown> },
  values: { [key: string]: unknown },
};

const CacheContext = createContext<CacheContextType>({ promises: {} , values: {} });
export const CacheProvider = ({ children }: { children: ReactNode }) => {
  // Please ignore my completely invalid use of refs as a request local to hack this together.
  const val = useRef({ promises: {}, values: {} });
  return  <CacheContext.Provider value={val.current}>{children}</CacheContext.Provider>;
}

export function useQuery<T>(query: string, variables: { [arg: string]: unknown } = {}): [T] {
  console.log('started', query, Date.now());
	let data: T = null as T;

	const { promises, values } = useContext(CacheContext);

	if (query === SearchQuery) {
    const search = variables.search as string;
		if (search in values) {
			return [values[search]] as [T];
		}
		if (!(search in promises)) {
			promises[search] = new Promise(async (resolve) => {
				await wait(500);
				values[search] = [places.filter(p => p.startsWith(search))]
				resolve(values[search]);
			})
		}

		throw promises[search];
	}

	return [data];
}