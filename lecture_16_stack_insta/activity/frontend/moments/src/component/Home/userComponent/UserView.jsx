import Axios from 'axios';
import React, { Component } from 'react';
import Profile from './Profile';
import ProfileList from './ProfileList';
import axios from "axios";
class UserView extends Component {
    state = {
        currentMenu: "suggestions",
        listForProfileList: []
    }
    //  suggestion
    componentDidMount() {
        //  api => suggestions
    }
    updatecurrentMenu = (cMenu) => {
        console.log(cMenu);
        // this.setState({ currentMenu: cMenu });
        let isFollowers = cMenu == "followers";

        if (isFollowers) {
            axios.get("/api/v1/user/request/75880fe1-5c4e-4228-a4ce-b4ab50d43e7a")
                .then((res) => {
                    // all followers
                    let allFollowers = res.data.message;
                    //  remove request 
                    let myFollowers = allFollowers.filter(follower => follower.is_accepted == 1);
                    //   for all followers we will go to there user table
                    let followersDetailsPArray = myFollowers.map((follower) => {
                        return axios.get(`/api/v1/user/${follower.follower_id}`)
                    })
                    return Promise.all(followersDetailsPArray);
                }).then((fdRA) => {
                    let listForProfileList = [];
                    for (let i = 0; i < fdRA.length; i++) {
                        let { handle, name,uid } = fdRA[i].data.user;
                        listForProfileList.push({ handle, name,uid });
                    }
                    this.setState({
                        listForProfileList: listForProfileList,
                        currentMenu: cMenu
                    })
                })
        }
    }
    render() {
        let { listForProfileList } = this.state;
        return (
            <React.Fragment>
                <div className="user-view">
                    <Profile updatecurrentMenu={this.updatecurrentMenu}></Profile>
                    <ProfileList list={listForProfileList}></ProfileList>
                </div>
            </React.Fragment>
        );
    }
}

export default UserView;