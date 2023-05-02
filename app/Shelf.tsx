import { query } from './graphql';
import ShelfQuery from './ShelfQuery';

export async function DynamicShelf({ placement }) {
	const shelfItems = await query(ShelfQuery);
	return shelfItems.map(item => <div key={item.text} className="bg-emerald-600 h-64 w-64 m-8 p-4">{item.text}</div>);
}

export function ShimmeryShelf() {
	return <div className="bg-slate-600 h-64 w-64 p-4 m-8"></div>;
}