import './App.css';
import { StateExample } from './hooks/use-state/index';
import { EffectExample } from './hooks/use-effect/index';
import { ContextExample } from './hooks/use-context';
import { ReducerExample } from './hooks/use-reducer';
import { Refexample } from './hooks/use-ref';
import { ImperativeHandleExample } from './hooks/use-imperative-handle';
import { LayoutEffectExample } from './hooks/use-layout-effect';

const App = () => {
	return (
		<>
			{/* <StateExample /> */}
			{/* <EffectExample /> */}
			{/* <ContextExample /> */}
			{/* <ReducerExample /> */}
			{/* <Refexample /> */}
			{/* <ImperativeHandleExample /> */}
			<LayoutEffectExample />
		</>
	);
};

export default App;
