import { useEffect, useState } from 'react';

export const EffectExample = () => {
	const [data, setData] = useState([]);
	const [showPedro, setShowPedro] = useState(false);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);

	useEffect(() => {
		console.log('Pedro');
	}, []);
	return (
		<>
			<div>
				<button onClick={() => setShowPedro((prev) => !prev)}>Toggle</button>
				<h1>Posts</h1>
				<ul>
					{data.map((elem) => {
						return <li key={elem.id}>{elem.title}</li>;
					})}
				</ul>
			</div>
		</>
	);
};
