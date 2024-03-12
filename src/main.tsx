import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles/global.scss';
import App from './components/app/App.tsx';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
