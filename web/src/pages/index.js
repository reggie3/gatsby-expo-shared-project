import React from 'react'
import Link from 'gatsby-link'
import { add } from 'shared';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    debugger;
    this.setState({number:add(5,6)});
  }

  render() {
    return (
      <div >
        <p>Open up App.js to start working on your app!</p>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default IndexPage
