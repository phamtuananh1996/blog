import React from 'react';
import PostService from '../../service/post';
export class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Post:[]
         }
    }
    componentDidMount(){
        PostService.getPost(this.props.match.params.id).then((res)=>{
            this.setState({
                Post:res.data
            })
        })
    }
    componentWillReceiveProps(newProps){
        PostService.getPost(newProps.match.params.id).then((res)=>{
            this.setState({
                Post:res.data
            })
        })
    }
    render() { 
        return ( 
            <div className="content-block-single">
            <div className="content-panel">
                 <p>{this.state.Post.title}</p>
                 <p>{this.state.Post.content}</p>
            </div>
        </div>
         )
    }
}
 
export default Detail;