import { Component } from "react";
import axios from "axios";

export default class Home extends Component{

    state = {};

    componentDidMount(){
        axios.get('user').then(
            res=>{
               this.setState({
                    user:res.data
               });
            },
            err => {
                console.log(err);
            }
        )
    }

    render()
    {
        if(this.state.user)
        {
            return (
                <h2>Hi {this.state.user.first_name} {this.state.user.last_name}</h2>
            )
        }
        return (
            <h2>You are not logged In!</h2>
        )
    }
}