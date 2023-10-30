import {useCallback, useState } from 'react';


function CounterClick() {

    const [nbr, setNbr] = useState(0)
    
    const aaa = useCallback(
        () => setNbr(nbr + 1)
        , [nbr]
    ); 
    
      return (
        <>
            <button onClick={aaa}>...</button>
            <p>{nbr}</p>
        </>
      )
}

export default CounterClick
