import listBlogs from './components/listBlogs';
import addBlog from './components/addBlog';
import showBlog from './components/singleBlog';

export default [
    {
        path: '/', component: listBlogs
    },
    {
        path: '/add', component: addBlog
    },
    {
        path: '/blog/:id', component: showBlog
    }
];
