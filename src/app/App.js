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
				simplemde.value('');
				setInstance(simplemde);
				simplemde.codemirror.on('change', () => {
					console.log(simplemde.value());
					setValue(simplemde.value());
				});
			}
		}, [textareaRef, instance]);

	return (
		<div className='app'>
			<header className='app-header'>
				<img src={Logo} className='app-logo' alt='logo' />
				<h1>React Markdown Editor</h1>
			</header>
			<div className='app-editor'>
				<textarea className='app-editor-textarea' ref={textareaRef} />
			<ReactMarkdown className='app-editor-markdown' remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>  
			</div>
		</div>
	);
}
