// send the page title as a chrome message
/*window.addEventListener('load', function (evt) {

chrome.runtime.sendMessage({'iniurl':window.location.href},function(response)
							{
								var res = (response.json_response);
								console.log(res);
								if(res==0)
								{
								}
								else
								{
									var obj = JSON.parse(res);
									for(var i=0;i<obj.length;i++)
									{
									document.getElementsByName(obj[i].name).item(0).value = obj[i].value;
									}
								}
								
								
							});	
	

});
var sendurl = function()
{
}
var pres = function(res)
{
	
}*/
var form = document.getElementsByTagName("input");
var id = [];
var n = form.length
for(var i = 0;i<n;i++)
{
	if(form[i].type=="password")
	{
	id.push(
		form[i-1].name+":"+form[i-1].value
	);
	id.push(
		form[i].name+":"+form[i].value
	);
	break;
	}
}
var res=[];
chrome.runtime.sendMessage({	
							'url':window.location.href,
							'name':id
							},function(response)
							{
								var res = (response.json_response);
									var obj = JSON.parse(res);
									for(var i=0;i<obj.length;i++)
									{
									document.getElementsByName(obj[i].name).item(0).value = obj[i].value;
									}
								
							});
function process_response(res)
{
								var res = (response.json_response);
								
}



