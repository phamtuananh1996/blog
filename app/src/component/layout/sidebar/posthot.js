import React from 'react';
import ServicePost from '../../../service/post';
import PostSM from '../../postitem/postitemsm';
class PostHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            post:[]
         }
    }
    componentDidMount(){
        ServicePost.getPostFilter('hot',3).then((res)=>{
            this.setState({
                post:res.data,
            });
        })
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.post.length>0 && this.state.post.map((post,index)=>{
                       return (
                            <PostSM post={post} key={index}/>
                       )
                    })
                }
            </div>
         )
    }
}
 
export default PostHot;