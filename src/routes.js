import listBlogs from './components/listBlogs';
import addBlog from './components/addBlog';

export default [
    {
        path: '/', component: listBlogs
    },
    {
        path: '/add', component: addBlog
    }
];
