import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './App';
/**
 * @type {HTMLElement}
 */
var container = document.getElementById('app');
var root = createRoot(container);
root.render(_jsx(App, {}));
