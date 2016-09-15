/*eslint-env node, jquery*/
/*globals data */
var request = require("request");
module.exports = function(RED) {
    function GetInstaData(this,config);
        var node = this;
        this.on("input", function(msg) {
            msg.payload = msg.payload.toLowerCase();
//change the value of msg.make a request.
/* https://api.instagram.com/v1/users/self/media/recent/?access_token=1398396351.4754953.fbfdfe3315574a4c96c1c419b0f79849&count=10 */
/*
			$.getJSON("https://www.instagram.com/ninja_ganesan/media/", function(data){
					data = JSON.stringify(data,null,4);
					node.send(data);
			});
*/
			request({
				 url: "https://api.instagram.com/v1/users/1398396351/media/recent/?access_token=1398396351.4754953.fbfdfe3315574a4c96c1c419b0f79849&count=10", //'request' makes a call to API URL which in turn returns a JSON to the variable 'body'
			 	json: true
			}, function(error, response, body){
				if (!error && response.statusCode === 200) {
					console.log("Hey there Neeraja here");
					console.log("length of body = " + body.length);
    				console.log("************************************************* Response from Insta is : " + body.pagination.next_url);

//Run loop from 0 to 4
					var image_string = "[";
					for(var loop=0; loop< 9; loop++)
					{
						//data[0].images.standard_resolution.url
						var image_loop = "{ \"image_url\" : \"" + body.data[loop].images.standard_resolution.url +" \"},";
						image_string += image_loop;
					}
					image_string += "{ \"image_url\" : \""  + body.data[4].images.standard_resolution.url + " \"}";
					image_string += "]";

					//body = JSON.stringify(body,null,4);
					//console.log("************************************************* Response from Insta stringify : " + body);
					console.log("**************************** Image string is : " + image_string);
					msg.payload = image_string;
					node.send(msg);
        			//console.log(body); // Show the HTML for the Modulus homepage.
    			}
			});

/*
			request("https://api.instagram.com/v1/users/1398396351/media/recent/?access_token=1398396351.4754953.fbfdfe3315574a4c96c1c419b0f79849&count=1", function (error, response, body) {
    			if (!error && response.statusCode === 200) {
					console.log("length of body = " + body.length());
    				console.log("************************************************* Response from Insta is : " + body);
					body = JSON.stringify(body,null,4);
					console.log("************************************************* Response from Insta stringify : " + body);
					msg.payload = body;
					node.send(msg);
        			//console.log(body); // Show the HTML for the Modulus homepage.
    			}
			});

*/


			/*
			$.ajax({
  				url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1398396351.4754953.fbfdfe3315574a4c96c1c419b0f79849&count=10",
  				dataType: 'json',
  				async: false,
  				success: function(data) {
    				data = JSON.stringify(data,null,4);
					node.send(data);
  				}
			});
			*/

        });
    }
    RED.nodes.registerType("get-instagram-data",GetInstaData);
};