import {useCallback, useMemo, useState } from 'react';

function NameFrom() {

  const [color, setColor] = useState("")
  
  const ChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
      setColor(e.target.value)
    },
    []
  )
  
  const [name, setName] = useState("")
  
  const changeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
      setName(e.target.value)
    },
    []
  )

  const NameMaj = useMemo(
    () => name.toUpperCase()
    , [name]
  );

  return (
    <>
      <div>
        <input type="text" onChange={changeName}/>
      </div>

      <div className="container">
        <input type="color" onChange={ChangeColor} />
      </div>

      <p style={{color: color}}>{NameMaj}</p>
    </>
  )
}

export default NameFrom
