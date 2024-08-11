const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-2" });

exports.handler = async function (event) {
  
  console.log('EVENT: ', event)

  const { senderName, senderEmail, senderSubject, senderMessage } = JSON.parse(event.body);
  
  const params = {
    Destination: {
      ToAddresses: ["divi.2026@gmail.com"],
    },

    Message: {
      Body: {
        Text: { 
            Data: `You just got a message titled "${senderSubject}" from ${senderName} - ${senderEmail}:
            ${senderMessage}` 
        },
      },
      Subject: { Data: `Message from ${senderName}` },
    },
    Source: "divi.2026@gmail.com",
    
  };

  return ses.sendEmail(params).promise();
};