import NavLinksQuery from './NavLinksQuery';
import ShelfQuery from './ShelfQuery';

async function wait(ms) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function query(query, variables = {}) {
  console.log('started', query, Date.now());
	if (query === NavLinksQuery) {
		await wait(50);
		return [{ href: '/', copy: 'Home' }];
	}
	if (query === ShelfQuery) {
		await wait(1500);
		return [{ background: '/image/path.png', text: 'Outdoors' }];
	}

	return null;
}