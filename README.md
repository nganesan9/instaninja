Instagram Analysis
====================================

### Overview

The Instagram Analysis application is one that analyzes images from an instagram account to classify it into different categories. It uses IBM Bluemix, NodeRED editor, API from Instagram and Watson’s Visual Recognition service. Using the API, it fetches the top 5 images from your account. It then passes it to the Watson service, to identify which category each image belongs to. It then stores these types into a variable name. These variables are fetched by the HTML page for viewing.

### Instructions

a) Click the Deploy to Bluemix button as shown below.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/nganesan9/instaninja)

Enter a unique name for the application. Eg: If my name were Jane Doe, I would've entered 'jdinsta' as the application name.
(If you haven't already, sign up for Bluemix along the way). Verify everything and click "Deploy".

b) Create a Watson Visual Recogntion service - Open bluemix.net in a new browser tab, click on Catalog, scroll down and click on Watson Visual Recognition service. Enter name and click Create.

c) Open the service after creating and click on "Service Credentials" tab to the left.

d) Note the API key which is a long aplhanumeric.

### Using the application

a) Once the application is open in a new browser window, copy the Visual Recognition API Key from the previous step, and paste it in the purple nodes titled "Image 0", "Image 1", all the way to "Image 4". Double click on the node to open it, and place it against "API Key" field.

b) Click the red colored "Deploy" button on the top right corner. 

c) Now click the little square on the Inject node titled "Get Insta. data", to the left of the arrow. 
   Wait for a little message saying "Successfully Deployed".
   
   NOTE: If you see a little red error to the right, then the correct API Key has not been pasted. Watch for extra spaces while copying.

d) Open a new browser window, and paste this URL "app_name_from_step_A_under_instruction.mybluemix.net/see_type"

And voila! Images are to the left of the page, and the classification to its right. We’ve thus successfully created an application that takes data from Instagram and identifies it.

### Watson Visual Recognition Service

  This service classifies images, detects faces and recognizes text.It can also give out the output in various languages like English, Spanish, Arabic and Japanese.