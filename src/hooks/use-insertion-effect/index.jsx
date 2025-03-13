import { useInsertionEffect } from 'react';

export const InsertionEffectExample = () => {
	useInsertionEffect(() => {
		const style = document.createElement('style');
		style.textContent = `
			.dynamic-class{
			color: white;
			background-color: blue;
			padding: 10px;
			}
		`;

		document.head.appendChild(style);

		return () => {
			document.head.removeChild(style);
		};
	}, []);
	return <div className="dynamic-class">Styled with useInsertionEffect</div>;
};
