var restify = require('restify')
var builder = require('botbuilder')
var cognitiveservices = require('botbuilder-cognitiveservices')

var botConnectorOptions = {
  appId: process.env.APP_ID,
  appPassword: process.env.APP_PASS
}

// Create bot
var connector = new builder.ChatConnector(botConnectorOptions)
var bot = new builder.UniversalBot(connector)

// Set up restify server
var server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('listening to: ', server.name, server.url)
})
server.post('/api/messages', connector.listen())

// Luis Setup
var qnaRecognizer = new cognitiveservices.QnAMakerRecognizer({
  knowledgeBaseId: process.env.KNOWLEDGE_BASE,
  subscriptionKey: process.env.SUBSCRIPTION_KEY})

var BasicQnAMakerDialog = new cognitiveservices.QnAMakerDialog({
  recognizers: [qnaRecognizer],
  defaultMessage: 'No good match in the FAQ. Try changing your query terms.',
  qnaThreshold: 0.5})

bot.dialog('/', BasicQnAMakerDialog)
/*bot.dialog('/', function (session) {
    session.send("Hello World");
});
*/