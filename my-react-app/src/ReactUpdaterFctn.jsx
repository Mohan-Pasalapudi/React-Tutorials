import {useState} from 'react';

function ReactUpdaterFctn(){
    const [number,setNumber] = useState(0);
    return (
        <>
        <h1>{number}</h1>
        <button onClick={()=>{
            setNumber(number + 1);
            setNumber(number + 5);
            setNumber(number + 17);
        }}>+3</button>
        </>
    );
}
export default ReactUpdaterFctn