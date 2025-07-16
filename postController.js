/**
 * *************************
 * _________________________
 *  @description:
 * __________________________
 * *************************
 * to display post data and length. Also shows (commented) how to use CommonJS imports from utils.js for utility functions.
 */

const posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'},
    {id:3, title: 'Post Three'},
];

const getPosts = () => posts;


export const getPostsLength = () => posts.length;


export default getPosts;