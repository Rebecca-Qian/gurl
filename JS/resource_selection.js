// Simulates resource mapping
// Every resource is stored as an object with attributes ranking its difficulty
// sort through resources based on age
// push object to array if difficulty matches

// array of filtered resources
var result = [];

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

// function resourceList(age, subject, goal, style){

// }