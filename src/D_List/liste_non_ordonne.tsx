import {useState } from 'react';

function Liste_Non_Ordonne() {

  const list = ["Thomas","Yoann","Aly","Jeremy"]

  // const [name, setName] = useState(list);

  return (
    <>
      <h2>liste non ordonnée</h2>
        {list.map((name, i) => (     
         <ul>
            <li key={i} className={i % 2 ? 'BlueMarine' : ""}>{name}</li>
          </ul>
        ))}
    </>
  )
}

export default Liste_Non_Ordonne
