import { useEffect, useRef, useState } from 'react';

export const Refexample = () => {
	const [count, setCount] = useState(0);
	const previousCount = useRef(0);
	useEffect(() => {
		previousCount.current = count;
	}, [count]);
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{count}</h1>

			<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
			<p>Previous Count: {previousCount.current} </p>
		</>
	);
};
