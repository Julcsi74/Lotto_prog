import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios';


const Gamer = () => {

	//Input cookies storage and variable
	const playerName = Cookies.get('name');
	const [playerCoins, setplayerCoins] = useState(0);
	const [operatorCoins, setoperatorCoins] = useState(0);
	const [weekgameCoins, setWeekgameCoins] = useState(0);
	const [curentweeek, setCurentweeek] = useState(0);

	//Change container
	const [data, setData] = useState([]);

	//Numbers storage
	const inputNumber1 = useRef(null)
	const inputNumber2 = useRef(null)
	const inputNumber3 = useRef(null)
	const inputNumber4 = useRef(null)
	const inputNumber5 = useRef(null)

	//Error storage
	const [fault, setFault] = useState("I'm waiting your coupon");
	
	//Cupon nervous storage
	let cupon = [];

	//Previous sections object
	const [cupList,setCupList] = useState([]);

	//const [coins,setCoins] = useState([]);

	//Previous sections arrey
	let inputCup =[];

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

	//useEffect with operatorcoin
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

	//useEffect with curentweek
	useEffect(()=>{
		Axios.get("http://localhost:3002/api/weeknum").then((weeks)=>{
			setCurentweeek(weeks.data[0].week)
		});
	},[curentweeek.length])

	//Generate sections arrey
	for (let i=0; i<cupList.length; i++) {	
		inputCup = [...inputCup ,[cupList[i].lotnum1, cupList[i].lotnum2,
		cupList[i].lotnum3, cupList[i].lotnum4, cupList[i].lotnum5]];
	}

	//Compilation of a new section
	function setcoupon(){
		if(playerCoins==0){
			setFault("Haven't coint")
		}else{
	 		cupon = [inputNumber1.current.value, inputNumber2.current.value, inputNumber3.current.value,
				inputNumber4.current.value, inputNumber5.current.value];
				visitcupon();
	 	}
	}

	//Section checker
	function visitcupon(){
		let numberFlag= false;
		for(let i=0; i<cupon.length-1; i++){
			for(let j=i+1; j<cupon.length; j++){
				if(cupon[i] == cupon[j] || cupon[i] < 0 || cupon[i] > 40){
				numberFlag = true;
				}
			}
		}
		
		if(numberFlag == true){
			setFault("Invalid number");
		}else{
			let subtraction ="-";
			let addition ="+"
			let value = 500;

			const handleSubmit1 = async () => {
				try {
				  const response = await Axios.post("http://localhost:3002/api/postusercoins", {usercoins: playerCoins, operation: subtraction, value: value,});
				  console.log(response);
				} catch (error) {
				  console.log(error);
				}
			  };

			const handleSubmit2 = async () => {
				try {
				  const response = await Axios.post("http://localhost:3002/api/postoperatorcoins", {operatorcoins: operatorCoins, operation: addition, value: value,});
				  console.log(response);
				} catch (error) {
				  console.log(error);
				}
			  };

			const handleSubmit3 = async () => {
				try {
				  const response = await Axios.post("http://localhost:3002/api/postweekcoins", {weekcoins: weekgameCoins, operation: addition, value: value,});
				  console.log(response);
				} catch (error) {
				  console.log(error);
				}
			  };

			const handleSubmit4 = async () => {
				try {
				  const response = await Axios.post("http://localhost:3002/api/createnewcupon", {num1: inputNumber1.current.value, num2: inputNumber2.current.value, num3: inputNumber3.current.value, num4: inputNumber4.current.value, num5: inputNumber5.current.value,}); 
				  console.log(response);
				} catch (error) {
				  console.log(error);
				}
			  };

			handleSubmit1();
			handleSubmit2();
			handleSubmit3();
			handleSubmit4();
		
			setplayerCoins(playerCoins-500);
			setoperatorCoins(operatorCoins+500);
			setWeekgameCoins(weekgameCoins+500);
		

			inputNumber1.current.value=''
			inputNumber2.current.value=''
			inputNumber3.current.value=''
			inputNumber4.current.value=''
			inputNumber5.current.value=''
		}
	}


	return (
		<div>
			<h1>
				Player name:
				{playerName}
			</h1>
			{curentweeek==0 ? (<p></p>):(<button  /*onClick={lottoLottery}*/>New week</button>)}
			<h1>
				Player coins:
				{playerCoins}
			</h1>
			
			<h1>
			 {fault} 
			</h1>
			{curentweeek==0 ? (<input  ref={inputNumber1} placeholder='Please the first number'></input>):(<p></p>)}
			{curentweeek==0 ? (<input  ref={inputNumber2} placeholder='Please the second number'></input>):(<p></p>)}
			{curentweeek==0 ? (<input  ref={inputNumber3} placeholder='Please the third number'></input>):(<p></p>)}
			{curentweeek==0 ? (<input  ref={inputNumber4} placeholder='Please the fourth number'></input>):(<p></p>)}
			{curentweeek==0 ? (<input  ref={inputNumber5} placeholder='Please the fifth number'></input>):(<p></p>)}
			{curentweeek==0 ? (<button onClick={setcoupon}>Lottery ticket posting</button>):(<p></p>)}
			<h1>
				Numbers:

			 	{inputCup.length > 0 ? (
        			<ul>
          				{inputCup.map((array, index) => (
            			<li key={index}>{array.join(", ")}</li>
          				))}
        			</ul>
      				) : (
        <p>No cupons</p>
      )} 
			</h1>
		</div>
	);
};

export default Gamer;
