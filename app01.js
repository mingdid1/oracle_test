const express = require("express");
const app = express();

let con;

app.get("/", (req, res)=> {
    console.log("1.연동전");
    con = connect();
    con.then((msg)=>{
        console.log("3.연동 완료 후 특정기능 사용");
        //res.send("con => "+ con);
        res.send("con => "+ msg);
    });
});

app.get("/async", async(req, res)=> {
    console.log("1.연동전async");
    con = await connect();
    console.log("3.연동 완료 후 특정기능 사용async");
    res.send("con => "+ con);
});
// async, await: 비동기 방식 함수임을 알려줌 (then을 좀더 간단하게 사용 )

const connect = () => {
    let msg;
    return new Promise((resolve)=> setTimeout(() => {
        msg = "DB연동 되었습니다async";
        console.log("2.DB연동하는 중..async");
        resolve(msg);
    }, 1000));
    // 1000 = 1초
    // 1초 후 실행이기 때문에 132순으로 나옴 (비동기 방식)
    
    // Promise, then: 비동기 방식 return을 동기방식으로 돌려줌
    // return msg;
}


app.listen(3000, ()=> { console.log("3000 서버 실행"); });