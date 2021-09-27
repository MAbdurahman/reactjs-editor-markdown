import React, { useState, useEffect, useRef } from 'react';
import Logo from './../img/logo.svg';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function App() {
	//**************** variables ****************//
	const textareaRef = useRef();
	const [instance, setInstance] = useState();
	const [value, setValue] = useState('');

	//**************** functions ****************//
    useEffect(() => {
			if (textareaRef?.current && !instance) {
				var simplemde = new SimpleMDE({
					element: textareaRef.current,
					toolbar: [
						'bold',
						'code',
						'italic',
						'heading',
						'|',
						'quote',
						'horizontal-rule',
						'clean-block',
						'side-by-side',
						'preview',
						'table',
						'link',
						'ordered-list',
						'fullscreen',
						'guide',
					],
				});
				simplemde.value('Initial text');
				setInstance(simplemde);
				simplemde.codemirror.on('change', () => {
					console.log(simplemde.value());
					setValue(simplemde.value());
				});
			}
		}, [textareaRef?.current]);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={Logo} className='App-logo' alt='logo' />
				<h1>React Editor Markdown</h1>
			</header>
			<div className='editor'>
				<textarea ref={textareaRef} />
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
			</div>
		</div>
	);
}
