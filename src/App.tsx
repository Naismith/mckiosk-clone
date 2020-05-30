import React from 'react';
import Router from './Router';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './config/theme';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/react-hooks';

const GlobalStyle = createGlobalStyle`
	html, body {
		height: 100%;
		padding: 0;
		margin: 0;
	}

	html, body {
		box-sizing: border-box;
	}

	*, *::after, *::before {
		box-sizing: inherit;
		user-select: none;
		overscroll-behavior: none;
	}
`;

const App = () => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<ApolloProvider client={client}>
				<Router />
			</ApolloProvider>
		</ThemeProvider>
	</>
);

export default App;
