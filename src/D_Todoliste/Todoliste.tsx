import { useCallback, useEffect, useMemo, useState } from 'react';

function Todoliste() {
  const [Todo_text, setTodo_text] = useState("");
  const [todos, setTodos] = useState<string[]>([])

  const text = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setTodo_text(e.target.value)
  },[])
  
  const button_ajouter = useCallback(
    () => {setTodos([Todo_text, ...todos])
    setTodo_text("")
    console.log("todo ajouter");},
    [todos, Todo_text]
  ) 

  const TodosDelete = useCallback(
    (i_TodoDelete: number) => {
      setTodos(todos.filter((todo, i) => i !== i_TodoDelete))
    console.log("todo supprimer");
    },
    [todos]
  )

  useEffect(() => {
    console.log("start");
  },[todos])
  
  return (
    <>
      <button onClick={button_ajouter}>ajouter</button>
      <label className='barre_text' htmlFor="text">Nouvelle Todo : </label>
      <input type="text" value={Todo_text} onChange={text}/>

      <ul className='ul_Todo_liste'>
        {todos.map((name, i) => (
          <div>
              <li key={i}>{name}</li>
              <button onClick={() => TodosDelete(i)}>X</button>
          </div>
          ))}
      </ul>
    </>
  );
};
  export default Todoliste