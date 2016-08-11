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
function Resource(name, Url, difficulty) {
	this.name = name;
	this.Url = Url;
	this.level = difficulty;
}

// full list of resources
var resources = [ new Resource('Codeacademy', 'https://www.codecademy.com/', 3),
new Resource('Coursera', 'https://www.coursera.com', 4), 
new Resource('Khanacademy', 'https://khanacademy.com', 2)];

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

(function getInterest() {
	function sortArt() {
		interestList.push('Art');
		//console.log('hello');
	}
	function sortSports() {
		interestList.push('Sports');
		//console.log(interestList);
	}
	function sortTravel() {
		interestList.push('Travel');
		//console.log(interestList);
	}

	//interestList.push('Travel');

	 document.getElementById('chooseArt').addEventListener("click", sortArt);
	document.getElementById('chooseSports').addEventListener("click", sortSports);
	 document.getElementById('chooseTravel').addEventListener("click", sortTravel);

	//array of user interests
	return interestList;
})();

// sorts user interest
function sortInterest (categories) {
	for (var j = 0; j < categories.length; j++) {
		for (var i = 0; i < companies.length; i++) {
			if (categories[j] == companies[i].category) {
				companyList.push(companies[i]);
			}
		}
	}
	return companyList;
}

(function showInterest() {
	
	 function sortInterests() {
	 	document.getElementById("grandResults").innerHTML = companyList[0].name;
	}
	// 	for (var i = 0; i < companyList.length; i++) {
	// 		document.getElementById("grandResults").innerHTML += companyList[i].name + ": " + companyList[i].Url + " <br />";
	// 	}
	// }

	 document.getElementById("finalPrompt").addEventListener("click", sortInterests);
})();

// function takes in user selections
// pushes to arrays of links
function sortLevel (level) {
	for (var i = 0; i < resources.length; i++) {
		if (level == 'middleSchool' && resources[i].level == 2) {
			result.push(resources[i]);
		}
		if (level == 'highSchool' && resources[i].level == 3) {
			result.push(resources[i]);
		}
		if (level == 'college' && resources[i].level == 4) {
			result.push(resources[i]);
		}
	}
	return result;
}

(function getLevel() {
	function sortMS() {
		return sortLevel('middleSchool');
	}
	function sortHS() {
		return sortLevel('highSchool');
	}
	function sortCollege() {
		return sortLevel('college');
	}
	document.getElementById("chooseMS").addEventListener("click", sortMS);
	document.getElementById("chooseHS").addEventListener("click", sortHS);
	document.getElementById("chooseCollege").addEventListener("click", sortCollege);

})();

(function showResults() {
	function sortResults() {
		for (var i = 0; i < result.length; i++) {
			document.getElementById("grandResults").innerHTML += result[i].name + ": " + result[i].Url + " <br />";
		}
	}

	document.getElementById("finalPrompt").addEventListener("click", sortResults);
})();

// function testfn() {
// 	return interestList.push('Travel');
// }

// document.getElementById("chooseTravel").addEventListener("click", testfn);

// function resourceList(age, subject, goal, style){

// }