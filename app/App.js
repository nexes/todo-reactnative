import React from 'react';
import { Navigation } from './routes';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigation/>
    );
  }
}
