const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true;
// 커밋 자동설정

const ser = require("../../service/member/member_service");

const list = async(req, res)=> {
    const list = await ser.getList();
    console.log("controller list : ", list);

    /* //service 사용 전
    let con = await oracledb.getConnection(dbConfig);
    console.log("con : ", con);
    
    oracledb.outFormat = oracledb.OBJECT;
    // 배열안에 키:값으로 나타남

    let result = await con.execute("select * from members02");
    console.log("result: ", result);
    // key 값

    // await con.close();
    res.send("list 페이지 연동: "+ result);
    */
    res.render("member/member_index", {list});
}
// 오라클 접속은 비동기방식으로 접근 => async, await 꼭 붙여줘야함

const registerForm = (req, res)=> {
    res.render("member/register_form");
}

const register = async (req, res)=> {
    console.log("register: ", req.body );

    let msg = await ser.insert( req.body );

    res.send(msg);
}

const memberView = async (req, res)=>{
    // async, await을 사용하지 않으면 기본적으로 Promise로 들어옴
    console.log("memberView ctrl: ", req.params);
    const member = await ser.getMember(req.params);
    console.log("controller memberview : ", member);
    //res.send("memberView");
    res.render("member/member_view", {member});
}

const modifyForm = async (req, res)=> {
    console.log("ctrl modify : ", req.query);
    //query: 값을 받아옴 (query로 받을 경우)
    console.log("ctrl modify : ", req.params);
    //params: 값을 받아오지 못함(경로로 받을 경우)
    
    const member = await ser.getMember(req.query);
    console.log("ctrl modify : ", member);

    res.render("member/modify_form", {member});
}

const modify = async (req,res) =>{
    console.log("ctrl modify: ", req.body);
    const msg = await ser.modify(req.body);
    res.send(msg);
}

const deleteMember = async(req, res)=>{
    const msg = await ser.deleteMember(req.params);
    res.send(msg);
}

module.exports = { list, registerForm, register, memberView,
                 modifyForm, modify, deleteMember };