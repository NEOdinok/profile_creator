//что конкретно делает этот файл и в чем его функция

//что это за импорты??? это все фреймворки???
const { async, console, browser } = require('globalthis/implementation');
const { first, delay } = require('lodash');
const fetch = require("node-fetch");

const names = ["Александр", "Алексей", "Анатолий", "Андрей", "Артем", "Валерий", "Василий", "Виктор", "Владимир", "Владислав", "Геннадий", "Георгий", "Григорий", "Евгений", "Денис", "Дмитрий", "Иван", "Игорь", "Кирилл", "Максим", "Михаил", "Никита", "Николай", "Олег", "Павел", "Петр", "Роман", "Сергей", "Федор", "Юрий"];
const lastnames = ["Иванов", "Смирнов", "Кузнецов", "Попов", "Васильев", "Петров", "Соколов", "Михайлов", "Новиков", "Фёдоров", "Морозов", "Волков", "Алексеев", "Лебедев", "Семёнов", "Егоров", "Павлов", "Козлов", "Степанов", "Николаев", "Орлов", "Андреев", "Макаров", "Никитин", "Захаров", "Толмачев", "Иванов"];

var login = '';
var password = '';

//зачем мы просто копируем эту функцию 2 раза тут и в discordModule???
function successWebhook (hw, email, password, number) {
    const {Webhook, MessageBuilder } = require('discord-webhook-node');
    const hook = new Webhook(hw);
    const IMAGE_URL = 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg';
    hook.setUsername('Success!');
    hook.setAvatar(IMAGE_URL);

    var answer = email + ":" + password;
    var embed = new MessageBuilder()
    .setTitle('Unnamed bot | Nike SNKRS account generator')
    .addField(`Данные для входа:\n ||${answer}||`, `номер телефона: ||${number}||`)

    .setColor('#ddc3a5')
    .setFooter('NEOdinok#6433, special for you')
    console.log(answer);
    hook.send(embed);
}

require('chromedriver');
const puppeteer = require('puppeteer');

async function register(lgn, psswd, name, surname) {
    //че такое document и где вдруг он появляется???
    let api = document.getElementById("apikey").value;

    //что это
    document.getElementById("start").style.visibility = "hidden";
    
    //почему мы используем puppeteer??? headless это когда не видно что происходит???
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    //что это делает???
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    await page.goto('https://www.nike.com/ru/register');
    login = lgn;
    password = psswrd;
    let buy = await fetch(`https://onlinesim.ru/api/getNum.php?apikey=${api}&service=nike`);

    //что вообще такое await???

    //что это делает???
    await page.waitForSelector('input[name="emailAddress"]');
    await page.type('input[name="emailAddress"]', login);
    await page.type('input[name="password"]', password);
    await page.type('input[name="firstName"]', name);
    await page.type('input[name="lastName"]', surname);
    await page.type('input[name="dateOfBirth"]', '12021999');;
    await page.click('input[name="dateOfBirth"]', '12121999');

    //че это и следующее???
    const gender = await page.$x('/html/body/div[2]/div[3]/div[5]/form/div[7]/ul/li[1]/input');
    await gender[0].click();

    const submit = await page.$x('/html/body/div[2]/div[3]/div[5]/form/div[9]/input');
    await submit[0].click();

    await page.waitForNavigation();
    await page.goto('https://www.nike.com/ru/member/settings/');

    const settingsTab = await page.$x('//*[@id="settings"]/div[3]/div[1]/div[1]/div/div[2]/div/span');
    await settingsTab[0].click();
    await page.waitForSelector('input[name="email"]');
    const mobileTab = await page.$x('/html/body/div[3]/div/div[3]/div[2]/div/div/form/div[2]/div[4]/div/div/div/div[2]/button');
    await mobileTab[0].click();
    let numberApi = await fetch(`https://onlinesim.ru/api/getState.php?apikey=${api}`);
    let numberJson = (await numberApi.json())[0].number;
    numberJson = (numberJson.split("+7"))[1];
    await page.waitForSelector('input[type="tel"]');
    await new Promise(resolve => {
        setTimeout(resolve, 5000)
    })
    await page.type('input[type="tel"]', numberJson);
    const sendSms = await page.$x('/html/body/div[1]/div[1]/div/div[1]/div/div[10]/form/div[1]/div[1]/input');
    await sendSms[0].click();
    await new Promise(resolve => {
        setTimeout(resolve, 20000)
    })

    let codeApi = await fetch(`https://onlinesim.ru/api/getState.php?apikey=${api}`);
    let codeJson = (await codeApi.json())[0].msg;
    await page.type('input[type="number"]', codeJson);
    const agreeBox = await page.$x('/html/body/div[1]/div[1]/div/div[1]/div/div[10]/form/div[2]/label');
    await agreeBox[0].click();
    const exit = await page.$x('/html/body/div[1]/div[1]/div/div[1]/div/div[10]/form/div[3]/input');
    await exit[0].click();
    await new Promise(resolve => {
        setTimeout(resolve, 1000)
    })

    let tzidApi = await fetch(`https://onlinesim.ru/api/getState.php?apikey=${api}`);
    let tzidJson = (await tzidApi.json())[0].tzid;
    let confirmApi = await fetch(`https://onlinesim.ru/api/setOperationOk.php?apikey=${api}&tzid=` + tzidJson);
    await browser.close();
    document.getElementById("start").style.visibility = "visible";
    successWebhook(document.getElementById("hook").value, document.getElementById("email").value, document.getElementById("password").value, numberJson);
}