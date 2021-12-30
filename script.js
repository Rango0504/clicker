const click = document.querySelector(`.click`);
let totalClicksNumber = 0;
const totalClicks = document.querySelector(`.totalClicks`);
const money = document.querySelector(`.money`);
let moneyAmount = 0;

click.addEventListener(`click`, ()=>{
    totalClicksNumber++;
    totalClicks.textContent = `Ilość kliknięć: ${totalClicksNumber}`;
    money.textContent = `Masz: ${++moneyAmount}zł`;
    if(monitor==1){
        moneyAmount++;
    }
})
const checkAmount = () => {
    money.textContent = `Masz: ${moneyAmount}zł`;
} 
setInterval(checkAmount, 1);

const abuse = document.querySelector(`.abuses`);
let abuses = ["Zaraz Ci przypierdolę jak będziesz tak wolno klikał!", "W łeb Ci zajebię jak jeszcze raz tak chujowo klikniesz!", "Jak tam przyjdę i Ci kopa zasadzę za takie klikanie!"];
let i = 0;

const changeAbuse = () => {
    abuse.textContent = abuses[i];
    i++;
    if (i == 3){
        i=0;
    }
}
setInterval(changeAbuse, 10000);

const upgradeMiner = document.querySelector(`.miner`);
const miner = () => {
    moneyAmount += 2;
}
upgradeMiner.addEventListener(`click`, () => {
    if(moneyAmount>=100){
        setInterval(miner, 1000);
        moneyAmount -= 100;
    }
})

const upgradeMonitor = document.querySelector(`.monitor`);
let monitor = 0;
upgradeMonitor.addEventListener(`click`, () => {
    if(moneyAmount>=600){
        moneyAmount -= 600;
        monitor = 1;
    }
})
const winner = document.querySelector(`.winner`);
const main = document.querySelector(`main`);
const win = () => {if (moneyAmount >= 2000) {
    winner.style.opacity=100;
    main.style.height=0;
    main.style.opacity=0;
}}
setInterval(win,1000);