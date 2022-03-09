# nice-incontact-webchat - Client
The purpose of this repo is to create a javascript file that contains functions needed for the IBM Watson WebChat client to communicate with the deployed server code found in the "server" folder.

## Building the servicedesk.bundle.js
1) install and build the project
    ```
    npm install
    npm run build
    ```

2) verify the bundle exists under dist/servicedesk.bundle.js

## Configuring the chatbot client
1) Copy the dist/servicedesk.bundle.js to a content distribution network in the web, such as an IBM Cloud Object Storage public bucket, or just a folder on your website.

2) Get the url for the js file and put it in the script tag of the index.html page.  Example:
    ```
    <script src="https://XXXXXXXXX.s3.us-south.cloud-object-storage.appdomain.cloud/servicedesk.bundle.js"></script>
    ```

3) in another script tag on the index.html page, add your webchat integration and also specify the SERVER_BASE_URL url of the server side api:
    ```
    <script>
        SERVER_BASE_URL = "https://XXXXX.XXXXX.us-south.codeengine.appdomain.cloud"

        window.watsonAssistantChatOptions = {
            integrationID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            region: "us-south",
            serviceInstanceID: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            onLoad: function(instance) { instance.render(); },
            serviceDeskFactory: window.WebChatServiceDeskFactory
        };
        setTimeout(function(){
            const t=document.createElement('script');
            t.src='https://web-chat.global.assistant.watson.appdomain.cloud/versions/' + (window.watsonAssistantChatOptions.clientVersion || 'latest') + '/WatsonAssistantChatEntry.js';
            document.head.appendChild(t);
        });

    </script>
    ```

4) Open the index.html page from the file system and try it out.
