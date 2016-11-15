import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	render() {
		return (
			<h1>Hello World</h1>
		);
	}
}

document.onReady = ReactDOM.render(<App></App>, document.getElementById('root'));
