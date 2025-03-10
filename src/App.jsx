import './App.css';
import { StateExample } from './hooks/use-state/index';
import { EffectExample } from './hooks/use-effect/index';
import { ContextExample } from './hooks/use-context';
import { ReducerExample } from './hooks/use-reducer';

const App = () => {
	return (
		<>
			{/* <StateExample /> */}
			{/* <EffectExample /> */}
			{/* <ContextExample /> */}
			<ReducerExample />
		</>
	);
};

export default App;
