import React from 'react';
import './Input.css';

// Компонент input с использованием forwardRef для передачи ref
const Input = React.forwardRef((props, ref) => {
    return <input ref={ref} className="custom-input" {...props} />;
});

export default Input;