import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import SideBar from './layout/sidebar';
import Slide from './layout/slide';
import { Home } from './home/home';
export class Master extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div class="boxed">
				<Header />
				<section class="content">
					<div class="wrapper">
						<Slide />
						<div class="content-block has-sidebar">
							<Home />
							<SideBar />
						</div>
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

export default Master;