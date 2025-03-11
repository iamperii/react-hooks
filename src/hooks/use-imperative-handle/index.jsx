import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export const ImperativeHandleExample = () => {
	const inputRef = useRef();

	return (
		<>
			<div>
				<CustomInput ref={inputRef} />
				<button onClick={() => inputRef.current.focusInput()}>
					Focus Input
				</button>
				<button onClick={()=> inputRef.current.clearInput()}>Clear Input</button>
			</div>
		</>
	);
};

const CustomInput = forwardRef((props, ref) => {

	const inputRef = useRef();

	useImperativeHandle(ref, () => ({
		focusInput: () => {
			inputRef.current.focus();
		},
		clearInput: () => {
			inputRef.current.value = '';
		},
	}));

	return <input type="text" ref={inputRef} />;
});
