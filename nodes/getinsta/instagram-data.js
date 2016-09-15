/*eslint-env node, jquery*/
/*globals data */
var request = require('request');
module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
			request({
				 url: "https://api.instagram.com/v1/users/1398396351/media/recent/?access_token=1398396351.4754953.fbfdfe3315574a4c96c1c419b0f79849&count=6", //'request' makes a call to API URL which in turn returns a JSON to the variable 'body'
			 	json: true
			}, function(error, response, body){
				if (!error && response.statusCode === 200) {
					console.log("Hey there Neeraja here");
					console.log("length of body = " + body.length);
    				console.log("************************************************* Response from Insta is : " + body.pagination.next_url);

//Run loop from 0 to 6
					var image_string = "[";
					for(var loop=0; loop< 6; loop++)
					{
						var image_loop = "{ \"image_url\" : \"" + body.data[loop].images.standard_resolution.url +" \"},";
						image_string += image_loop;
					}
					image_string += "{ \"image_url\" : \""  + body.data[4].images.standard_resolution.url + " \"}";
					image_string += "]";
					console.log("**************************** Image string is : " + image_string);
					msg.payload = image_string;
					node.send(msg);
    			}
			});
        });
    }
    RED.nodes.registerType("instagram-data",LowerCaseNode);
};