import React from 'react';
import PostHot from './sidebar/posthot';
export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <aside className="sidebar">
                <div className="widget">
                    <h3>Popular Hot</h3>
                    <div className="widget-article-list">
                        <PostHot/>
                        <a href="blog.html" className="button-read-more">Show more articles</a>
                    </div>
                </div>

                <div className="widget">
                    <h3>Join our social network alliance</h3>
                    <div className="social-widget">
                        <div className="social-squares">
                            <a href="#" target="_blank" className="hover-color-facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank" className="hover-color-twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" target="_blank" className="hover-color-google-plus"><i className="fa fa-google-plus"></i></a>
                            <a href="#" target="_blank" className="hover-color-rss"><i className="fa fa-rss"></i></a>
                            <a href="#" target="_blank" className="hover-color-youtube"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" target="_blank" className="hover-color-linkedin"><i className="fa fa-linkedin"></i></a>
                            <a href="#" target="_blank" className="hover-color-dribbble"><i className="fa fa-dribbble"></i></a>
                            <a href="#" target="_blank" className="hover-color-pinterest"><i className="fa fa-pinterest-p"></i></a>
                        </div>
                        <p>Vim corpora definitionem ad, est et tritani argumentum, ei nec adhuc dignissim.</p>
                    </div>
                </div>
                <div className="widget">
                    <h3>Subscribe to our newsletter</h3>
                    <div className="widget-subscribe">
                        <div>
                            <p>Ne congue electram dignissim eos, ius verterem gubergren temporibus te, cu inciderint definitiones usu.</p>
                        </div>
                        <hr />
                        <div className="alert-message alert-green">
                            <strong>Success! This a success message</strong>
                        </div>
                        <form action="#">
                            <label className="label-input">
                                <span>Your name</span>
                                <input type="text" value="" />
                            </label>
                            <label className="label-input">
                                <span>E-mail address</span>
                                <input type="email" value="" />
                            </label>
                            <input type="submit" className="button" value="Subscribe" />
                        </form>
                    </div>
                </div>

                <div className="widget">
                    <h3>Tag cloud</h3>
                    <div className="tagcloud">
                        <a href="blog.html">Dignissim</a>
                        <a href="blog.html">Habeo quods</a>
                        <a href="blog.html">Sumo</a>
                        <a href="blog.html">Prima dicunt</a>
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
            </aside>
        )
    }
}

export default SideBar;