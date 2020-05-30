import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

if (!process.env.PRISMIC_URI || !process.env.PRISMIC_ACCESS_TOKEN) {
	throw new Error('Missing Prismic Env Vars');
}

const client = new ApolloClient({
	link: PrismicLink({
		uri: process.env.PRISMIC_URI,
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
	}),
	cache: new InMemoryCache(),
});

export default client;
