import React, { Component, PropTypes } from 'react';

class FeedPage extends Component {
  static propTypes = {
    feed: PropTypes.array.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle('Swerves');
    return (
      <div>
        <h1>Hello.</h1>
      </div>
    );
  }
}

export default FeedPage;
