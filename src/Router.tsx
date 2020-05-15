import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './screens/Splash';
import Shop from './screens/Shop';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route component={Splash} exact path="/" />
			<Route component={Shop} exact path="/shop" />
		</Switch>
	</BrowserRouter>
);

export default Router;
