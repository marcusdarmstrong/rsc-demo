'use client';

import { useState, Suspense } from 'react';
import SearchQuery from './SearchQuery';
import { useQuery } from './graphql-client';

function SearchResults({ search }) {
  const [ searchResults ] = useQuery(SearchQuery, { search });
  return (
    <ol>
      {searchResults.map((result) => <li key={result}>{result}</li>)}
    </ol>
  );
}

export default function Search({ initialSearchTerm }) {
  const [ searchTerm, setSearchTerm ] = useState(initialSearchTerm);
  return (
    <div>
      <input className="bg-slate-400" type="text" value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)} />
      <button onClick={() => setSearchTerm('')}>x</button>
      <Suspense fallback={<ol><li>Loading...</li></ol>}>
        <SearchResults search={searchTerm} />
      </Suspense>
    </div>
  )
}
