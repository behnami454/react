import React, { useEffect, useState } from 'react';
import './click.css';

const Click = () => {
    const [ click , setclick] = useState(0)
    

return ( 

    <div className="click">
       
        <h2>{click}</h2> <br></br>
        <br></br>
        <button onClick={()=> setclick(click+1)}>increase the number</button>
        <button onClick={()=> setclick(click-1)}>decrease the number</button>
        
    </div>
    
)
}
export default Click;