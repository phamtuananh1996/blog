import React from 'react';
import Menu from './menu';
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
			<header className="header">		
				<div className="wrapper">
					<div className="header-main">
						<div className="header-main-logo">
							<a href="index-2.html"><img src="images/logo.png" alt="" data-ot-retina="images/logo@2x.png" /></a>
						</div>
						<div className="header-main-weather">
							<div className="weather-block">
								<i className="wi wi-day-lightning"></i>
								<strong>Jurmala, Latvia</strong>
								<span>+3&deg;C, Light rain</span>
							</div>
						</div>
						<div className="header-main-search">
							<div className="search-block">
								<form action="http://sendigo.orange-themes.com/html/blog.html">
									<input type="text" placeholder="Search something.." value="" />
								</form>
							</div>
						</div>
					</div> 
                    <Menu />
				</div>

               
			</header>
         )
    }
}
 
export default Header;