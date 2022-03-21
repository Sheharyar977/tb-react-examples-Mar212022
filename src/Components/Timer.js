import { useState, useEffect } from "react"; 

function Timer () { 
    const [count, setCount] = useState(0); 
    
    useEffect( () => { 
        setTimeout( () => { 
            setCount((count) => count +1);
        
        }, 1000);//1000 means every second 
    }, [count]);
    return <h1> I've rendered {count} time! </h1>
}


export default Timer; 