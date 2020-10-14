import React, { Component } from 'react';
import axios from "axios";
class CreatePost extends Component {
    state = {
        descp: ""
    }
    changeDesc = (event) => {
        let descElement = event.currentTarget;
        this.setState({
            descp: descElement.value
        })

    }
    addPost = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        let img = this.imageRef.current.files[0];
        formData.append("postImg", img);
        formData.append("descp", this.state.descp);
        formData.append("author_id", "75880fe1-5c4e-4228-a4ce-b4ab50d43e7a");
      let {data}= await  axios.post("/api/v1/post", formData)
      console.log(data);
    }
    imageRef = React.createRef();
    render() {
        return (
            <div className="createpost">
                <form action="" onSubmit={this.addPost}>
                    <input type="file" name="" id="" ref={this.imageRef} />
                    <textarea name="" id="" cols="30" rows="10" value={this.state.descp}
                     onChange={this.changeDesc}></textarea>
                    <button type="submit">create Post</button>
                </form>
            </div>
        );
    }
}

export default CreatePost;