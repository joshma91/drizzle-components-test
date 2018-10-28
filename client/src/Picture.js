import React, { Component } from "react";

export default class extends React.Component {

  state = {pictureURL: null}

  render() {

    this.state.pictureURL = this.props.pictureURL;

    return <div>Hello there!! I'm a picture
      <img src={this.state.pictureURL}/>
    </div>;
    //82047205
  }
}
