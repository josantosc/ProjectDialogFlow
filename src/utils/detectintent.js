const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
const projectId = process.env.PROJECT_ID
const sessionId = "12345aa"//uuid.v4();

const  runSample  = async(text)=> {
  const sessionClient = new dialogflow.SessionsClient({credentials : {
    client_email:process.env.CLIENT_EMAIL,
    private_key:process.env.PRIVATE_KEY,
  }});
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text:text,
        languageCode: "pt-BR",
      },
    },
  };
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  // console.log(`  Send: ${result.queryText}`);
  // console.log(`  Response: ${result.fulfillmentText}`);
  const resulText = result.fulfillmentText
  return resulText
}

module.exports = runSample;
