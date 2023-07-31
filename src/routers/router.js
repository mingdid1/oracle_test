module.exports = (app) => {
    // const bodyParser = require("body-parser");
    // app.use(bodyParser.urlencoded({extended : true}));

    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter);

    const router = require("express").Router();
    
    router.get("/", (req, res)=> {
        //res.send("기본 경로 연동");
        res.render("index");
    });
    return router;
};