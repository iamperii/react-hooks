import React, { useEffect, useState } from 'react';

export const StateExample = () => {
	//!  without use-state hook
	// let count = 0;

	// const increaseCount = () => {
	// 	count += 1;
	// 	console.log(count);
	// };

	//!  with use-state hook

	const [count, setCount] = useState(0);
	const increaseCount = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<>
			<div>
				<p>Count: {count}</p>
				<button onClick={increaseCount}>Increase Counter</button>
			</div>
		</>
	);
};
