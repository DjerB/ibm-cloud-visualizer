import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import Enterprise from './views/enterprise';
import Infrastructure from './views/infrastructure';
import HA from './views/ha';
import Kubernetes from './views/kubernetes';

const App = () => {

	return (
		<Router>
			<Switch>
				<Route path={ROUTES.INFRASTRUCTURE}>
					<Infrastructure />
				</Route>
				<Route path={ROUTES.KUBERNETES}>
					<Kubernetes />
				</Route>
				<Route path={ROUTES.HA}>
					<HA />
				</Route>
				<Route path={ROUTES.ENTERPRISE}>
					<Enterprise />
				</Route>
				<Redirect exact to={ROUTES.HA} />
			</Switch>
		</Router>
	);
}

export default App;
