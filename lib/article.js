var request = require('request');
var cheerio = require('cheerio');
var chalk = require('chalk');

const URL = "https://news.ycombinator.com/news";

var getPageURL = function (pageNumber) {
	pageNumber = pageNumber || 1;
	var url = URL + '?p=' + pageNumber;
	return url;
}; 

var showPage =  function (pageNumber){
	var pageUrl = getPageURL(pageNumber);
	fetchPage(pageUrl, showPosts);
};

var fetchPage = function (url, cb) {
	request(url, function (error, response, body){
		if (!error && response.statusCode == 200) {
			cb(body);
		}
	});
};

var showPosts = function (body) {
	var $ = cheerio.load(body);
	var counter = 1;
	$(".storylink").each(function (index, element){
		console.log(counter+"."  + element.children[0].data);
		console.log(chalk.underline.bgBlue(element.attribs.href));
		counter++;
	})
}

module.exports = {
	showPage: showPage
};