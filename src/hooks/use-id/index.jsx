import { useId } from 'react';

export const IdExample = () => {
	const id = useId();

	return (
		<>
			<div>
				<label htmlFor={id}>Name:</label>
				<input id={id} type="text" />
			</div>
		</>
	);
};
