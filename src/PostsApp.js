import React, {useMemo, useState} from 'react';
import './styles/styles.css';
import CardList from "./components/CardList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

const PostApp = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'fff', body: '245'},
        {id: 2, title: 'aaaaa', body: 'ccccccc'},
        {id: 3, title: 'lllllllllll', body: '2245an'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log('отработала функция')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))

    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
             <CardList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1"/>
        </div>
    )
};

export default PostApp;
