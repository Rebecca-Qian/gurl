// Converts to single web app

// change to interest prompt
(function() {
	var prompt1 = document.getElementById("prompt");
	var MS = document.getElementById("middleSchool");
	var HS = document.getElementById("highSchool");
	var college = document.getElementById("college");

	var changePrompt = function() {
		prompt1.innerHTML = "I like...";
	}

	MS.addEventListener("click", changePrompt);
	HS.addEventListener("click", changePrompt);
	college.addEventListener("click", changePrompt);
})();

// change selections
(function () {
	var subjectChoice = document.getElementById("eduLevel");
	var MS = document.getElementById("middleSchool");
	var HS = document.getElementById("highSchool");
	var college = document.getElementById("college");

	var changeContent = function() {
		subjectChoice.innerHTML = "<div class='col-md-4 text-center'>Art</div>" +
		"<div id='math' class='col-md-4 text-center'>Math</div>" +
        "<div class='col-md-4 text-center'>Science</div>" +
        "<div class='col-md-4 text-center'>Sports</div>" +
        "<div class='col-md-4 text-center'>Games</div>" +
        "<div class='col-md-4 text-center'>Fashion</div>" +

        "<div class='col-md-4 text-center'>Music</div>" +
        "<div class='col-md-4 text-center'>Food</div>" +
        "<div class='col-md-4 text-center'>Travel</div>"

	}

	MS.addEventListener("click", changeContent);
	HS.addEventListener("click", changeContent);
	college.addEventListener("click", changeContent);
})();

// change to learning form prompt
function learningForm() {
	var prompt2 = document.getElementById("prompt");
	var mathSubject = document.getElementById("math");

	var changeQS = function() {
		prompt2.innerHTML = "I like to learn...";
	}

	mathSubject.addEventListener("click", changeQS);
};

learningForm();
