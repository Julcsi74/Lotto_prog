import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios';

Axios.defaults.timeout = 2000;


const Operator = () => {

    //Previous sections object
	const [cupList,setCupList] = useState([]);
    const [botcupList, setBotcupList] = useState([]);

    const [playerCoins, setplayerCoins] = useState(0);
	const [operatorCoins, setoperatorCoins] = useState(0);
	const [weekgameCoins, setWeekgameCoins] = useState(0);
    const [listItems, setListItems] = useState(null);

    const botplayer = useRef(null)
	const tickets = useRef(null)

    let winer_numbers =[];
    let usercontainer = [];
    let botcontainer = [];

    let playtwohits = 0;
    let playthreehits = 0;
    let playfourhits = 0;
    let playfivehits = 0;

    let bottwohits = 0;
    let botthreehits = 0;
    let botfourhits = 0;
    let botfivehits = 0;

    //useEffect with usercoin
	useEffect(()=>{
		Axios.get("http://localhost:3002/api/usercoint").then((coin)=>{
			setplayerCoins(coin.data[0].usercoins)
		});
	},[playerCoins.length])

	//useEffect with operatorcoin
	useEffect(()=>{
		Axios.get("http://localhost:3002/api/operatorcoins").then((coin)=>{
			setoperatorCoins(coin.data[0].operatorcoins)
		});
	},[operatorCoins.length])

	//useEffect with weekcoin
	useEffect(()=>{
		Axios.get("http://localhost:3002/api/weekcoins").then((coin)=>{
			setWeekgameCoins(coin.data[0].weekcoins)
		});
	},[weekgameCoins.length])

    //useEffect with database cupons
	useEffect(()=>{
        Axios.get("http://localhost:3002/api/cuponlist").then((datas)=>{
            setCupList(datas.data)
        });
        },[cupList.length])

        //useEffect with database cupons
	useEffect(()=>{
        Axios.get("http://localhost:3002/api/botcuponlist").then((datas)=>{
            setBotcupList(datas.data)
        });
        },[botcupList.length])

    function generator(){      
        let array= [0, 0, 0, 0, 0];
        for(let i=1;i<=5;i++){
            const rndInt = Math.floor(Math.random() * 39) + 1;
            let same = false;
            for(let j=0; j<array.length; j++){
                if(array[j] === rndInt){
                    same = true;
                }
            }   
            if(same===true){
                i--;
            }else{
                array[i-1]=rndInt;
            }
        }return array;
    }

    function botlottogen(){
        for(let i=0; i<botplayer.current.value; i++){
            for(let j=0; j<tickets.current.value; j++){
                let container = generator();
                console.log(container);
                const handleSubmit1 = async () => {
                    try {
                        const response = await Axios.post("http://localhost:3002/api/createnewbotcupon", {num1: container[0], num2: container[1], num3: container[2], num4: container[3], num5: container[4],}); 
                        console.log(response);
                        return true;
                    } catch (error) {
                        console.log(error);
                        return false
                    }
                };

                
                
                handleSubmit1();
            }
        }
    }

    function botcupongenerator(){
        botlottogen();

		let addition ="+"
        console.log(botplayer.current.value)
		let value = ((botplayer.current.value)*(tickets.current.value)*500);

		const handleSubmit1 = async () => {
			try {
			    const response1 = await Axios.post("http://localhost:3002/api/postoperatorcoins", {operatorcoins: operatorCoins, operation: addition, value: value,});
			    console.log(response1);
			} catch (error) {
			    console.log(error);
			}
		};

        const handleSubmit2 = async () => {
            try {
              const response = await Axios.post("http://localhost:3002/api/postweekcoins", {weekcoins: weekgameCoins, operation: addition, value: value,});
              console.log(response);
            } catch (error) {
              console.log(error);
            }
          };

        handleSubmit1();
        handleSubmit2();
         setTimeout(() => {
             window.location.reload();
           }, 2000);

    }

    function lottoLottery(){
        winer_numbers = generator();
        console.log(winer_numbers);
        gamercupon();
        gamerprize();
        botcupon();
        botprize();
    }

    function gamercupon(){
        for (let i=0; i<cupList.length; i++){
            usercontainer = [...usercontainer ,[cupList[i].lotnum1, cupList[i].lotnum2,
		    cupList[i].lotnum3, cupList[i].lotnum4, cupList[i].lotnum5]];
        }
    }

    function botcupon(){
        for (let i=0; i<botcupList.length; i++){
            botcontainer = [...botcontainer ,[botcupList[i].lotnum1, botcupList[i].lotnum2,
		    botcupList[i].lotnum3, botcupList[i].lotnum4, botcupList[i].lotnum5]];
        }
    }

    function gamerprize(){
        for (let i=0; i<usercontainer.length; i++){
            let hits=0;
            for(let j=0; j<usercontainer[i].length; j++){
                for(let k=0; k<winer_numbers.length; k++){
                    if (usercontainer[i][j]=winer_numbers[k]){
                        hits++;
                    }
                }
                
            }
            if(hits==2)playtwohits++;
            if(hits==3)playthreehits++;
            if(hits==4)playfourhits++;
            if(hits==5)playfivehits++;
        }
    }

    function botprize(){
        for (let i=0; i<botcontainer.length; i++){
            let hits=0;
            for(let j=0; j<botcontainer[i].length; j++){
                for(let k=0; k<winer_numbers.length; k++){
                    if (botcontainer[i][j]=winer_numbers[k]){
                        hits++;
                    }
                }
                
            }
            if(hits==2)bottwohits++;
            if(hits==3)botthreehits++;
            if(hits==4)botfourhits++;
            if(hits==5)botfivehits++;
        }
    }


	return (
		<div>
            <h1>Operator coins:
            {operatorCoins}
            </h1>
				<br></br>
			<h1>
            {listItems}
			</h1>
            <input ref={botplayer} placeholder="How many botplayers?"></input>
            <input ref={tickets} placeholder="How many lottery tickets?"></input>
            <button  onClick={botcupongenerator}>Coupons general</button>
            <button  onClick={lottoLottery}>Lottery</button>
		</div>
	);
};

export default Operator;
