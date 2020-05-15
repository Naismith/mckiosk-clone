import React from 'react';
import Router from './Router';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './config/theme';

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
			<Router />
		</ThemeProvider>
	</>
);

export default App;
