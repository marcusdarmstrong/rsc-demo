'use client';

import { useState, Suspense } from 'react';
import SearchQuery from './SearchQuery';
import { useQuery } from './graphql-client';

function SearchResults({ search }: { search: string }) {
  const [ searchResults ] = useQuery<string[]>(SearchQuery, { search });
  return (
    <ol>
      {searchResults.map((result) => <li key={result}>{result}</li>)}
    </ol>
  );
}

export default function Search({ initialSearchTerm }: { initialSearchTerm: string }) {
  const [ searchTerm, setSearchTerm ] = useState(initialSearchTerm);
  return (
    <main>
      <input className="bg-slate-400" type="text" value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)} />
      <Suspense fallback={<ol><li>Loading...</li></ol>}>
        <SearchResults search={searchTerm} />
      </Suspense>
    </main>
  )
}
