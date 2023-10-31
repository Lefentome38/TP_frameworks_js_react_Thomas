import {useCallback, useMemo, useState } from 'react';

function NameFrom() {

  const [color, setColor] = useState("") 
  const ChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  },[])

  
  const [name, setName] = useState("")
  const changeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  },[])


  const NameMaj = useMemo(
    () => name.toUpperCase(),
    [name]
  );

  return (
    <>
      <label htmlFor="nom">
          <input type="text" onChange={changeName}/>
      </label>

      <label htmlFor="couleur">
          <input type="color" onChange={ChangeColor} />
      </label>
      <p style={{color: color}}>{NameMaj}</p>
    </>
  )
}

export default NameFrom
