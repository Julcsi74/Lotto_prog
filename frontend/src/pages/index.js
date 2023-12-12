import Cookies from 'js-cookie';
import React, {useRef} from "react";
import Axios from 'axios';


  const Home = () => {

  const inputName = useRef(null);

  function newGame() {
  
    Cookies.set('name', inputName.current.value);
    Axios.get("http://localhost:3002/api/setdefault");
    // Axios.get("http://localhost:3002/api/deletecupons");
    // Axios.get("http://localhost:3002/api/deletebotcupons");
    // Axios.get("http://localhost:3002/api/deleteoperatorcoins");
    // Axios.get("http://localhost:3002/api/deleteusercoins");
    // Axios.get("http://localhost:3002/api/deletweekcoins");
    // Axios.get("http://localhost:3002/api/deletwinerhits");
    // Axios.post("http://localhost:3002/api/defaultusercoins");
    // Axios.post("http://localhost:3002/api/defaultoperatorcoins");
    // Axios.post("http://localhost:3002/api/defaultweekcoins");
    // Axios.post("http://localhost:3002/api/defaultwinerhits");
    
    window.location.href = "./gamer";
  }

  function continueGame() {
    window.location.href = "./gamer";
  }



  return (
		<div>
            The gamer name:
            <input ref={inputName}></input>
            {/* a session értéke a playernél 10000, az operatornál 0 */}
			<button onClick={newGame}>New game</button>
            {/* a session értékét visszatölti a játékosnak és az operátornak */}
            <button onClick={continueGame}>Game continue</button>
            
		</div>
	);
};


export default Home;
