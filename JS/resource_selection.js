// Simulates resource mapping
// Every resource is stored as an object with attributes ranking its difficulty
// sort through resources based on age
// push object to array if difficulty matches

// array of filtered resources
var result = [];
var companyList = [];
var interestList = [];
var categories = [];

// Resource object constructor
function Resource(name, Url, difficulty, learningStyle) {
	this.name = name;
	this.Url = Url;
	this.level = difficulty;
	this.learningStyle = learningStyle;
}

// full list of resources
var resources = [ new Resource('Codeacademy', 'https://www.codecademy.com/', 3, ['Reading']),
new Resource('Coursera', 'https://www.coursera.com', 4, ['Video', 'Friends']),
new Resource('VideoResource', 'https://www.coursera.com', 3, ['Video', 'Friends']),
new Resource('RandomResource', 'https://www.video.com', 3, ['Video', 'Friends']), 
new Resource('Khanacademy', 'https://khanacademy.com', 2, ['Video', 'Games'])];

// Company object constructor
function Company(name, Url, category, summary) {
	this.name = name;
	this.Url = Url;
	this.category = category;
	this.summary = summary;
}

// full list of companies
var companies = [new Company('Fitbit', 'www.fitbit.com', 'Sports', 'makes tracking devices that record your heartrate, steps taken etc.'),
new Company('Airbnb', 'www.airbnb.com', 'Travel', 'lets people host guests in their houses and apartments'),
new Company('Rent the Runway', 'www.renttherunway.com', 'Fashion', 'lets users rent designer dresses for a fraction of the cost'),
new Company('Spotify', 'www.spotify.com', 'Music', 'hosts a large music library and charges users a small fee every month'),
new Company('Doordash', 'www.doordash.com', 'Food', 'delivers food to consumers from a wide range of restaurants'),
new Company('Pinterest', 'www.pinterest.com', 'Art', 'shows pins ranging from fashion trends to photography')];

function checkEqual (category, array) {
	for (var k = 0; k < array.length; k++) {
		if (category == array[k]) {
			return false;
		}
	}
	return true;
}

(function getInterest() {
	function sortArt() {
		if (checkEqual('Art', interestList)) {
			interestList.push('Art');
		}
	}
	function sortSports() {
		if (checkEqual('Sports', interestList)) {
			interestList.push('Sports');
		}
	}
	function sortTravel() {
		if (checkEqual('Travel', interestList)) {
			interestList.push('Travel');
		}
	}
	function sortScience() {
		if (checkEqual('Science', interestList)) {
			interestList.push('Science');
		}
	}
	function sortMusic() {
		if (checkEqual('Music', interestList)) {
			interestList.push('Music');
		}
	}
	function sortMath() {
		if (checkEqual('Math', interestList)) {
			interestList.push('Math');
		}
	}
	function sortGames() {
		if (checkEqual('Games', interestList)) {
			interestList.push('Games');
		}
	}
	function sortFashion() {
		if (checkEqual('Fashion', interestList)) {
			interestList.push('Fashion');
		}
	}
	function sortFood() {
		if (checkEqual('Food', interestList)) {
			interestList.push('Food');
		}
	}

	document.getElementById('chooseArt').addEventListener("click", sortArt);
	document.getElementById('chooseSports').addEventListener("click", sortSports);
	document.getElementById('chooseTravel').addEventListener("click", sortTravel);
	document.getElementById('chooseScience').addEventListener("click", sortScience);
	document.getElementById('chooseMusic').addEventListener("click", sortMusic);
	document.getElementById('chooseMath').addEventListener("click", sortMath);
	document.getElementById('chooseGames').addEventListener("click", sortGames);
	document.getElementById('chooseFashion').addEventListener("click", sortFashion);
	document.getElementById('chooseFood').addEventListener("click", sortFood);

	//array of user interests
	return interestList;
})();

// sorts user interest
// categories input is array of user selected interests eg. Art, Science etc.
// iterates through list of companies, pushing to companyList array if there's a match
// for companies with multiple categories, checks that company isn't already in companyList array
function sortInterest (categories) {
	for (var j = 0; j < categories.length; j++) {
		for (var i = 0; i < companies.length; i++) {
			if (categories[j] == companies[i].category) {
				companyList.push(companies[i]);
			}
		}
	}
	return companyList;
};

(function showInterest() {
	  function sortInterests() {

	  	(function() {
	  		return sortInterest(interestList);
	  	})();

	  	for (var i = 0; i < companyList.length; i++) {
	 	
	 	document.getElementById("grandResults2").innerHTML += companyList[i].name + ": " + companyList[i].summary + "<br />";
	 }
	}
document.getElementById("finalPrompt").addEventListener("click", sortInterests);
}
)();

// function takes in user selections
// pushes to arrays of links
function sortLevel (level) {
	result = [];
	for (var i = 0; i < resources.length; i++) {
		if (level == 'middleSchool' && resources[i].level == 2) {
			//result = [];
			result.push(resources[i]);
		}
		if (level == 'highSchool' && resources[i].level == 3) {
			result.push(resources[i]);
		}
		if (level == 'college' && resources[i].level == 4) {
			//result = [];
			result.push(resources[i]);
		}
	}
	return result;
}

(function getLevel() {
	result = [];
	function sortMS() {
		return sortLevel('middleSchool');
	}
	function sortHS() {
		//result = [];
		return sortLevel('highSchool');
	}
	function sortCollege() {
		//result = [];
		return sortLevel('college');
	}
	document.getElementById("chooseMS").addEventListener("click", sortMS);
	document.getElementById("chooseHS").addEventListener("click", sortHS);
	document.getElementById("chooseCollege").addEventListener("click", sortCollege);

	//result = [];

})();

(function showResults() {
	function sortResults() {
		document.getElementById("grandResults1").innerHTML = "";
		for (var i = 0; i < result.length; i++) {
			document.getElementById("grandResults1").innerHTML += result[i].name + ": " + result[i].Url + " <br />";
		}
	}

	document.getElementById("finalPrompt").addEventListener("click", sortResults);
	result = [];
})();

// (function getLearningStyle() {
// 	function sortVideo() {
// 		for (var i = 0; i < result.length; i++) {
// 			for (var j = 0; j < result[i].learningStyle.length; j++) {
// 				if (result[i].learningStyle[j] != 'Video') {
// 					result[i] = '';
// 				}
// 			}
// 		}
// 		return result;
// 	}
// 	function sortReading() {
// 		return;
// 	}
// 	function sortFriends() {
// 		return;
// 	}
// 	function sortGames() {
// 		return;
// 	}
// 	document.getElementById("chooseVideo").addEventListener("click", sortVideo);
// 	document.getElementById("chooseReading").addEventListener("click", sortReading);
// 	document.getElementById("chooseFriends").addEventListener("click", sortFriends);
// 	document.getElementById("chooseGames").addEventListener("click", sortGames);
// })

// function testfn() {
// 	return interestList.push('Travel');
// }

// document.getElementById("chooseTravel").addEventListener("click", testfn);

// function resourceList(age, subject, goal, style){

// }