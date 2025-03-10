import { useState } from 'react';

export const ContextExample = () => {
	const [isToggle, setIsToggle] = useState(false);

	return (
		<>
			<div>
				<h1>Parent Component</h1>
				<ChildToggle setIsToggle={setIsToggle} />
				<ChildDisplay isToggle={isToggle} />
			</div>
		</>
	);
};

const ChildToggle = ({ setIsToggle }) => {
	return (
		<>
			<div>
				<button onClick={() => setIsToggle((prev) => !prev)}>
					Toggle State
				</button>
			</div>
		</>
	);
};

const ChildDisplay = ({ isToggle }) => {
	return (
		<>
			<div>
				<p>Current state: {isToggle ? 'ON' : 'OFF'}</p>
			</div>
		</>
	);
};
