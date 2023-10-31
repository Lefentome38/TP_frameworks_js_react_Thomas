import { useCallback, useState } from 'react';

const Tableau_Todolist = ["...","toto"]

function Todoliste() {

  const [Todo_text, setTodo_text] = useState("");

  const text = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setTodo_text(e.target.value)
  },[])

  const [nbr, setNbr] = useState(0)
  const button_ajouter = useCallback(
    () => setNbr(nbr + 1)
    , [nbr]
  ); 

  return (
    <>
      <div>
        <h1>{Tableau_Todolist}</h1>
      </div>
      
      <label className='label_button' htmlFor="bouton">
        <button onClick={button_ajouter}>ajouter</button>
        <p>{nbr}</p>
      </label>
      <label className='barre_text' htmlFor="text">
        <input type="text" onChange={text}/>
        <p>{Todo_text}</p>
      </label>

        {Tableau_Todolist.map((name) => (
          <p>{name}</p>
        ))}
    </>
  );
};
  export default Todoliste