import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "./withRouter";


import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


class Post extends Component {
    state = {
        user: null
    }

    componentDidMount = () => {
        // react-router-dom 6, create a HOC (withRouter)
        console.log(this.props);
        let id = this.props.params.post_id; //react-router-dom 5 

        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((res => {
            console.log(res.data);
            this.setState({
                user: res.data
            });
        })).catch(err => console.log(err));
    }

    render() {
        const user = this.state.user;
        const userDisplay = user ? (<>
            <Card sx={{ maxWidth: 345 }}>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.username}
                        {user.email}
                        {user.address.street}
                        {user.address.suite}
                    </Typography>
                </CardContent>
            </Card>

        </>) : (<>No data yet</>);

        return (
            <>
                {userDisplay}
            </>
        )
    }
}

export default withRouter(Post); 
