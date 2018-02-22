import React from 'react';
export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
			<footer className="footer">
				<div className="footer-menu">
					<div className="wrapper">
						<a href="#top" className="right"><i className="fa fa-chevron-up"></i>Back to <strong>top</strong></a>
						<ul>
							<li><a href="category.html">Nature is awesome</a></li>
							<li><a href="category.html">We look at todays fashion</a></li>
							<li><a href="category.html">Car &amp; Racing world</a></li>
							<li><a href="category.html">The urban news</a></li>
						</ul>
					</div>
				</div>
				<div className="wrapper">
					
					<div className="footer-widgets">

						<div className="widget-split">
							<div className="widget">
								<h3>About Sendigo</h3>
								<div>
									<div>
										<p>His quis postea id, illum audiam nominavi ex pro. Pri no eros omnes, cu soleat officiis iudicabit vel. Alii nostrum moderatius id cum, qui cu nominavi conclusionemque.</p>
									</div>
									<hr/>
									<ul className="widget-contact-info">
										<li><i className="fa fa-envelope"></i>name@myblog.com</li>
										<li><i className="fa fa-location-arrow"></i>Riga, Latvia</li>
										<li><i className="fa fa-phone"></i>+44 1387 255794</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="widget-split">
							<div className="widget">
								<h3>Tag cloud</h3>
								<div className="tagcloud">
									<a href="blog.html">Dignissim</a>
									<a href="blog.html">Habeo quods</a>
									<a href="blog.html">Sumo</a>
									<a href="blog.html">Prima dicunt</a>
									<a href="blog.html">Scripser</a>
									<a href="blog.html">Dignissim</a>
									<a href="blog.html">Scripser</a>
									<a href="blog.html">Scripser</a>
									<a href="blog.html">Dignissim</a>
									<a href="blog.html">Scripser</a>
									<a href="blog.html">Dignissim</a>
									<a href="blog.html">Habeo quods</a>
									<a href="blog.html">Sumo</a>
									<a href="blog.html">Prima dicunt</a>
									<a href="blog.html">Scripser</a>
									<a href="blog.html">Dignissim</a>
									<a href="blog.html">Habeo quods</a>
								</div>
							</div>
						</div>

						<div className="widget-split">
							<div className="widget">
								<h3>Popular articles</h3>
								<div className="widget-article-list">

									<div className="item">
										<div className="item-header">
											<a href="post.html"><img src="images/photos/image-7.jpg" alt="" /></a>
										</div>
										<div className="item-content">
											<h4><a href="post.html">Watch the first 30 minutes of Mortal Kombat X</a></h4>
											<span className="item-meta">
												<a href="post.html#comments"><i className="fa fa-comment-o"></i>82 comments</a>
												<a href="blog.html"><i className="fa fa-clock-o"></i>March 30, 2015</a>
											</span>
										</div>
									</div>

									<div className="item">
										<div className="item-header">
											<a href="post.html"><img src="images/photos/image-8.jpg" alt="" /></a>
										</div>
										<div className="item-content">
											<h4><a href="post.html">How The Walking Dead became irresistible to advertisers</a></h4>
											<span className="item-meta">
												<a href="post.html#comments"><i className="fa fa-comment-o"></i>139 comments</a>
												<a href="blog.html"><i className="fa fa-clock-o"></i>March 30, 2015</a>
											</span>
										</div>
									</div>

									<a href="blog.html" className="button-read-more">Show more reviews</a>

								</div>
							</div>
						</div>

						<div className="widget-split">
							<div className="widget">
								<h3>Latest article comments</h3>
								<div className="widget-comments-list">
									
									<div className="item">
										<div className="item-header">
											<img src="images/no-avatar.jpg" alt="" />
										</div>
										<div className="item-content">
											<h4><a href="#">Lindon Brook</a></h4>
											<p>Vim corpora definitionem ad, est et tritani argumentum, ei nec adhuc dignissim eos...</p>
											<span className="item-meta">
												<a href="post.html"><i className="fa fa-reply"></i>Read related article</a>
											</span>
										</div>
									</div>
									
									<div className="item">
										<div className="item-header">
											<img src="images/no-avatar.jpg" alt="" />
										</div>
										<div className="item-content">
											<h4><a href="#">Dane Goddard</a></h4>
											<p>Iudico consequat sit te, diceret nonumes adolescens id vim.</p>
											<span className="item-meta">
												<a href="post.html"><i className="fa fa-reply"></i>Read related article</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
         )
    }
}
 
export default Footer;