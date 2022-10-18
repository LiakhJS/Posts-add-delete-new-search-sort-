import React from 'react';
import Card from "./Card";

const CardList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <Card remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default CardList;

