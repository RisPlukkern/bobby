import React from 'react';
import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Click me');

    const handleClick = () => {
        setCount(count + 1);
        setText('Clicked');
    }

    return (
        <button onClick={handleClick}>
            {text} {count}
        </button>
    );

}

export default Button;