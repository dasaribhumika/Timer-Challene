import { useState } from "react";
import { useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  let name = useRef();
  function handleClick(){
    setPlayerName(name.current.value);
    name.current.value = '';
  }
 
  return (
    <section id="player">
      <h2>Welcome {playerName? playerName : 'unknown entity'}!</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
