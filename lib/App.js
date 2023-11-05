var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Chat from './Chat';
import './Chat.css';
var icon = (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-message-2", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M8 9h8" }), _jsx("path", { d: "M8 13h6" }), _jsx("path", { d: "M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" })] }));
var example = {
    userId: 'system',
    title: 'Lokendo',
    messages: [
        {
            id: '1',
            content: 'hello',
            fromId: '1',
        },
        {
            id: '2',
            content: 'hello',
            fromId: 'system',
        },
    ],
    icon: icon,
};
export default function App() {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onSend = function () {
        alert('Test');
    };
    var payload = __assign(__assign({}, example), { value: value, onChange: setValue, onSend: onSend });
    return _jsx(Chat, __assign({}, payload));
}
