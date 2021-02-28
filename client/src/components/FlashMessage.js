import React, { Component } from "react";

class FlashMessage extends Component {
  state = { closed: false };
  componentDidMount() {
    console.log("mount");
    this.setState({ closed: false });
  }

  render() {
    const { title, text, className } = this.props;
    return (
      <div className={`ui container ${className}`}>
        {!this.state.closed && (
          <div className={"ui error message"}>
            <i
              className="close icon"
              onClick={(e) => this.setState({ closed: true })}
            ></i>
            <div className="header">{title}</div>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
        )}
      </div>
    );
  }
}

export default FlashMessage;
