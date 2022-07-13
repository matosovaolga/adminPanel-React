import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

const element: HTMLElement | null = document.getElementById('root');
const root = createRoot(element!);

root.render(<App />);



