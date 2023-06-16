const _ = require('lodash');


exports.handler = async (context, event, callback) => {
    const { contentSid, conversationSid } = event;

    const contentVariables = JSON.stringify(Object.keys(event)
        .filter(key => /^\d+$/.test(key))
        .reduce((cur, key) => Object.assign(cur, { [key]: event[key]}), {}));
    

    console.log(contentVariables);

    try{

        const client = context.getTwilioClient();

        const message = await client.conversations.v1.conversations(conversationSid)
            .messages
            .create({
                contentSid,
                contentVariables
            })
           
       
        callback(null,message);
    }

    catch(err){
        console.log(err);
        callback(err);
    }

    

    
}