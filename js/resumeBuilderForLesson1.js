


var bio = {
	"name" : "Mario",
	"role" : "ninja",
	"contact_info" : {
		"email" : "123fakeemail@fake.com",
		"phone" : "713-555-1111"
	},
	"picture_url" : "images/my_picture.jpg",
	"welcome_msg" : "Hi! Welcome to my resume website!",
	"skills" : ["Programming", "Soccer"]
	
};

work = {
	"employment" : [
		{
			"employer" : "Myself",
			"startDate" : "2010",
			"position" : "unemployed",
		}
	
	]
}
education = {
	"schools" : [
		{
		"name" : "Krusty's Clown College",
		"startDate" : "2010",
		"degree" : "Clown Science"
		}
	]
}

projects = {
	"projects":[
		{
			"resume" : "Make a resume using JavaScript"
		}
	]
}

//work["startDate"] = "2010";
//work["position"] = "Unemployed";
//work["employer"] = "Myself";
//education.name = "Krusty's Clown College";
//education.startDate = "2010";
//education.degree = "Clown Science";

var headerName = HTMLheaderName.replace("%data%", bio.name);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);

// var contactGeneric = 
var mobile = HTMLmobile.replace("%data%", bio.contact_info.phone);
var email = HTMLemail.replace("%data%", bio.contact_info.email);
// var twitter = 
// var github = HTMLgithub.replace("%data%", bio.github);
// var blog = 
// var location = 

var bioPic = HTMLbioPic.replace("%data%", bio.picture_url);
var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_msg);

// var skillsStart = 
var skills = HTMLskills.replace("%data%", bio.skills);

var workStart = HTMLworkStart.replace("%data%", work["employment"][0]["startDate"]);
var workEmployer = HTMLworkEmployer.replace("%data%", work["employment"][0]["employer"]);
var workTitle = HTMLworkTitle.replace("%data%", work["employment"][0]["position"]);
// var workDates = 
// var workLocation = 
// var workDescription = 

// var HTMLprojectStart = 
// var HTMLprojectTitle = 
// var HTMLprojectDates =
// var HTMLprojectDescription = 
// var HTMLprojectImage = 

var schoolStart = HTMLschoolStart.replace("%data%", education["schools"][0]["startDate"]);
var schoolName = HTMLschoolName.replace("%data%", education["schools"][0]["name"]);
var schoolDegree = HTMLschoolDegree.replace("%data%", education["schools"][0]["degree"]);
// var HTMLschoolDates = 
// var HTMLschoolLocation = 
// var HTMLschoolMajor = 

// var HTMLonlineClasses = 
// var HTMLonlineTitle = 
// var HTMLonlineSchool = 
// var HTMLonlineDates = 
// var HTMLonlineURL = 

// var internationalizeButton =
// var googleMap = 

$("#header").prepend(headerRole);
$("#header").prepend(headerName);
$("#topContacts").append(email);
$("#topContacts").append(mobile);

$("#header").prepend(bioPic);

$("#workExperience").append(workStart);
$("#workExperience").append(workEmployer);
$("#workExperience").append(workTitle);
$("#education").append(schoolStart);
$("#education").append(schoolName);
$("#education").append(schoolDegree);