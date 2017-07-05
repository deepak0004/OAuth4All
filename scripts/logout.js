$('#logout').click(function() {
   $.ajax({
        url: 'https://deepak-thukral.com/deletelogin.php',
        type: 'post',
        data:{},
        success:function(){
          window.location.href = "main.html";
		  localStorage.removeItem("Id");
          }
        });
});
// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	/*chrome.extension.getBackgroundPage().*/chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});
/*document.addEventListener('DOMContentLoaded',function(){
chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});*/
/*chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
  
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, { file: "payload.js" });
});*/

// Listen to messages from the payload.js script and write to popout.html
var key = ["ac", "academy", "accountants", "actor", "ad", "ae", "aero", "af", "ag", "agency", "ai", "airforce", "al", "am", "an", "ao", "aq", "ar", "archi", "army", "arpa", "as", "asia", "associates", "at", "attorney", "au", "audio", "autos", "aw", "ax", "axa", "az", "ba", "bar", "bargains", "bayern", "bb", "bd", "be", "beer", "berlin", "best", "bf", "bg", "bh", "bi", "bid", "bike", "bio", "biz", "bj", "black", "blackfriday", "blue", "bm", "bn", "bo", "boutique", "br", "brussels", "bs", "bt", "build", "builders", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "camera", "camp", "capetown", "capital", "cards", "care", "career", "careers", "cash", "cat", "catering", "cc", "cd", "center", "ceo", "cf", "cg", "ch", "cheap", "christmas", "church", "ci", "citic", "ck", "cl", "claims", "cleaning", "clinic", "clothing", "club", "cm", "cn", "co", "codes", "coffee", "college", "cologne", "com", "community", "company", "computer", "condos", "construction", "consulting", "contractors", "cooking", "cool", "coop", "country", "cr", "credit", "creditcard", "cruises", "cu", "cv", "cw", "cx", "cy", "cz", "dance", "dating", "de", "degree", "democrat", "dental", "dentist", "desi", "diamonds", "digital", "directory", "discount", "dj", "dk", "dm", "dnp", "do", "domains", "durban", "dz", "ec", "edu", "education", "ee", "eg", "email", "engineer", "engineering", "enterprises", "equipment", "er", "es", "estate", "et", "eu", "eus", "events", "exchange", "expert", "exposed", "fail", "farm", "feedback", "fi", "finance", "financial", "fish", "fishing", "fitness", "fj", "fk", "flights", "florist", "fm", "fo", "foo", "foundation", "fr", "frogans", "fund", "furniture", "futbol", "ga", "gal", "gallery", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gift", "gives", "gl", "glass", "global", "globo", "gm", "gmo", "gn", "gop", "gov", "gp", "gq", "gr", "graphics", "gratis", "green", "gripe", "gs", "gt", "gu", "guide", "guitars", "guru", "gw", "gy", "hamburg", "haus", "hiphop", "hiv", "hk", "hm", "hn", "holdings", "holiday", "homes", "horse", "host", "house", "hr", "ht", "hu", "id", "ie", "il", "im", "immobilien", "in", "industries", "info", "ink", "institute", "insure", "int", "international", "investments", "io", "iq", "ir", "is", "it", "je", "jetzt", "jm", "jo", "jobs", "joburg", "jp", "juegos", "kaufen", "ke", "kg", "kh", "ki", "kim", "kitchen", "kiwi", "km", "kn", "koeln", "kp", "kr", "kred", "kw", "ky", "kz", "la", "land", "lawyer", "lb", "lc", "lease", "li", "life", "lighting", "limited", "limo", "link", "lk", "loans", "london", "lotto", "lr", "ls", "lt", "lu", "luxe", "luxury", "lv", "ly", "ma", "maison", "management", "mango", "market", "marketing", "mc", "md", "me", "media", "meet", "menu", "mg", "mh", "miami", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "moda", "moe", "monash", "mortgage", "moscow", "motorcycles", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "nagoya", "name", "navy", "nc", "ne", "net", "neustar", "nf", "ng", "nhk", "ni", "ninja", "nl", "no", "np", "nr", "nu", "nyc", "nz", "okinawa", "om", "onl", "org", "organic", "ovh", "pa", "paris", "partners", "parts", "pe", "pf", "pg", "ph", "photo", "photography", "photos", "physio", "pics", "pictures", "pink", "pk", "pl", "plumbing", "pm", "pn", "post", "pr", "press", "pro", "productions", "properties", "ps", "pt", "pub", "pw", "py", "qa", "qpon", "quebec", "re", "recipes", "red", "rehab", "reise", "reisen", "ren", "rentals", "repair", "report", "republican", "rest", "reviews", "rich", "rio", "ro", "rocks", "rodeo", "rs", "ru", "ruhr", "rw", "ryukyu", "sa", "saarland", "sb", "sc", "schule", "scot", "sd", "se", "services", "sexy", "sg", "sh", "shiksha", "shoes", "si", "singles", "sj", "sk", "sl", "sm", "sn", "so", "social", "software", "sohu", "solar", "solutions", "soy", "space", "sr", "st", "su", "supplies", "supply", "support", "surf", "surgery", "sv", "sx", "sy", "systems", "sz", "tattoo", "tax", "tc", "td", "technology", "tel", "tf", "tg", "th", "tienda", "tips", "tirol", "tj", "tk", "tl", "tm", "tn", "to", "today", "tokyo", "tools", "town", "toys", "tp", "tr", "trade", "training", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "university", "uno", "us", "uy", "uz", "va", "vacations", "vc", "ve", "vegas", "ventures", "versicherung", "vet", "vg", "vi", "viajes", "villas", "vision", "vlaanderen", "vn", "vodka", "vote", "voting", "voto", "voyage", "vu", "wang", "watch", "webcam", "website", "wed", "wf", "wien", "wiki", "works", "ws", "wtc", "wtf", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--45brj9c", "xn--4gbrim", "xn--55qw42g", "xn--55qx5d", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80asehdb", "xn--80aswg", "xn--90a3ac", "xn--c1avg", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czru2d", "xn--d1acj3b", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--gecrj9c", "xn--h2brj9c", "xn--i1b6b1a6a2e", "xn--io0a7i", "xn--j1amh", "xn--j6w193g", "xn--kprw13d", "xn--kpry57d", "xn--kput3i", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a4f16a", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--mgbx4cd0ab", "xn--ngbc5azd", "xn--nqv7f", "xn--nqv7fs00ema", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--q9jyb4c", "xn--rhqv96g", "xn--s9brj9c", "xn--ses554g", "xn--unup4y", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zfr164b", "xxx", "xyz", "yachts", "ye", "yokohama", "yt", "za", "zm", "zone", "zw"];
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {

	
	console.log("Hello");
	var param= "";
	console.log(request);
	//console.log(request.url);
	console.log(request.name);
	console.log(check(request.url));
	var host = rethost(request.url);
	var u = request.url;
	var username = localStorage.getItem("Id");
	console.log(username);
	if(u.indexOf('?')>-1)
	{
		u = u.substring(0,u.indexOf('?'));
	}
	for(var i=0;i<request.name.length;i++)
	{
		//console.log(request.name[i]);
		var sentence = request.name[i].split(':');
		var name = sentence[0];
		var value = sentence[1];
		value = encodeURIComponent(value);
		param = param+"&"+name+"="+value;		
	}
	param = "url="+u+param;
	param = "username="+username+"&"+param;
	console.log(param);
	var url = "https://deepak-thukral.com/add_url.php";
	var http = new XMLHttpRequest();
	http.open("GET",url+"?"+param,true);
	var json_response;
	http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		json_response = (http.responseText);
		console.log(json_response);
		sendResponse({json_response});	
			url = "https://deepak-thukral.com/PageRank.php";
	host = "host="+host;
	http.open("GET",url+"?"+host,true);
	var result = "";
	http.onreadystatechange = function(){
	if(http.readyState == 4 && http.status == 200) {
		json_response = (http.responseText);
		detect(json_response);
		//sendResponse({json_response});
	}
	}
	http.send(null);
	}
	}
	http.send(null);
	
	
	
	
	return true;
	
});
function detect(rank)
{
	console.log(rank);
	if(rank>=200000)
	{
		chrome.browserAction.setIcon({path:"logo1.png"});
		//document.getElementById('pagetitle').innerHTML = "This website is not secure";
		//alert("This website is not secure");
	
	}
	else
	{
		chrome.browserAction.setIcon({path:"logo.png"});
		//document.getElementById('pagetitle').innerHTML = "This website is secure";
		//alert("This website is secure");
	}
}
function rethost(url)
{
	var l = document.createElement("a");
	l.href = url;
	return l.hostname;
	
}
function check(url)
{
	console.log(url);
	var dots = (no_dots(url));
	var surl = (isSuspicious(url));
	var IP = 0;
	if((hasIP(url)))
	{
		IP = 1;
	}
	var edomain = 0;
	if(hasEmbeddedDomain(url))
	{
		edomain = 1;
	}
	var swords = (no_of_sensitive(url));
	var okey = 0;
	if((outOfkey(url)))
	{
		okey = 1;
	}
	var rate = dots * 0.6703+ surl*0.5472+IP*1.978+edomain*1.4154+okey*2.0249+swords*1.0106;
	return rate;
	
}
function hasEmbeddedDomain(url)
{
 var l = document.createElement("a");
 l.href = url;
 var path = l.pathname;
 var reg = new RegExp("[A-Za-z0-9-]+(\\.[A-Za-z0-9_]{2,})(\\.[A-Za-z_]{2,})+");
 return reg.test(path);

}
function no_dots(url)
{
	return (url.match(RegExp('\\.','g'))||[]).length;
}
function hasIP(url)
{
	var reg = new RegExp("(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)");
	return reg.test(url);
}
function isSuspicious(url)
{
	var ctr = 0;
	for(var i=0;i<url.length;i++)
	{
		if(url[i]=='@')
		{
			ctr = ctr + 2;
		}
		if(url[i]=='-')
		{	ctr = ctr + 1;
		}
	}
	return ctr;
}
function no_of_sensitive(url)
{
	var words = ["secure", "account", "webscr", "login", "ebayisapi", "signin", "banking", "confirm"];
	var ctr = 0;
	for(var i=0;i<words.length;i++)
	{
		var pattern = new RegExp("(" + words[i] + ")");
		if(pattern.test(url))
		{
			ctr++;
		}
	}
	return ctr;
}
function outOfkey(url)
{
	var l = document.createElement("a");
	l.href = url;
	var domain_parts = l.hostname.split(".");
	var flag = 0;
	for(var i=0;i<domain_parts.length;i++)
	{
		if(flag)
		{
			if(binarySearch(key,domain_parts[i])<0)
			{
				return true;
			}
		}
		else if(binarySearch(key,domain_parts[i])>=0)
		{
			flag = 1;
		}
	
	}
	return false;
}
function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);

    if (arr[mid] === i) {
    
    return arr[mid];
} else if (arr[mid] < i && arr.length > 1) {
    
    return binarySearch(arr.splice(mid, arr.length), i);
} else if (arr[mid] > i && arr.length > 1) {
    
    return binarySearch(arr.splice(0, mid), i);
} else {
        return -1;
    }

}