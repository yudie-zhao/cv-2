let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `/*大家好，我叫小赵
*接下来，向大家演示我所学的前端知识
*首先我要准备一个 div 
*/
#div1{
    height:200px;
    width:200px;
}
/*下面，我要把 div 变成一只小猪
*看这儿
*我准备把 div 变成圆
*/
#div1{
    border-radius:50%;
    background:#f772bb;
}
/*然后，给它加个鼻子
*/
.nose{
    position:relative;
    width:80px;
    height:45px;
    border-radius:50%;
    background:#f52b9b;
    top:110px;
    left:60px;
z-index:0;
}
/*让我们给它的鼻子加两个鼻孔吧
*/
.left-naris{
    position:absolute;
    width: 15px;
    height: 30px;
    top: 7.5px;
    left: calc(50% - 25px);
    border-radius: 50%;
    background:#d70174;
}
.right-naris{
    position:absolute;
    width: 15px;
    height: 30px;
    top: 7.5px;
    border-radius: 50%;
    left: calc(50% + 10px);
    background:#d70174;
}
/*给它加上眼睛吧
*/
.right-eyes{
    position:absolute;
    width:10px;
    height:20px;
    background:black;
    top:70px;
    left:120px;
    border-radius:50%;
}
.left-eyes{
    position:absolute;
    width:10px;
    height:20px;
    background:black;
    top:70px;
    right:120px;
    border-radius:50%;
}
/*给它加上耳朵
*/
.left-ears{
    position:absolute;
    width:0;
    height:0;
    border-top:40px solid #c3025f;
    border-right:40px solid transparent;
    transform:translate(30px,-30px);
}
.right-ears{
    position:absolute;
    width:0;
    height:0;
    border-top:40px solid #c3025f;
    border-left:40px solid transparent;
    transform:translate(130px,-30px);
}
    `

let string2 = "";
let n = 0;
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        };
        if (n < string.length) {
            n += 1;
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            window.scrollTo(0, 9999);
            demo.scrollTo(0, 9999);
            step();
        }
    }, 2);
};
step();

















