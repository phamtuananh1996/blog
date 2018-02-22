import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import SideBar from './layout/sidebar';
import Slide from './layout/slide';
import routes from './../routes';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
  } from 'react-router-dom'
export class Master extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<Router>
			<div className="boxed">
				<Header />
				<section className="content">
					<div className="wrapper">
						<Slide />
						<div className="content-block has-sidebar">
								<Switch>
									{
										routes.map((route,index)=>{
											return (
												<Route exact={route.exact}
													   path={route.path}
													   component={route.main}
													   key={index}
												/>
											)
										})
									}
								</Switch>
							<SideBar />
						</div>
					</div>
				</section>

				<Footer />
			</div>
			</Router>
		)
	}
}

export default Master;