import React, { Component } from 'react';

class ID extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        id: {this.props.match.params.id}
      </div>
    );
  }
}

export default ID;