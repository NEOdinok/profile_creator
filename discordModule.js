/* This function tests the discord-webhook and takes a webhook url (hw) as an argument */
function testWebhook (hw) {
    //import theese 2 functions from discord-webhook-node
    const {Webhook, MessageBuilder } = require('discord-webhook-node');

    const hook = new Webhook(hw);
    const IMAGE_URL = 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg';

    //set the name that is displayed over the hook's message
    hook.setUsername('Successful test!');

    //set the avatar of the hook
    hook.setAvatar(IMAGE_URL);

    //this thing builds a custom message
    var embed = new MessageBuilder()
    .setTitle('Unnamed Bot | Nike SNKRS account generator')
    .addField('Если ты видишь это, то ссылка на webhook указана верно, продолжай заполнять форму в приложении!', '----------------------------')
    .setColor('#ddc3a5')
    .setFooter('NEOdinok#6433, special for you');

    //this sends this custom message
    hook.send(embed);
}

function successWebhook (hw, email, password, number) {
    const { Webhook, MessageBuilder } = require('discord-webhook-node');
    const hook = new Webhook(`${hw}`);
    const IMAGE_URL = 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg';
    hook.setUsername('Success!');
    hook.setAvatar(IMAGE_URL);

    var answer = email + ":" + password;
    var embed = new MessageBuilder()
    .setTitle('Unnamed bot | SNKRS account generator')
    .addField(`Данные для входа:\n ||${answer}||`, `Номер телефона: ||${number}||`)

    .setColor('#ddc3a5')
    .setFooter('NEOdinok special for you');
    console.log(answer);
    hook.send(embed);
}

successWebhook("https://discord.com/api/webhooks/823194229861777438/eULwnfVmAGsMPSJRNGSPaOxiOFM3dLJ-hgdkXzc54mHwHu20gj9tIZTEPgk5RIkFQpWk", "email@mail.ru", "password12345", "+79155553232");