import React from 'react';
import {sub,mul,div} from './Cal';
function App()
{
    return (
        <>
        <ul>
        
        <li>Sub of two number is{sub(5, 4)} </li>
        <li>Mul of two number is{mul(3, 4)} </li>
        <li>Div of two number is{div(2, 3)} </li>
    </ul>
    </>

    );
}

export default App;