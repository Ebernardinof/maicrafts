import React, { Component } from "react";

//now works with a timer but "loading: false" should be called by a promise in the redux action/reducer
class Loader extends Component {
  state = {
    loading: true,
  };
  //timeout in ms
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ loading: false }),
      this.props.timeout
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return this.state.loading ? (
      <div className="ui active dimmer">
        <div className="ui active centered inline loader"></div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Loader;
