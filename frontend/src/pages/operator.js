import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios';

//Axios.defaults.timeout = 2000;


const Operator = () => {

    //Previous sections object
	const [cupList,setCupList] = useState([]);
    const [botcupList, setBotcupList] = useState([]);
    const [winernumbersList, setWinernumbersList] = useState([]);

    const [playerCoins, setplayerCoins] = useState(0);
	const [operatorCoins, setoperatorCoins] = useState(0);
	const [weekgameCoins, setWeekgameCoins] = useState(0);
    const [curentweeek, setCurentweeek] = useState(0);
    const [reloadflag, setReloadflag] = useState(0);
    const [listItems, setListItems] = useState(null);

    const botplayer = useRef(null)
	const tickets = useRef(null)

    let usercontainer = [];
    let botcontainer = [];

    let fiveHits = 0;
    let foorHits = 0;
    let threeHits = 0;
    let twoHits = 0;

    //Previous sections arrey
	let inputCup =[];
	let botCup =[];
    let winer_numbers=[]

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

    //useEffect with curentweek
	useEffect(()=>{
		Axios.get("http://localhost:3002/api/weeknum").then((weeks)=>{
			setCurentweeek(weeks.data[0].week)
		});
	},[curentweeek.length])

    //useEffect with curentweek
	useEffect(()=>{
		Axios.get("http://localhost:3002/api/loadflag").then((loads)=>{
			setReloadflag(loads.data[0].loads)
		});
	},[reloadflag.length])

    //useEffect with database cupons
	useEffect(()=>{
        Axios.get("http://localhost:3002/api/botcuponlist").then((datas)=>{
            setBotcupList(datas.data)
        });
    },[botcupList.length])
    
    //useEffect with database cupons
	useEffect(()=>{
        Axios.get("http://localhost:3002/api/cuponlist").then((datas)=>{
            setCupList(datas.data)
        });
    },[cupList.length])

    
    //useEffect with database winernum
    useEffect(()=>{
            if(curentweeek == 1 && reloadflag == 1){
            Axios.get("http://localhost:3002/api/winernumlist").then((datas)=>{
                setWinernumbersList(datas.data)
            })};
        },[reloadflag])
    

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

    function winnumsend(){
        winer_numbers = generator();
        //winer_numbers = winernumbers;
        const handleSubmit1 = async () => {
            try {
                const response = await Axios.post("http://localhost:3002/api/winernum", {num1: winer_numbers[0], num2: winer_numbers[1], num3: winer_numbers[2], num4: winer_numbers[3], num5: winer_numbers[4],}); 
                console.log(response);
                return true;
            } catch (error) {
                console.log(error);
                return false
            }
        };
        handleSubmit1();
    }

    function weeknumsend(){
        const handleSubmit1 = async () => {
            try {
                const response = await Axios.post("http://localhost:3002/api/weeknumupd"); 
                console.log(response);
                return true;
            } catch (error) {
                console.log(error);
                return false
            }
        };
        Axios.get("http://localhost:3002/api/weeknum").then((weeks)=>{
			setCurentweeek(weeks.data[0].week)
		});
        handleSubmit1();
    }

    function reloadsend(){
        const handleSubmit1 = async () => {
            try {
                const response = await Axios.post("http://localhost:3002/api/loadflagupd"); 
                console.log(response);
                return true;
            } catch (error) {
                console.log(error);
                return false
            }
        };
        Axios.get("http://localhost:3002/api/loadflag").then((loads)=>{
			setReloadflag(loads.data[0].loads)
		});
        handleSubmit1();
    }

    function userhits(lotnum1, lotnum2, lotnum3, lotnum4, lotnum5, lotteryresult, prize){
        
                const handleSubmit1 = async () => {
                    try {
                        const response = await Axios.post("http://localhost:3002/api/wineruser", {num1: lotnum1, num2: lotnum2, num3: lotnum3, num4: lotnum4, num5: lotnum5, lottresult: lotteryresult, prizes: prize,}); 
                        console.log(response);
                        return true;
                    } catch (error) {
                        console.log(error);
                        return false
                    }
                };
                handleSubmit1();
            
        
    }

    function operatorhits(lotnum1, lotnum2, lotnum3, lotnum4, lotnum5, lotteryresult, prize){
        const handleSubmit1 = async () => {
            try {
                const response = await Axios.post("http://localhost:3002/api/wineroperator", {num1: lotnum1, num2: lotnum2, num3: lotnum3, num4: lotnum4, num5: lotnum5, lottresult: lotteryresult, prizes: prize,}); 
                console.log(response);
                return true;
            } catch (error) {
                console.log(error);
                return false
            }
        };
        handleSubmit1();
    

    }

    function botlottogen(){
        for(let i=0; i<botplayer.current.value; i++){
            for(let j=0; j<tickets.current.value; j++){
                let container = generator();
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
          }, 250);

    }

    //Generate sections arrey
	for (let i=0; i<cupList.length; i++) {	
		inputCup = [...inputCup ,[cupList[i].lotnum1, cupList[i].lotnum2,
		cupList[i].lotnum3, cupList[i].lotnum4, cupList[i].lotnum5]];
	}

    //Generate sections arrey
	for (let i=0; i<botcupList.length; i++) {	
		botCup = [...botCup ,[botcupList[i].lotnum1, botcupList[i].lotnum2,
		botcupList[i].lotnum3, botcupList[i].lotnum4, botcupList[i].lotnum5]];
	}
    

    if(curentweeek==1 && reloadflag == 1 && winernumbersList.length>0){      
            winer_numbers = [...winer_numbers ,[winernumbersList[0].lotnum1, winernumbersList[0].lotnum2, winernumbersList[0].lotnum3, winernumbersList[0].lotnum4, winernumbersList[0].lotnum5]];
        }


    function lottoLottery(){
        winnumsend();
        reloadsend();
        weeknumsend();
        hitssum();
        gamercupon();
        botcupon();
        gamerprize();
        botprize();
    }

    

    function hitssum(){
        let hitsBase = weekgameCoins*0.9;
        fiveHits = parseInt(hitsBase*0.6);
        foorHits = parseInt(hitsBase*0.2);
        threeHits = parseInt(hitsBase*0.15);
        twoHits = parseInt(hitsBase*0.05);
        let totalHits = fiveHits+foorHits+threeHits+twoHits;
        const handleSubmit1 = async () => {
			try {
			    const response = await Axios.post("http://localhost:3002/api/createwinerhits", {fivehits: fiveHits, foorhits: foorHits, threehits: threeHits, twohits: twoHits, totalhits: totalHits,});
			    console.log(response);
			} catch (error) {
			    console.log(error);
			}
		};
        handleSubmit1();
    }

    function userpay(pay){
        let addition ="+"
        const handleSubmit = async () => {
            try {
              const response = await Axios.post("http://localhost:3002/api/postusercoins", {usercoins: playerCoins, operation: addition, value: pay,});
              console.log(response);
            } catch (error) {
              console.log(error);
            }
        };
        handleSubmit();
        setplayerCoins(playerCoins+pay);    
    }

    function operatorpay(pay){
        let subtraction ="-";
        const handleSubmit = async () => {
            try {
              const response = await Axios.post("http://localhost:3002/api/postoperatorcoins", {operatorcoins: operatorCoins, operation: subtraction, value: pay,});
              console.log(response);
            } catch (error) {
              console.log(error);
            }
        };
        handleSubmit();
        setoperatorCoins(operatorCoins-pay);
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
                    if (usercontainer[i][j]==winer_numbers[k]){
                        hits++;
                    }
                }
                
            }
            if(hits==2){
                userhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 2, twoHits);
                operatorhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 2, twoHits);
                operatorpay(twoHits);
                userpay(twoHits);
            }
            if(hits==3){
                userhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 3, threeHits);
                operatorhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 3, threeHits);
                operatorpay(threeHits);
                userpay(threeHits);
            }
            if(hits==4){
                userhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 3, foorHits);
                operatorhits(usercontainer[0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 3, foorHits);
                operatorpay(foorHits);
                userpay(foorHits);
            }
            if(hits==5){
                userhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 5, fiveHits);
                operatorhits(usercontainer[i][0], usercontainer[i][1], usercontainer[i][2], usercontainer[i][3], usercontainer[i][4], 5, fiveHits);
                operatorpay(fiveHits);
                userpay(fiveHits);
            }
        }
    }

    function botprize(){
        for (let i=0; i<botcontainer.length; i++){
            let hits=0;
            for(let j=0; j<botcontainer[i].length; j++){
                for(let k=0; k<winer_numbers.length; k++){
                    if (botcontainer[i][j]==winer_numbers[k]){
                        hits++;
                    }
                }
                
            }
            if(hits==2){
                operatorhits(botcontainer[i][0], botcontainer[i][1], botcontainer[i][2], botcontainer[i][3], botcontainer[i][4], 2, twoHits);
                operatorpay(twoHits);
            }
            if(hits==3){
                operatorhits(botcontainer[i][0], botcontainer[i][1], botcontainer[i][2], botcontainer[i][3], botcontainer[i][4], 3, threeHits);
                operatorpay(threeHits);
            }
            if(hits==4){
                operatorhits(botcontainer[i][0], botcontainer[i][1], botcontainer[i][2], botcontainer[i][3], botcontainer[i][4], 3, foorHits);
                operatorpay(foorHits);
            }
            if(hits==5){
                operatorhits(botcontainer[i][0], botcontainer[i][1], botcontainer[i][2], botcontainer[i][3], botcontainer[i][4], 5, fiveHits);
                operatorpay(fiveHits);
            }
        }
    }


	return (
		<div>
            <h1>Operator coins:
            {operatorCoins}
            </h1>
            {curentweeek==0 ? (<p></p>):(<button  /*onClick={lottoLottery}*/>New week</button>)}
			<h1>
            {curentweeek==0 ? (<p></p>):(<ul>
                Winer numbers:
          				{winer_numbers.map((array, index) => (
            			<li key={index}>{array.join(", ")}</li>
          				))}
        			</ul>)}
            </h1>
			<h1>
			</h1>
            {curentweeek==0 ? (<input ref={botplayer} placeholder="How many botplayers?"></input>):(<p></p>)}
            {curentweeek==0 ? (<input ref={tickets} placeholder="How many lottery tickets?"></input>):(<p></p>)}
            {curentweeek==0 ? (<button  onClick={botcupongenerator}>Coupons general</button>):(<p></p>)}
            {curentweeek==0 ? (<button  onClick={lottoLottery}>Lottery</button>):(<p></p>)}
            
            <h1>
            Cupons:

			 	{inputCup.length > 0 ? (
        			<ul>
          				{inputCup.map((array, index) => (
            			<li key={index}>{array.join(", ")} Player</li>
          				))}
        			</ul>
      				) : (
        <p>No player cupons</p>
      )} 
			
            {botCup.length > 0 ? (
                    <ul>
                    {botCup.map((array, index) => (
                        <li key={index}>{array.join(", ")} Generate</li>
                ))}
                </ul>
                ) : (
                    <p>No generate cupons</p>
                )} 
            </h1>
		</div>
	);
};

export default Operator;
