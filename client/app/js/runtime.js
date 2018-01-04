// RequireJS config for live application loads.

// New require.config for live application loads.
require.config({
	paths: {
		// Social Plugins
		"twitter": [
			"https://platform.twitter.com/widgets",
			"http://platform.twitter.com/widgets",
			"/js-default/twitter"
		],
		"addthis": [
			"https://s7.addthis.com/js/300/addthis_widget", // #pubid=ra-51d65a00598f1528
			"http://s7.addthis.com/js/300/addthis_widget", // #pubid=ra-51d65a00598f1528
			"/js-default/addthis"
		],
		"uservoice": [
			"https://widget.uservoice.com/5fPlQ3CsHcjp8LVE8dAeA",
			"http://widget.uservoice.com/5fPlQ3CsHcjp8LVE8dAeA",
			"/js-default/uservoice"
		],
		"analytics": [
			"https://www.google-analytics.com/analytics",
			"http://www.google-analytics.com/analytics",
			"https://cdn.octave-online.com/analytics-dummy",
			"http://cdn.octave-online.com/analytics-dummy"
		],
		"webfont": [
			"https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont",
			"http://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont",
			"/js-default/webfont"
		],
		"persona": [
			"https://login.persona.org/include",
			"/js-default/persona"
		]
	},
	shim:{
		"twitter": {
			exports: "twttr"
		},
		"webfont": {
			exports: "WebFont"
		},
		"analytics": {
			exports: "ga"
		},
		"persona": {
			exports: "navigator.id"
		}
	}
});

// CSS shim
require.css = function(url){
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
}

// Load from Google Fonts
// NOTE: There are no fonts from Google Fonts currently in use.
// require(["webfont"], function(WebFont){
// 	WebFont.load({
// 		google: {
// 			families: ["Rambla", "Bangers"]
// 		}
// 	});
// });

// Load Google Analytics
require(["js/anal"], function(anal){
	anal.pageview();
});

// Load DejaVu Sans Mono (lower priority)
setTimeout(function(){
	require.css("fonts/dejavusansmono_book/stylesheet.css");
}, 250);

// Load Social Bloatware (lowest priority)
setTimeout(function(){
	require(["uservoice"]);
}, 500);

