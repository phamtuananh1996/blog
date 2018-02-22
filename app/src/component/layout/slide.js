import React from 'react';
export class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="ot-breaking-news-body" data-breaking-timeout="4000" data-breaking-autostart="true">
                    <div className="ot-breaking-news-controls">
                        <button className="right" data-break-dir="right"><i className="fa fa-angle-right"></i></button>
                        <button className="right" data-break-dir="left"><i className="fa fa-angle-left"></i></button>
                        <strong><i className="fa fa-bar-chart"></i>Breaking News</strong>
                    </div>
                    <div className="ot-breaking-news-content">
                        <div className="ot-breaking-news-content-wrap">
                            <div className="item">
                                <strong><a href="post.html">Lorem ipsum dolor sit amet, novum virtute volutpat ea usu</a></strong>Qui ne idque dicit equidem, ei quod nostro partiendo sed, antiopam elaboraret inciderint qui in.
                    </div>
                            <div className="item">
                                <strong><a href="post.html">Lorem ipsum dolor sit amet, novum virtute volutpat ea usu</a></strong>Qui ne idque dicit equidem, ei quod nostro partiendo sed, antiopam elaboraret inciderint qui in.
                    </div>
                            <div className="item">
                                <strong><a href="post.html">Lorem ipsum dolor sit amet, novum virtute volutpat ea usu</a></strong>Qui ne idque dicit equidem, ei quod nostro partiendo sed, antiopam elaboraret inciderint qui in.
                    </div>
                            <div className="item">
                                <strong><a href="post.html">Lorem ipsum dolor sit amet, novum virtute volutpat ea usu</a></strong>Qui ne idque dicit equidem, ei quod nostro partiendo sed, antiopam elaboraret inciderint qui in.
                    </div>
                        </div>
                    </div>
                </div>
                <div className="top-slider-body" data-top-slider-timeout="6000" data-top-slider-autostart="true">
                    <div className="top-slider-controls">
                        <button className="left" data-top-slider-dir="left"><i className="fa fa-caret-left"></i> Previous</button>
                        <button className="right" data-top-slider-dir="right">Next <i className="fa fa-caret-right"></i></button>
                    </div>
                    <div className="top-slider-content">
                        <div className="top-slider-content-wrap active">
                            <div className="item">
                                <div className="item-header">
                                    <a href="post.html">
                                        <span className="comment-tag"><i className="fa fa-comment-o"></i>10<i></i></span>
                                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                                        <img src="images/photos/image-1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="item-content">
                                    <strong className="category-link"><a href="category.html">Nature is awesome</a></strong>
                                    <h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
                                </div>
                            </div>
                            <div className="item" data-color-top-slider="#867eef">
                                <div className="item-header">
                                    <a href="post.html">
                                        <span className="comment-tag"><i className="fa fa-comment-o"></i>132<i></i></span>
                                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                                        <img src="images/photos/image-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="item-content">
                                    <strong className="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
                                    <h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
                                </div>
                            </div>
                            <div className="item" data-color-top-slider="#867eef">
                                <div className="item-header">
                                    <a href="post.html">
                                        <span className="comment-tag"><i className="fa fa-comment-o"></i>290<i></i></span>
                                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                                        <img src="images/photos/image-3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="item-content">
                                    <strong className="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
                                    <h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
                                </div>
                            </div>
                        </div>
                        <div className="top-slider-content-wrap">
                            <div className="item">
                                <div className="item-header">
                                    <a href="post.html">
                                        <span className="comment-tag"><i className="fa fa-comment-o"></i>10<i></i></span>
                                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                                        <img src="images/photos/image-4.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="item-content">
                                    <strong className="category-link"><a href="category.html">Nature is awesome</a></strong>
                                    <h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
                                </div>
                            </div>
                            <div className="item" data-color-top-slider="#867eef">
                                <div className="item-header">
                                    <a href="post.html">
                                        <span className="comment-tag"><i className="fa fa-comment-o"></i>132<i></i></span>
                                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                                        <img src="images/photos/image-5.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="item-content">
                                    <strong className="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
                                    <h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
                                </div>
                            </div>
                            <div className="item" data-color-top-slider="#867eef">
                                <div className="item-header">
                                    <a href="post.html">
                                        <span className="comment-tag"><i className="fa fa-comment-o"></i>290<i></i></span>
                                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                                        <img src="images/photos/image-6.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="item-content">
                                    <strong className="category-link"><a href="category.html">Wee look at todays fashion</a></strong>
                                    <h3><a href="post.html">Greece's reform plan backed by creditors</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna esse cillum dolore...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Slide;