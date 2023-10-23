/*
 * @Author: ChenJin 1185941165@qq.com
 * @Date: 2023-09-14 14:29:56
 * @LastEditors: chenjin 1185941165@qq.com
 * @LastEditTime: 2023-10-23 00:29:53
 * @FilePath: \echartVue3资料\代码\server\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let express=require("express");
let app=express();
// 设置跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');

    // res.header('Content-Security-Policy: upgrade-insecure-requests')
    // 千万不要网%%￥￥￥###
    // 千万不要网
    // 千万不要网
    next();
})

// 引用路由文件
let chartOne=require("./router/one");
let chartTwo=require("./router/two");
let chartThree=require("./router/three");
let chartFour=require("./router/four");
let chartMap=require("./router/map");

// 使用中间件来配置路由
app.use("/one",chartOne)
app.use("/two",chartTwo)
app.use("/three",chartThree)
app.use("/four",chartFour)
app.use("/china",chartMap)

app.listen(8080)