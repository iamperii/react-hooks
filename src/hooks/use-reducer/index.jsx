import { useState } from 'react';

export const ReducerExample = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div>
				<p style={{ textAlign: 'center' }}>Count: {count} </p>
				<button onClick={() => setCount((prev) => prev + 1)}>+</button>
				<button onClick={() => setCount((prev) => prev - 1)}>-</button>
				<button onClick={() => setCount((prev) => prev * 2)}>*</button>
			</div>
		</>
	);
};
