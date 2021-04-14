function testWebhook (hw) {

    //import thewse 2 functions from discord-webhook-node
    const {Webhook, MessageBuilder } = require('discord-webhook-node');

    //???
    const hook = new Webhook(hw);

    const IMAGE_URL = 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg';
    hook.setUsername('Successful test!');
    hook.setAvatar(IMAGE_URL);

    var embed = new MessageBuilder()
    .setTitle('Unnamed Bot | Nike SNKRS account generator')
    .addField('Если ты видишь это, то ссылка на webhook указана верно, продолжай заполнять форму в приложении!', '----------------------------')
    .setColor('#ddc3a5')
    .setFooter('NEOdinok#6433, special for you');

    hook.sent(embed);
}

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