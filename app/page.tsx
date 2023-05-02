import { Suspense } from 'react';
import QuickLinks from './QuickLinks';
import Search from './Search';
import { ShimmeryShelf, DynamicShelf } from './Shelf';

export default function HomePage({ searchParams }: { searchParams: { [arg: string]: string } }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <QuickLinks />
      <Search initialSearchTerm={searchParams.search ?? ''} />
      <Suspense fallback={<ShimmeryShelf />}>
        {/* @ts-expect-error Server Component */}
        <DynamicShelf placement="HOME" />
      </Suspense>
    </>
  );
}
