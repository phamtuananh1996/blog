import React from 'react';
import {Link} from 'react-router-dom';
export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="main-menu">
            <a href="#dat-menu" className="dat-menu-button"><i className="fa fa-bars"></i>Show Menu</a>
            <div className="main-menu-placeholder">
                <div className="main-menu-wrapper">
                    <div className="menu-search-thing">
                        <form action="http://sendigo.orange-themes.com/html/blog.html">
                            <input type="text" placeholder="Search something.." />
                            <input type="submit" value="Search" />
                        </form>
                        <button><i className="fa fa-search"></i></button>
                    </div>
                    <ul className="top-main-menu load-responsive" rel="Main Menu">
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/detail/123456"><span>Blog page</span></Link>
                            <ul className="sub-menu">
                                <li><a href="blog2.html">Blog page #2</a></li>
                                <li><a href="category.html">Category page</a></li>
                                <li><a href="post.html"><span>Post page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="post-no-image.html">Post with no image</a></li>
                                        <li><a href="post-sidebar-left.html">Post, sidebar on left</a></li>
                                        <li><a href="post-similar.html">Post with similar articles</a></li>
                                        <li><a href="post-no-comments.html">Post without comments</a></li>
                                        <li><a href="post.html">Post with review block</a></li>
                                    </ul>
                                </li>
                                <li><a href="full-width.html">Full width page</a></li>
                                <li><a href="error404.html">Error 404 page</a></li>
                            </ul>
                        </li>
                        <li className="has-ot-mega-menu"><a href="#"><span>Mega Menu</span></a>
                            <ul className="ot-mega-menu">
                                <li>

                                    <div className="widget">
                                        <h3>Live feed from instagram</h3>
                                        <div className="widget-instagram-photos">

                                            <div className="item">
                                                <div className="item-header">
                                                    <a href="#"><img src="../../distilleryimage1-a.akamaihd.net/427393eef7af11e2b65722000a9e00be_7.jpg" alt="" /></a>
                                                </div>
                                                <div className="item-content">
                                                    <span className="insta-like-count"><i className="fa fa-heart"></i>160 likes</span>
                                                    <h4><a href="#">How The Walking Dead irresistible to...</a></h4>
                                                    <span className="item-meta">
                                                        <a href="#"><i className="fa fa-clock-o"></i>3 days ago</a>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="item">
                                                <div className="item-header">
                                                    <a href="#"><img src="../../igcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/10576140_778241095547266_331905980_n.jpg" alt="" /></a>
                                                </div>
                                                <div className="item-content">
                                                    <span className="insta-like-count"><i className="fa fa-heart"></i>283 likes</span>
                                                    <h4><a href="#">Possit nominati peri culis cu sit, assum</a></h4>
                                                    <span className="item-meta">
                                                        <a href="#"><i className="fa fa-clock-o"></i>6 days ago</a>
                                                    </span>
                                                </div>
                                            </div>

                                            <a href="#" target="_blank" className="button-read-more">View instagram profile</a>

                                        </div>
                                    </div>

                                    <div className="widget">
                                        <h3>Subscribe to our newsletter</h3>
                                        <div className="widget-subscribe">
                                            <div>
                                                <p>Ne congue electram dignissim eos, ius verterem gubergren temporibus te, cu inciderint definitiones usu.</p>
                                            </div>
                                            <hr/>
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
                                        <h3>Popular Articles</h3>
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
                                            <a href="blog.html" className="button-read-more">Show more articles</a>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h3>Latest Article Comments</h3>
                                        <div className="widget-comments-list active">
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
                                </li>
                            </ul>
                        </li>
                        <li><a href="shortcodes.html">Shortcodes</a></li>
                        <li><a href="photo-gallery.html"><span>Photo Gallery</span></a>
                            <ul className="sub-menu">
                                <li><a href="photo-gallery-single.html">Photo gallery single</a></li>
                                <li><a href="photo-gallery-single-sidebar.html">Photo gallery single with sidebar</a></li>
                                <li><a href="photo-gallery-single-lightbox.html">Photo gallery single lightbox</a></li>
                            </ul>
                        </li>
                        <li><a href="archive.html">Archive</a></li>
                        <li><a href="contact-us.html">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
         )
    }
}
 
export default Menu;