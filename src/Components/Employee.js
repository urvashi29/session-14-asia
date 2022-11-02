import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employee = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log(res.data);
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });
    })



    const postList = post.length ? (post.map((user) => {
        return (
            <React.Fragment key={user.id}>
                <p><Link to={'/employee/' + user.id}>{user.name}</Link></p>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </React.Fragment>
        )
    })) : (<p>No posts yet</p>)

    return (
        <>This is employee page
            {postList}
        </>
    )
}

export default Employee;