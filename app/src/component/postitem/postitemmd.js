import React from 'react';
import {Link} from 'react-router-dom'
class PostMD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="item">
                <div className="item-header">
                    <Link to={"/detail/"+this.props.post.id}>
                        <span className="comment-tag"><i className="fa fa-comment-o"></i>290<i></i></span>
                        <span className="read-more-wrapper"><span className="read-more">Read full article<i></i></span></span>
                        <img src={this.props.post.image} alt="" />
                    </Link>
                </div>
                <div className="item-content">
                    <strong className="category-link"><a href="category.html">{this.props.post.category.name}</a></strong>
                    <h3><Link to={"/detail/"+this.props.post.id}>{this.props.post.title}</Link></h3>
                    <span className="item-meta">
                        <Link to={"/detail/"+this.props.post.id}><i className="fa fa-comment-o"></i>82 comments</Link>
                        <Link to={"/detail/"+this.props.post.id}><i className="fa fa-clock-o"></i>March 30, 2015</Link>
                    </span>
                    <p>{this.props.post.content}</p>
                    <Link to={"/detail/"+this.props.post.id}>Read full article<i className="fa fa-mail-forward"></i></Link>
                </div>
            </div>

        )
    }
}

export default PostMD;