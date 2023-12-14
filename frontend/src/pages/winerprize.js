import React, { useEffect, useState } from "react";
import Axios from 'axios';

const Winerprize = () => {

	const [cupList,setCupList] = useState([]);
    const [allcupList, setAllcupList] = useState([]);
    const [winernumbersList, setWinernumbersList] = useState([]);
	const [curentweeek, setCurentweeek] = useState(0);
    const [reloadflag, setReloadflag] = useState(0);

	let inputCup =[];
	let allwinCup =[];
    let winer_numbers=[]

	//useEffect with curentweek
	useEffect(()=>{
		Axios.get("http://88.209.213.195:3002/api/weeknum").then((weeks)=>{
			setCurentweeek(weeks.data[0].week)
		});
	},[curentweeek.length])

    //useEffect with curentweek
	useEffect(()=>{
		Axios.get("http://88.209.213.195:3002/api/loadflag").then((loads)=>{
			setReloadflag(loads.data[0].loads)
		});
	},[reloadflag.length])

    //useEffect with database cupons
	useEffect(()=>{
		if(curentweeek == 1 && reloadflag == 1){
        Axios.get("http://88.209.213.195:3002/api/allcuponlist").then((datas)=>{
            setAllcupList(datas.data)
        });
	}
    },[reloadflag])
    
    //useEffect with database cupons
	useEffect(()=>{
		if(curentweeek == 1 && reloadflag == 1){

        Axios.get("http://88.209.213.195:3002/api/winercuponlist").then((datas)=>{
            setCupList(datas.data)
        });
	}
    },[reloadflag])

	//useEffect with database winernum
    useEffect(()=>{
		if(curentweeek == 1 && reloadflag == 1){
		Axios.get("http://88.209.213.195:3002/api/winernumlist").then((datas)=>{
			setWinernumbersList(datas.data)
		})};
	},[reloadflag])

	//Generate sections arrey
	for (let i=0; i<cupList.length; i++) {	
		inputCup = [...inputCup ,[cupList[i].lotnum1, cupList[i].lotnum2,
		cupList[i].lotnum3, cupList[i].lotnum4, cupList[i].lotnum5, cupList[i].lottresult, cupList[i].prize]];
	}
	

    //Generate sections arrey
	for (let i=0; i<allcupList.length; i++) {	
		allwinCup = [...allwinCup ,[allcupList[i].lotnum1, allcupList[i].lotnum2,
		allcupList[i].lotnum3, allcupList[i].lotnum4, allcupList[i].lotnum5, allcupList[i].lottresult, allcupList[i].prize]];
	}
    

    if(curentweeek==1 && reloadflag == 1 && winernumbersList.length>0){      
            winer_numbers = [...winer_numbers ,[winernumbersList[0].lotnum1, winernumbersList[0].lotnum2, winernumbersList[0].lotnum3, winernumbersList[0].lotnum4, winernumbersList[0].lotnum5]];
        }
	
	
	return (
		<div>
			<h1>
            {curentweeek==0 ? (<p></p>):(<ul>
                User winer cupon:
          				{inputCup.map((array, index) => (
            			<li key={index}>{array.join(", ")}</li>
          				))}
        			</ul>)}
            </h1>
			<h1>
            {curentweeek==0 ? (<p></p>):(<ul>
                All winer cupon:
          				{allwinCup.map((array, index) => (
            			<li key={index}>{array.join(", ")}</li>
          				))}
        			</ul>)}
            </h1>
			<h1>
            {curentweeek==0 ? (<p></p>):(<ul>
                Winer numbers:
          				{winer_numbers.map((array, index) => (
            			<li key={index}>{array.join(", ")}</li>
          				))}
        			</ul>)}
            </h1>
		</div>
);
};

export default Winerprize;
