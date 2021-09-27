import React from 'react';
import Logo from './../img/logo.svg'

export default function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={Logo} className='App-logo' alt='logo' />
				<h1>React Editor Markdown</h1>
			</header>
			<div className='editor'>
			
			</div>
		</div>
	);
}
