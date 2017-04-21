/* jshint esversion: 6 */

import React from 'react';
import ReactDom from 'react-dom';

export default class ActivismTool extends React.Component {
  render() {
    return (
      <h1>And we're live!</h1>
    );
  }
}

ReactDom.render(
  <ActivismTool />,
  document.getElementById('root')
);
