import './App.css';
import { StateExample } from './hooks/use-state/index';
import { EffectExample } from './hooks/use-effect/index';
import { ContextExample } from './hooks/use-context';

const App = () => {
	return (
		<>
			{/* <StateExample /> */}
			{/* <EffectExample /> */}
			<ContextExample />
		</>
	);
};

export default App;
