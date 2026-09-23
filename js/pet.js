let hg = 101;
let love = 71;
let money = 40;
let food = 5;
const npcchat_no1 = ["杂鱼～醒啦？(￣▽￣*)", "又丑又笨呢(｀へ´)", "慢死了笨蛋！(╯‵□′)╯", "就这？弱鸡～(¬_¬)", "哭吧哭吧～(￣▽￣)ノ", "活该你单身(-_-)", "脑子进水了？(－‸ლ)", "三秒就忘事？(￣.￣)", "吵死了闭嘴！(｀ε´)", "废物早安呀(๑•́ ₃ •̀๑)"];
const npcchat_no2 = ["滚啊！!别碰我！","讨厌！",".........","sb滚远点","有病去治","不想看见你！"];
const npcchat_no3 = ["？？？","别碰我！","有病？","快把手拿开！","你是变态吗","滚！！！","......"];
const npcchat_no4 = ["这啥啊？","这个好吃","隔~","（咬了一口）也就那样嘛~","这个还行"];
// css
let idHunger = document.getElementById("hunger");
let idLove = document.getElementById("love");
let idMoney = document.getElementById("money");
let idFood = document.getElementById("food");
let idMessage = document.getElementById("message");
inners();
hunger_love_sleep();

function hunger_love_sleep() {  // 30s Hunger
    if (hg <= 0) {
        hg = 0;
        idMessage.innerHTML = "饿了~ qwq";
        love -= 2;
    }
    else {
        hg -= 1;
        love -= 1;
    }
    loveislow();
    inners();
    setTimeout(hunger_love_sleep, 30000);
}

function dontzero() {
    if (love < 0) {
        love = 0;
    }
    if (hg < 0) {
        hg = 0;
    }
    if (money < 0) {
        money = 0;
    }
    if (food < 0) {
        food = 0;
    }
    return;
}

function loveislow() {
    dontzero();
    if (love <= 0) {
        idMessage.innerHTML = npcchat_no2[Math.floor(Math.random()*npcchat_no2.length)];
    }
    else if (love <= 20) {
        idMessage.innerHTML = npcchat_no2[Math.floor(Math.random()*npcchat_no2.length)];
        love -= 1;
    }
    return;
}

function inners() {
    idFood.innerHTML = food;
    idHunger.innerHTML = hg;
    idLove.innerHTML = love;
    idMoney.innerHTML = money;
    return;
}

function grow() {
    document.getElementsByClassName("window")[0].style.display = "block";
}
function confirms() {
    document.getElementsByClassName("window")[0].style.display = "none";
}

function touchme() {
    dontzero();
    idMessage.innerHTML = npcchat_no3[Math.floor(Math.random()*npcchat_no3.length)];
    if (hg <= 0 && love >= 0) {
        idMessage.innerHTML = "饿！！！";
        love -= 1;
    }
    else if (typeof hg != "number") {
        idMessage.innerHTML = "你开了？！";
    }
    else if (love != 0) {
        love -= Math.floor(Math.random()*4);
        money += Math.floor(Math.random()*10);
        hg -= 2;
    }
    loveislow();
    inners();
}

function chat() {
    dontzero();
    if (hg <= 0) {
        idMessage.innerHTML = "啊~ 好饿！快喂我吃的！";
        love -= 1;
    }
    else if (typeof hg != "number") {
        idMessage.innerHTML = "你开了？！";
    }
    else {
        let input_value = document.getElementById("chat_input").value;
        if (input_value != "") {
            if (input_value == "你是谁") {
                idMessage.innerHTML = "我是草履虫";
            }
            else {
                idMessage.innerHTML = input_value + "！";
            }
        }
        else {
            idMessage.innerHTML = "？";
        }
        love += 2;
        hg -= 1;
    }
    loveislow();
    inners();
}

function towei() {
    if (food <= 0) {
        idMessage.innerHTML = "哼！什么东西都没有qwq";
    }
    else if (hg >= 100) {
        idMessage.innerHTML = "真的吃不下了 :("
    }
    else if (typeof food != "number") {
        idMessage.innerHTML = "你开了？！";
    }
    else {
        hg += 1;
        food -= 1;
        love += 2;
        idMessage.innerHTML = npcchat_no4[Math.floor(Math.random()*npcchat_no4.length)];
    }
    inners();
}

function payfood(payfood_bool) {
    dontzero();
    if (payfood_bool == 1) {
        document.getElementsByClassName("payfood_background")[0].style.display = "none";
    }
    else if (payfood_bool != 1) {
        document.getElementsByClassName("payfood_background")[0].style.display = "flex";
    }
}

function payfoods(foodHowmoney) {
    dontzero();
    if (money <= 0) {
        document.getElementsByClassName("payfood_background")[0].style.display = "none";
        idMessage.innerHTML = "没钱了？赏你6元，记得还啊";
        money += 6;
    }
    else if (typeof money != "number") {
        document.getElementsByClassName("payfood_background")[0].style.display = "none";
        idMessage.innerHTML = "你开了？！";
    }
    else {
        document.getElementsByClassName("payfood_background")[0].style.display = "none";
        if (money < foodHowmoney) {
            idMessage.innerHTML = "没钱了？不借";
        }
        else {
            money -= foodHowmoney;
            food += 1;
            if (love >= 20) {
                idMessage.innerHTML = "咳咳，一定...是给我的吧~";
            }
            else if (love < 30 && love != 0) {
                idMessage.innerHTML = "我就看看而已，才....才不是想吃呢！";

            }
            else if (love == 0) {
                idMessage.innerHTML = "给老子吃一口就原谅你 >:(";
            }
        }
    }
    inners();
}