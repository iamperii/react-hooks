import { useLayoutEffect, useRef, useState } from 'react';

export const LayoutEffectExample = () => {
	const [boxWidth, setBoxWidth] = useState(0);
	const boxRef = useRef();

	useLayoutEffect(() => {
		if (boxRef.current) {
			setBoxWidth(boxRef.current.offsetWidth);
		}
	});

	return (
		<>
			<div
				ref={boxRef}
				style={{
					width: '100%',
					height: '100px',
					backgroundColor: 'lightblue',
					textAlign: 'center',
				}}
			>
				Resize me!
			</div>
			<p>The box width is : {boxWidth}</p>
		</>
	);
};
