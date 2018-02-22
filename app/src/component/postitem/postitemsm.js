import React from 'react';
import {Link} from 'react-router-dom';
class PostSM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="item">
                <div className="item-header">
                    <Link to={"/detail/"+this.props.post.id}><img src={this.props.post.image} alt="" width="60"/></Link>
                </div>
                <div className="item-content">
                    <h4><Link to={"/detail/"+this.props.post.id}>{this.props.post.title}</Link></h4>
                    <span className="item-meta">
                        <Link to={"/detail/"+this.props.post.id}><i className="fa fa-comment-o"></i>82 comments</Link>
                        <Link to={"/detail/"+this.props.post.id}><i className="fa fa-clock-o"></i>March 30, 2015</Link>
                    </span>
                </div>
            </div>
        )
    }
}

export default PostSM;