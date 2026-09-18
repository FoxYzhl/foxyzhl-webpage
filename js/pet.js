let hg = 101;
let love = 71;
let money = 100;
let food = 10;
const npcchat_no1 = ["杂鱼～醒啦？(￣▽￣*)", "又丑又笨呢(｀へ´)", "慢死了笨蛋！(╯‵□′)╯", "就这？弱鸡～(¬_¬)", "哭吧哭吧～(￣▽￣)ノ", "活该你单身(-_-)", "脑子进水了？(－‸ლ)", "三秒就忘事？(￣.￣)", "吵死了闭嘴！(｀ε´)", "废物早安呀(๑•́ ₃ •̀๑)"];
const npcchat_no2 = ["才、才不是等你呢！(｀ω´)", "笨狗！只准看我啦(〃∀〃)", "手汗脏死了…牵吧(￣▽￣)ゞ", "夸你一句别飘啊(๑´ㅂ`๑)", "盯～想被我踩？(－‸ლ)", "巧克力…顺便做的！(｡•́︿•̀｡)", "哭包，肩膀借你(￣︶￣)♥", "再摸头就咬你哦(｀ε´)ノ", "哼！只对你毒舌啦(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "约会？我勉为其难(╯▽╰)"];
const npcchat_no3 = ["啊~ 我警告你！别乱来啊！OAO","这里不行！>_<","我不是好惹的！o(≧口≦)o","快把手拿开！","臭杂鱼~ 手往哪摸呢！","再摸就要变成里番啦！ヽ（≧□≦）ノ"];
const npcchat_no4 = ["哇！你怎么知道我喜欢这个","这个东西很好吃欸","隔~","我还要！"];
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
        idMessage.innerHTML = "啊~ 主人，企鹅的肚肚打雷了qwq";
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
        idMessage.innerHTML = "滚啊！!别碰我！";
    }
    else if (love <= 20) {
        idMessage.innerHTML = "哼！凑杂鱼，你好讨厌！";
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
        idMessage.innerHTML = "哼！凑杂鱼快喂我吃的！";
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
        idMessage.innerHTML = "啊~ 好饿！凑杂鱼快喂我吃的！";
        love -= 1;
    }
    else if (typeof hg != "number") {
        idMessage.innerHTML = "你开了？！";
    }
    else {
        let input_value = document.getElementById("chat_input").value;
        if (input_value != "") {
            if (input_value == "你是谁") {
                idMessage.innerHTML = "我是一只小猫 ヾ(≧▽≦*)o";
            }
            else {
                idMessage.innerHTML = input_value + "！ ヾ(≧▽≦*)o";
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
        idMessage.innerHTML = "凑杂鱼，这就没钱了？赏你6元";
        money += 6;
    }
    else if (typeof money != "number") {
        document.getElementsByClassName("payfood_background")[0].style.display = "none";
        idMessage.innerHTML = "你开了？！";
    }
    else {
        document.getElementsByClassName("payfood_background")[0].style.display = "none";
        money -= foodHowmoney;
        food += 1;
        if (love >= 20) {
            idMessage.innerHTML = "看你刚刚打开了网购平台，你又买啥好吃的啦~ 快炫我嘴里q(≧▽≦q)";
        }
        else if (love < 30 && love != 0) {
            idMessage.innerHTML = "你干嘛！我就看看而已，才....才不是想吃呢！";

        }
        else if (love == 0) {
            idMessage.innerHTML = "哼！别以为买几个小鱼干就想收买我 >:(";
        }
    }
    inners();
}