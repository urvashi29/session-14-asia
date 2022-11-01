import React, { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then((res) => {
            console.log(res.data);
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });
    })


    const postList = post.length ? (post.map((user) => {
        return (
            <React.Fragment key={user.id}>
                <p>{user.address}</p>
                <p>{user.contact}</p>
                <p>{user.dob}</p>
                <img src={user.imageUrl}></img>
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