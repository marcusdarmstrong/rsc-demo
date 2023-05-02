import { query } from './graphql';
import NavLinksQuery from './NavLinksQuery';

export default async function QuickLinks() {
	const links = await query(NavLinksQuery);
	return (
		<div>
			{
        links.map((link) => 
          <a className="bg-red-400 inline-block py-2 px-4 rounded m-2" href={link.href} key={link.href}>
          {link.copy}
          </a>
        )
      }
		</div>
	);
}
