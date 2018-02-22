import React from 'react';
import PostService from '../../service/post';
import PostItemMD from '../postitem/postitemmd';
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page: 1,
            perPage: 0,
            total: 0,
        }
    }
    componentDidMount() {
        this.getListPost(this.state.page)
    }
    getListPost(page) {
        PostService.getList(page).then(res => {
            this.setState({
                posts: res.data.data,
                perPage: 1,
                total: res.total
            })
        })
      
    }
    render() {
        return (
            <div className="content-block-single">
                <div className="content-panel">
                    <div className="content-panel-body article-list">
                        <div className="popular-articles-middle">
                            <div className="content-panel-title">
                                <a href="blog.html" className="right">Read all articles</a>
                                <h2>The Coolest Stories</h2>
                            </div>
                        </div>

                        {
                            this.state.posts.length > 0 && this.state.posts.map((post, index) => {
                                return (
                                    <PostItemMD post={post} key={index}/>
                                )
                            })
                        }

                    </div>
                    <div className="content-panel-body pagination">
                        <a className="prev page-numbers" href="#"><i className="fa fa-angle-left"></i>Previous</a>
                        <a className="page-numbers" href="#">1</a>
                        <span className="page-numbers current">2</span>
                        <a className="page-numbers" href="#">3</a>
                        <a className="page-numbers" href="#">4</a>
                        <a className="page-numbers" href="#">5</a>
                        <a className="next page-numbers" href="#">Next<i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div className="content-panel">
                    <div className="content-panel-body do-space">
                        <a href="#" target="_blank"><img src="images/no-space-2.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;