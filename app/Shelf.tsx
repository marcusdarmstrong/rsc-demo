import { query } from './graphql';
import ShelfQuery from './ShelfQuery';

type ShelfItem = {
	readonly text: string;
}

export async function DynamicShelf({ placement }: { placement: string }) {
	const shelfItems = await query<ShelfItem[]>(ShelfQuery);
	return shelfItems.map((item) => <aside key={item.text} className="bg-emerald-600 h-64 w-64 m-8 p-4">{item.text}</aside>);
}

export function ShimmeryShelf() {
	return <aside className="bg-slate-600 h-64 w-64 p-4 m-8"></aside>;
}