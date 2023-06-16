# Content API Serverless

## Solution Description

This **Twilio Function** is used to send content created using **Twilio's Content Editor/API** in **Twilio Studio**, both for **Programmable Messaging** and **Conversations**



## Requirements

### Twilio Features

* [Content API](https://www.twilio.com/docs/content-api) access

### Functions Deployment
* [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) installed
* [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit) installed
* A [Messaging Service](https://console.twilio.com/us1/develop/sms/services) if using Programmable Messaging
* A [Conversations Service](https://console.twilio.com/us1/develop/conversations/manage/services) if using Conversations (for a Flex account, a service is already created automatically)

## Setup

1. Clone this repository
2. In the root folder, copy the Environment Variables file sample into a production file
    * `cp .env.example .env`
3. Install dependencies
    * `npm install`
4. Setup `.env` with your [Messaging Service SID](https://console.twilio.com/us1/develop/sms/services)
5. Deploy the Twilio Functions
    * `twilio serverless:deploy`

## Usage

This service deploys two functions: `send-content` and `send-content-conversations`.

The `send-content` function leverages Programmable Messaging, and expects the following paramenters:
* **contentSid** - The ID for your pre-registered content on Content Editor
* **to** - Message destination
* **from** - Message sender
* **Content variables** - Various numbered parameters, following variables created on Content Editor

The `send-content-conversations` function leverages Programmable Messaging, and expects the following paramenters:
* **contentSid** - The ID for your pre-registered content on Content Editor
* **conversationSid** - Conversation ID
* **Content variables** - Various numbered parameters, following variables created on Content Editor


## Create New Content

To create new content you can go to the [Content Editor](https://console.twilio.com/us1/develop/sms/content-editor) or use the [Content API](https://www.twilio.com/docs/content-api) directly. Keep in mind that WhatsApp must approve content to be used as outbound messages

## Disclaimer

Beware that this solutions is meant only as a quickstart for using Content Editor in Studio.