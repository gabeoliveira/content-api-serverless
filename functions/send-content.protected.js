const _ = require('lodash');


exports.handler = async (context, event, callback) => {
    const { MESSAGING_SERVICE_SID } = context;
    const { contentSid, from, to } = event;

    const contentVariables = JSON.stringify(Object.keys(event)
        .filter(key => /^\d+$/.test(key))
        .reduce((cur, key) => Object.assign(cur, { [key]: event[key]}), {}));
    

    console.log(contentVariables);

    try{

        const client = context.getTwilioClient();

        const message = await client.messages
            .create({
                contentSid,
                from,
                contentVariables,
                messagingServiceSid: MESSAGING_SERVICE_SID,
                to
            })
           
       
        callback(null,message);
    }

    catch(err){
        console.log(err);
        callback(err);
    }

    

    
}