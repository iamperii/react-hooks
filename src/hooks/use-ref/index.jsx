import { useEffect, useRef } from 'react';

export const Refexample = () => {
	const logValue = () => {
		// inputRef.current.focus();
		inputRef.current.value = 'Pedro';
	};

	const inputRef = useRef();

	useEffect(() => {
		console.log('Page rerendered');
	});

	return (
		<>
			<div className="form">
				<input type="text" ref={inputRef} />
				<button onClick={logValue}>Console Log </button>
			</div>
		</>
	);
};
