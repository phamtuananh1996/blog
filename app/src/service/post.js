import env from '../common/env';
let url = env.URL;
function getList(page) {
    return fetch(url + 'posts?page=' + page).then(res => res.json())
}

function getPost(id) {
    return fetch(url + 'posts/' + id).then(res => res.json())
}

function getPostFilter(filter,amount){
    return fetch(url + 'posts/filter/'+filter+'/'+amount).then(res => res.json())
}

export default {
  getList,
  getPost,
  getPostFilter
}