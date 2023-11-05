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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
var Chat = function (props) {
    var icon = props.icon, messages = props.messages, title = props.title, userId = props.userId, onChange = props.onChange, value = props.value, onSend = props.onSend;
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var chatboxRef = useRef(null);
    function toggleChatbox() {
        setIsOpen(!isOpen);
        if (chatboxRef.current === null)
            return;
        var ref = chatboxRef.current;
        window.requestAnimationFrame(function () {
            ref.scrollTop = ref.scrollHeight;
        });
    }
    var defaultStyle = {
        transition: "opacity 300ms ease-in-out",
        opacity: 0,
    };
    var transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };
    var sendEvent = function () {
        if (value !== '')
            onSend();
    };
    return (_jsxs("div", { id: "chat-component", children: [_jsx("div", { className: "button-container", children: _jsxs("button", { onClick: function () { return toggleChatbox(); }, id: "open-chat", children: [icon, "\u00A0 Chat"] }) }), _jsx(CSSTransition, { timeout: 200, in: isOpen, classNames: "show", unmountOnExit: true, children: function (state) {
                    var styles = state !== 'unmounted'
                        ? __assign(__assign({}, defaultStyle), transitionStyles[state]) : {};
                    return (_jsx("div", { id: "chat-container", style: styles, children: _jsxs("div", { className: ".chat-body", children: [_jsxs("div", { className: "chat-title", children: [_jsx("p", { className: "chat-ptitle", children: title }), _jsx("button", { className: "close-chat", onClick: function () { return toggleChatbox(); }, children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-robot", width: "48", height: "48", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" }), _jsx("path", { d: "M12 2v2" }), _jsx("path", { d: "M9 12v9" }), _jsx("path", { d: "M15 12v9" }), _jsx("path", { d: "M5 16l4 -2" }), _jsx("path", { d: "M15 14l4 2" }), _jsx("path", { d: "M9 18h6" }), _jsx("path", { d: "M10 8v.01" }), _jsx("path", { d: "M14 8v.01" })] }) })] }), _jsx("div", { ref: chatboxRef, id: "chatbox", className: "p-4 h-80 overflow-y-auto", children: messages.map(function (_a) {
                                        var id = _a.id, fromId = _a.fromId, content = _a.content;
                                        var containerClass = classNames({
                                            'user-chat': fromId === userId,
                                            'friend-chat': fromId !== userId,
                                        });
                                        return (_jsx("div", { className: containerClass, children: _jsx("p", { children: content }) }, 'message-' + id));
                                    }) }), _jsxs("div", { className: "input-container", children: [_jsx("input", { id: "user-input", type: "text", value: value, autoComplete: "off", onKeyUp: function (evt) { return evt.key === 'Enter' && sendEvent(); }, onChange: function (evt) { return onChange(evt.target.value); }, placeholder: "Type a message", className: "text-input" }), _jsx("button", { id: "send-button", disabled: !value, onClick: function (evt) {
                                                evt.preventDefault();
                                                sendEvent();
                                            }, className: "bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-send", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M10 14l11 -11" }), _jsx("path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" })] }) })] })] }) }));
                } })] }));
};
export default Chat;
