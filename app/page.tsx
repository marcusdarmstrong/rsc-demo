import { Suspense } from 'react';
import QuickLinks from './QuickLinks';
import Search from './Search';
import { ShimmeryShelf, DynamicShelf } from './Shelf';

export default function HomePage({ searchParams }) {
  return (
    <>
      <QuickLinks />
      <Search initialSearchTerm={searchParams.search ?? ''} />
      <Suspense fallback={<ShimmeryShelf />}>
        <DynamicShelf placement="HOME" />
      </Suspense>
    </>
  );
}
