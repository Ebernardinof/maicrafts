import React, { Component } from "react";
import axios from "axios";

import DefaultImage from "./DefaultImage";

class Uploader extends Component {
  componentDidMount() {
    if (this.props.picUrl) {
      this.setState({ picUrl: this.props.picUrl });
    }
  }
  state = {
    showEditPicUrl: false,
    selectedFile: null,
    loading: false,
    picUrl: null,
  };

  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  handleUploadFile = (event) => {
    this.setState({
      loading: true,
    });
    const data = new FormData();
    if (this.state.selectedFile) {
      data.append("pic", this.state.selectedFile, this.state.selectedFile.name);
      axios
        .post("/api/upload/upload-image", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data;`,
          },
        })
        .then((response) => {
          console.log("responded:", response.data);
          this.setState({
            picUrl: response.data,
            showEditAvatar: false,
            loading: false,
          });
        });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        <div className="two fields">
          <div className="">
            <DefaultImage
              avatar={this.state.picUrl}
              altAvatar="avatar"
              width="250px"
              height="250px"
            />
            <label htmlFor="upload-button">
              <div className="ui button" style={{ marginTop: "15px" }}>
                upload
              </div>
            </label>
            <input
              style={{ display: "none" }}
              id="upload-button"
              name="pic"
              type="file"
              onInput={this.singleFileChangedHandler}
              onChange={this.handleUploadFile}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Uploader;
