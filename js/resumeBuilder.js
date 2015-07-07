var locationObj = {
	"houston_TX": {
		"name": "Houston, TX",
		"description": "An ever-expanding city built on forested land, swamp, and prairie, the fourth most populous city in the US is a sprawl of different communities joined by mighty highways. We have food, we have music, we have shopping. It's an exciting time to be in Houston."
		},
	"springfield_MO": {
		"name": "Springfield, MO",
		"description": "Springfield is a fictional town from The Simpsons. In the The Simpsons' wikipedia page, Springfield is said to be located somewhere in the midwest."
		},
	"newOrleans_LA": {
		"name": "New Orleans, LA",
		"description": "Jazz and gambling."
	}
};

var bio = {
	"name": "Mario Lopez",
	"role": "Ninja",
	"contacts": {
		"email": "123fakeemail@fake.com",
		"mobile": "713-555-1111",
		"location": locationObj.houston_TX,
		"github": "m1221",
		"twitter": "n/a"
	},
	"pictureURL": "images/my_picture.jpg",
	"welcomeMessage": "Hi! Welcome to my resume website!",
	"skills": ["Programming", "Soccer"]
};

var work = {
	"employment": [
		{
			"employer": "Myself",
			"startDate": "2010",
			"position": "unemployed",
			"dates": "2010-2011",
			"location": locationObj.newOrleans_LA,
			"description": "Played lots of video games."
		},
		{
			"employer": "Meeself",
			"startDate": "2010",
			"position": "unemployed",
			"dates": "2011-2012",
			"location": locationObj.houston_TX,
			"description": "Played more video games."
		},
		{
			"employer": "Meeeeeeself",
			"startDate": "2010",
			"position": "unemployed",
			"dates": "2013-2015",
			"location": locationObj.houston_TX,
			"description": "Played even more video games."
		}
	
	]
};

var education = {
	"schools": [
		{
		"name": "Krusty's Clown College",
		"endDate": 2010,
		"degree": "B.S.",
		"majors": ["Clownology"],
		"location": locationObj.springfield_MO,
		"url": "https://www.youtube.com/watch?v=kXvVNs4Q2sM"
		}
		],
	"onlineCourses": [
		{
		"title": "Front-End Web Development",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
		"title": "Full Stack Web Development",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		}
	]
};

var projects = {
  "projectList":[
  {
	"title" : "L4D2",
	"dates" : "2010-Present",
	"description" : "You and your friends try to escape the zombie apocalypse.",
	"images": ["http://vignette3.wikia.nocookie.net/left4dead/images/d/d2/No_Mercy.jpg/revision/latest/scale-to-width-down/1000?cb=20081114202254"]
  },
  {
	  "title" : "Dota2",
	  "dates" : "2011-2014",
	  "description" : "The ancient and the radiant fight off in a never ending war. Be a hero and decide the outcome of a battle.",
	  "images": ["http://hydra-media.cursecdn.com/dota2.gamepedia.com/a/ac/Witch_Doctor.png"]
  }
  ]
};

bio.display = function(){
  if(bio.name.length > 0){
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	var headerRole = HTMLheaderRole.replace("%data%", bio.role);
	var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var myLocation = HTMLlocation.replace("%data%", bio.contacts.location.name);
	
	$("#header").prepend(headerRole);
	$("#header").prepend(headerName);
	$("#header").append(bioPic);
	$("#header").append(welcomeMessage);
	var contacts = ["#topContacts", "#footerContacts"];
	var contactPoints = [myLocation, mobile, email, github, twitter];
	for(i in contacts){
		for(j in contactPoints){
			$(contacts[i]).append(contactPoints[j]);
		}
	}
  }
  if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);	
	var formattedSkill = "";
	for(i in bio.skills){
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skillsH3").append(formattedSkill);
	}
  }
}

work.display = function(){
  if(work.employment.length > 0){
	var formattedEmployer = "";
	var formattedTitle = "";
	var formattedDates = "";
	var formattedLocation = "";
	var formattedDescription = "";
	
	for(i in work.employment){
		$("#workExperience").append(HTMLworkStart);
		
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.employment[i]["employer"]);
		formattedTitle = HTMLworkTitle.replace("%data%", work.employment[i]["position"]);
		formattedDates = HTMLworkDates.replace("%data%", work.employment[i]["dates"]);
		formattedLocation = HTMLworkLocation.replace("%data%", work.employment[i]["location"]["name"]);
		formattedDescription = HTMLworkDescription.replace("%data%", work.employment[i]["description"]);
		
		
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
  }
}

projects.display = function(){
	var projectTitle = "";
	var projectDates = "";
	var projectDescription = "";
	var images = "";
	
	for(i in projects.projectList){
		$("#projects").append(HTMLprojectStart);
		
		projectTitle = HTMLprojectTitle.replace("%data%", projects.projectList[i].title);
		projectDates = HTMLprojectDates.replace("%data%", projects.projectList[i].dates);
		projectDescription = HTMLprojectDescription.replace("%data%", projects.projectList[i].description);
		
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescription);
		
		for(b in projects.projectList[i].images){
			image = HTMLprojectImage.replace("%data%", projects.projectList[i].images[b]);
			
			$(".project-entry:last").append(image);
		}
		// there must be no space in between "entry", ":", "last"
	}
}

education.display = function(){
	function displaySchools(){
		var schoolName = "";
		var schoolDegree = "";
		var schoolDates = "";
		var schoolLocation = "";
		var schoolMajor = "";
		var schoolURL = "";
	
		for(i in education.schools){
			$("#education").append(HTMLschoolStart);
		
			schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].endDate.toString());
			schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location.name);
			schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", "));
			schoolName = schoolName.replace("#", education.schools[i].url);
		
			$(".education-entry:last").append(schoolName + schoolDegree);
			$(".education-entry:last").append(schoolDates);
			$(".education-entry:last").append(schoolLocation);
			$(".education-entry:last").append(schoolMajor);
		}
	}
	
	function displayOnlineSchools(){
		$("#education").append(HTMLonlineClasses);
		
		var title = "";
		var school = "";
		var date = "";
		var url = "";
		
		for(i in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			
			title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			date = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date.toString());
			titleURL = title.replace("#", education.onlineCourses[i].url);
			
			$(".education-entry:last").append(titleURL + school);
			$(".education-entry:last").append(date);
		}
	}
	
	displaySchools();
	displayOnlineSchools();
}

function inName(){
	return bio.name.split(" ")[0] + " " + bio.name.split(" ")[1].toUpperCase();
}


//load the website
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
