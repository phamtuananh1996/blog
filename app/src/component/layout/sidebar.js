import React from 'react';
export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <aside class="sidebar">
                <div class="widget">
                    <h3>Popular News</h3>
                    <div class="widget-article-list">

                        <div class="item">
                            <div class="item-header">
                                <a href="post-2.html"><img src="images/photos/image-7.jpg" alt="" /></a>
                            </div>
                            <div class="item-content">
                                <h4><a href="post.html">Watch the first 30 minutes of Mortal Kombat X</a></h4>
                                <span class="item-meta">
                                    <a href="post.html#comments"><i class="fa fa-comment-o"></i>82 comments</a>
                                    <a href="blog.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
                                </span>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item-header">
                                <a href="post.html"><img src="images/photos/image-8.jpg" alt="" /></a>
                            </div>
                            <div class="item-content">
                                <h4><a href="post.html">How The Walking Dead became irresistible to advertisers</a></h4>
                                <span class="item-meta">
                                    <a href="post.html#comments"><i class="fa fa-comment-o"></i>139 comments</a>
                                    <a href="blog.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
                                </span>
                            </div>
                        </div>

                        <div class="item">
                            <div class="item-header">
                                <a href="post.html"><img src="images/photos/image-9.jpg" alt="" /></a>
                            </div>
                            <div class="item-content">
                                <h4><a href="post.html">Hugh Jackman's time as Wolverine appears to be an end</a></h4>
                                <span class="item-meta">
                                    <a href="post.html#comments"><i class="fa fa-comment-o"></i>65 comments</a>
                                    <a href="blog.html"><i class="fa fa-clock-o"></i>March 30, 2015</a>
                                </span>
                            </div>
                        </div>

                        <a href="blog.html" class="button-read-more">Show more articles</a>

                    </div>
                </div>

                <div class="widget">
                    <h3>Join our social network alliance</h3>
                    <div class="social-widget">
                        <div class="social-squares">
                            <a href="#" target="_blank" class="hover-color-facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" target="_blank" class="hover-color-twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" target="_blank" class="hover-color-google-plus"><i class="fa fa-google-plus"></i></a>
                            <a href="#" target="_blank" class="hover-color-rss"><i class="fa fa-rss"></i></a>
                            <a href="#" target="_blank" class="hover-color-youtube"><i class="fa fa-youtube-play"></i></a>
                            <a href="#" target="_blank" class="hover-color-linkedin"><i class="fa fa-linkedin"></i></a>
                            <a href="#" target="_blank" class="hover-color-dribbble"><i class="fa fa-dribbble"></i></a>
                            <a href="#" target="_blank" class="hover-color-pinterest"><i class="fa fa-pinterest-p"></i></a>
                        </div>
                        <p>Vim corpora definitionem ad, est et tritani argumentum, ei nec adhuc dignissim.</p>
                    </div>
                </div>
                <div class="widget">
                    <h3>Subscribe to our newsletter</h3>
                    <div class="widget-subscribe">
                        <div>
                            <p>Ne congue electram dignissim eos, ius verterem gubergren temporibus te, cu inciderint definitiones usu.</p>
                        </div>
                        <hr />
                        <div class="alert-message alert-green">
                            <strong>Success! This a success message</strong>
                        </div>
                        <form action="#">
                            <label class="label-input">
                                <span>Your name</span>
                                <input type="text" value="" />
                            </label>
                            <label class="label-input">
                                <span>E-mail address</span>
                                <input type="email" value="" />
                            </label>
                            <input type="submit" class="button" value="Subscribe" />
                        </form>
                    </div>
                </div>

                <div class="widget">
                    <h3>Tag cloud</h3>
                    <div class="tagcloud">
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