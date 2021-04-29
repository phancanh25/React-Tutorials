import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import AppJSX from './JSX/App'
import AppSLTCPN from './Components/AppSTL'
import AppSTFCPN from './Components/AppSTF'
import AppState from './State/AppState'
import AppProps from './Props/AppProps'
import AppSAP from './StateAndProps/AppSAP'
// import App from './Props/App'
import AppSS from './ComponentAPI/AppSS'
import AppFU from './ComponentAPI/AppFU'
import AppFDN from './ComponentAPI/AppFDN'
import AppLC from './ComponentLifeCycle/AppLC'
import App from './JSX/App';
import AppForm from './ReactJsForm/AppForm';
import AppFormCPL from './ReactJsForm/AppFormCPL';
import AppEvent from './ReactEvent/AppEvent';
import AppEventChild from './ReactEvent/ReactEventChild';
import AppRefs from	 './Refs/AppRefs';
import AppKey from './Keys/AppKey';
// import AppRouter from './Router/AppRouter';
// import Home from './Router/Home';
// import Contact from './Router/Contact';
// import About from './Router/About';
//Cho nay can xem lai

ReactDOM.render(
	<React.StrictMode>
		<AppJSX />
		<AppSLTCPN/>
		<AppSTFCPN/>
		<AppState/>
		{/* <AppProps headerProp = "Header from props..." contentProp = "Content from props..."/> */}
		<AppProps/>
		<AppSAP/>
		<AppSS/>
		<AppFU/>
		<AppFDN/>
		<AppLC/>
		<AppForm/>
		<AppFormCPL/>
		<AppEvent/>
		<AppEventChild/>
		<AppRefs/>
		<AppKey/>
		 {/* <AppRouter history = {browserHistory}>
			<Route path = "/" component = {AppRouter}>
				<Route path = "home" component = {Home} />
				<Route path = "about" component = {About} />
				<Route path = "contact" component = {Contact} />
			</Route>
		</AppRouter> */}
	</React.StrictMode>,
	document.getElementById('root')
);