const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();



const  PORT = 3002;
app.use(cors());
app.use(express.json())

//Setnewgame


app.get("/api/setdefault", (req,res)=>{
    let sql_string = "DELETE FROM week_coins;";
    sql_string += "DELETE FROM user_cupons;";
    sql_string += "DELETE FROM operator_coins;";
    sql_string += "DELETE FROM winer_hits;";
    sql_string += "DELETE FROM user_coins;";
    sql_string += "DELETE FROM bot_cupons;";
    sql_string += "DELETE FROM curen_week;";
    sql_string += "DELETE FROM load_flag;";
    sql_string += "DELETE FROM winer_num;";
    sql_string += "DELETE FROM user_hits;";
    sql_string += "DELETE FROM operator_hits;";
    sql_string += "INSERT INTO user_coins (usercoins) VALUES (10000);";
    sql_string += "INSERT INTO operator_coins (operatorcoins) VALUES (0);";
    sql_string += "INSERT INTO week_coins (weekcoins) VALUES (0);";
    sql_string += "INSERT INTO curen_week (week) VALUES (0);";
    sql_string += "INSERT INTO load_flag (loads) VALUES (0);";
    db.query(sql_string, (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

//Delete user cupons
app.get("/api/deletecupons", (req,res)=>{
    db.query("DELETE FROM user_cupons", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

//Delete bot cupons
app.get("/api/deletebotcupons", (req,res)=>{
    db.query("DELETE FROM bot_cupons", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

//Delete operator coins
app.get("/api/deleteoperatorcoins", (req,res)=>{
    db.query("DELETE FROM operator_coins", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

//Delete user coins
app.get("/api/deleteusercoins", (req,res)=>{
    db.query("DELETE FROM user_coins", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

//Delete weekcoins
app.get("/api/deletweekcoins", (req,res)=>{
    db.query("DELETE FROM week_coins", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

//Delete winerhits
app.get("/api/deletwinerhits", (req,res)=>{
    db.query("DELETE FROM winer_hits", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });
});

// Default usercoins
let uservalue = 10000;
app.post('/api/defaultusercoins', (req,res)=> {   
    db.query("INSERT INTO user_coins (usercoins) VALUES (?)",uservalue, (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Default operatorcoins
let operatorvalue = 0;
app.post('/api/defaultoperatorcoins', (req,res)=> {   
    db.query("INSERT INTO operator_coins (operatorcoins) VALUES (?)",operatorvalue, (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Default weekcoins
let weekvalue = 0;
app.post('/api/defaultweekcoins', (req,res)=> {   
    db.query("INSERT INTO week_coins (weekcoins) VALUES (?)",weekvalue, (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})


// User coins
app.get("/api/usercoint", (req,res)=>{
    db.query("SELECT usercoins FROM user_coins", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Operator coins coins
app.get("/api/operatorcoins", (req,res)=>{
    db.query("SELECT operatorcoins FROM operator_coins", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Week coins coins
app.get("/api/weekcoins", (req,res)=>{
    db.query("SELECT weekcoins FROM week_coins", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Update usercoins
app.post('/api/postusercoins',(req,res)=>{   
    const usercoins = req.body.usercoins;
    const operation = req.body.operation;
    const value = req.body.value;
    db.query((operation=="-"?"UPDATE user_coins SET usercoins = usercoins - ? WHERE usercoins = ?":"UPDATE user_coins SET usercoins = usercoins + ? WHERE usercoins = ?"),[value,usercoins], (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Update operatorcoins
app.post('/api/postoperatorcoins',(req,res)=>{
    const operatorcoins = req.body.operatorcoins;
    const operation = req.body.operation;
    const value = req.body.value;
    db.query((operation=="-"?"UPDATE operator_coins SET operatorcoins = operatorcoins - ? WHERE operatorcoins = ?":"UPDATE operator_coins SET operatorcoins = operatorcoins + ? WHERE operatorcoins = ?"),[value,operatorcoins], (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Update weekcoins
app.post('/api/postweekcoins',(req,res)=>{
    const weekcoins = req.body.weekcoins;
    const operation = req.body.operation;
    const value = req.body.value;   
    db.query((operation=="-"?"UPDATE week_coins SET weekcoins = weekcoins - ? WHERE weekcoins = ?":"UPDATE week_coins SET weekcoins = weekcoins + ? WHERE weekcoins = ?"),[value,weekcoins], (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Hits insert
app.post('/api/createwinerhits', (req,res)=> {   
    const fiveHits = req.body.fivehits;
    const foorHits = req.body.foorhits;
    const threeHits = req.body.threehits;
    const twoHits = req.body.twohits;
    const totalHits = req.body.totalhits;
    db.query("INSERT INTO winer_hits (twohits, threehits, foorhits, fivehits, totalhits) VALUES (?,?,?,?,?)",[twoHits,threeHits,foorHits,fiveHits,totalHits], (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// User cupon insert
app.post('/api/createnewcupon', (req,res)=> {   
    const lotnum1 = req.body.num1;
    const lotnum2 = req.body.num2;
    const lotnum3 = req.body.num3;
    const lotnum4 = req.body.num4;
    const lotnum5 = req.body.num5;
    db.query("INSERT INTO user_cupons (lotnum1, lotnum2, lotnum3, lotnum4, lotnum5) VALUES (?,?,?,?,?)",[lotnum1,lotnum2,lotnum3,lotnum4,lotnum5], (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Bot cupon insert
app.post('/api/createnewbotcupon', (req, res) => {
    const lotnum1 = req.body.num1;
    const lotnum2 = req.body.num2;
    const lotnum3 = req.body.num3;
    const lotnum4 = req.body.num4;
    const lotnum5 = req.body.num5;
    db.query("INSERT INTO bot_cupons (lotnum1, lotnum2, lotnum3, lotnum4, lotnum5) VALUES (?,?,?,?,?)", [lotnum1, lotnum2, lotnum3, lotnum4, lotnum5], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error")
            }
            else {
                console.log(result)
                res.send("ok")
            }
        });
    })

    // winer user cupon insert
    app.post('/api/wineruser', (req, res) => {
    const lotnum1 = req.body.num1;
    const lotnum2 = req.body.num2;
    const lotnum3 = req.body.num3;
    const lotnum4 = req.body.num4;
    const lotnum5 = req.body.num5;
    const lottresult = req.body.lottresult;
    const prize = req.body.prizes;
    db.query("INSERT INTO user_hits (lotnum1, lotnum2, lotnum3, lotnum4, lotnum5, lottresult, prize) VALUES (?,?,?,?,?,?,?)", [lotnum1, lotnum2, lotnum3, lotnum4, lotnum5, lottresult, prize], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error")
            }
            else {
                console.log(result)
                res.send("ok")
            }
        });
    })

    // winer sum cupon insert
    app.post('/api/wineroperator', (req, res) => {
        const lotnum1 = req.body.num1;
        const lotnum2 = req.body.num2;
        const lotnum3 = req.body.num3;
        const lotnum4 = req.body.num4;
        const lotnum5 = req.body.num5;
        const lottresult = req.body.lottresult;
        const prize = req.body.prizes;
        db.query("INSERT INTO operator_hits (lotnum1, lotnum2, lotnum3, lotnum4, lotnum5, lottresult, prize) VALUES (?,?,?,?,?,?,?)", [lotnum1, lotnum2, lotnum3, lotnum4, lotnum5, lottresult, prize], (err, result) => {
                if (err) {
                    console.log(err)
                    res.send("Error")
                }
                else {
                    console.log(result)
                    res.send("ok")
                }
            });
        })

    // Winer num insert
app.post('/api/winernum', (req, res) => {
    const lotnum1 = req.body.num1;
    const lotnum2 = req.body.num2;
    const lotnum3 = req.body.num3;
    const lotnum4 = req.body.num4;
    const lotnum5 = req.body.num5;
    db.query("INSERT INTO winer_num (lotnum1, lotnum2, lotnum3, lotnum4, lotnum5) VALUES (?,?,?,?,?)", [lotnum1, lotnum2, lotnum3, lotnum4, lotnum5], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error")
            }
            else {
                console.log(result)
                res.send("ok")
            }
        });
    })

// Cuponlist send
app.get("/api/cuponlist", (req,res)=>{
    db.query("SELECT * FROM user_cupons", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// winer Cuponlist send
app.get("/api/winercuponlist", (req,res)=>{
    db.query("SELECT * FROM user_hits", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// all winer Cuponlist send
app.get("/api/allcuponlist", (req,res)=>{
    db.query("SELECT * FROM operator_hits", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Cuponlist send
app.get("/api/botcuponlist", (req,res)=>{
    db.query("SELECT * FROM bot_cupons", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Winernumlist send
app.get("/api/winernumlist", (req,res)=>{
    db.query("SELECT * FROM winer_num", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Cuponlist send
app.get("/api/weeknum", (req,res)=>{
    db.query("SELECT * FROM curen_week", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Cuponlist send
app.get("/api/loadflag", (req,res)=>{
    db.query("SELECT * FROM load_flag", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{
const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    }
    );   
    });

// Update weeknum
app.post('/api/weeknumupd',(req,res)=>{
    db.query("UPDATE curen_week SET week = 1 WHERE week = 0", (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Update loadflag
app.post('/api/loadflagupd',(req,res)=>{
    db.query("UPDATE load_flag SET loads = 1 WHERE loads = 0", (err,result)=>{
        if (err) {
            console.log(err)
            res.send("Error")
        }
        else {
            console.log(result)
            res.send("ok")
        }
    });
})

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
    const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } 
})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})