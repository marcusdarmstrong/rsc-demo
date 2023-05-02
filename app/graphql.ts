import NavLinksQuery from './NavLinksQuery';
import ShelfQuery from './ShelfQuery';

async function wait(ms: number) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function query<T>(query: string, variables: { [arg: string]: unknown } = {}): Promise<T> {
  console.log('started', query, Date.now());
	if (query === NavLinksQuery) {
		await wait(50);
		return [{ href: '/', copy: 'Home' }, { href: '/Hotels', copy: 'Hotels' }] as T;
	}
	if (query === ShelfQuery) {
		await wait(1500);
		return [{ background: '/image/path.png', text: 'Outdoors' }] as T;
	}

	return null as T;
}