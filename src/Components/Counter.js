import { useState, useEffect } from "react";

var TopHeader = () => { 
const [page, setPage] = useState("Home");
    return ( 
        <>
            <p> Top Navigation {page} </p>
        </> 
    )
}
var Counter = () => { 
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0); 
    const [name, setName] = useState('blank');

    useEffect( () => { 
        setCalculation( () => count *2); 

    }, [count]); // <- add the count variable 

    return ( 
        <> 
        <p> Count: {count} </p>
        <button onClick={() => setCount((c) => c +1 )}> c</button>
        <button onClick={() => setName((n) => n + "_")}> Add underscore</button>
        <p> Calculation: {calculation} </p> 
        <p> My name is: {name} </p>
        </>
    );
};

export {Counter, TopHeader}; 