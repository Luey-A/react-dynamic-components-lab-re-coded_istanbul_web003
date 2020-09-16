//your code here
import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
      return (
        <div className="comment">
            {this.props.commentText}
          {/* <Comment commentText={"When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde"}/> */}
          {/* <Comment />
          <Comment />
          <Comment /> */}
        </div>
      )
    }
  }