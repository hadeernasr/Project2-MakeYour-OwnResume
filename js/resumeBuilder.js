


// -----> inName Function
function inName(name){
	name=name.split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}

//---------------- Bio Object ------------------
var bio = { 
	"name"        : "Hadeer Nasr",
	"role"        : "Web Developer",
	"contacts"    : { 
					"mobile"  :"+1 469-618-2332",
					"email"   :"hadeer.nasr87@gmail.com",
					"twitter" :"@hadeernasr",
					"github"  :"hadeernasr",
					"location":"Santa Clara",
					},

	"skills"      : ["awesomeness","Programming", "Teaching", "JavaScript"],
	"image"       : "images/fry.jpg",
	"wlecomeMsg"  : "Hello World !"
};

bio.display = function (){
    //----------------Display Name and Role 	
	var formattedName = HTMLheaderName.replace("%data%",(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	//---------------- Display Contacts 
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	
	//------------- Diplay Image & WelcomeMessage 
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	$("#header").append(formattedImage);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.wlecomeMsg);
	$("#header").append(formattedWelcomeMsg);

	//-------------- Display Skills 
	if(bio.skills.length>0){

		$("#header").append(HTMLskillsStart);

		var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}
bio.display();


//---------------- Work Object -------------

var work = {
	"jobs":[
		{
			"title"    : "Software Engineer",
			"employer"  : "Valeo",
			"location"  : "Egypt",
			"dates"     : "Februery 2012",
			"desciption": "Validation Software Testing using the Testbench for car security key " 
		},
		{
			"title"    : "Course Teacher",
			"employer"  : "Cairo University",
			"location"  : "Egypt",
			"dates"     : "January 2011",
			"desciption": "Matlab Intoduction and Programming language Teaching" 

		}
	
	]
};

//------------------ Display Work --------------------- 
//----> FOR statement Example

work.display = function (){
 	for( job in work.jobs){

 		$("#workExperience").append(HTMLworkStart);

 		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 		var formattedtitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

 		var formattedEmployerTitle = formattedEmployer + formattedtitle;
 		$(".work-entry:last").append(formattedEmployerTitle);

 		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 		$(".work-entry:last").append(formattedDates);

 		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].worklocation);
 		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].desciption);
 		$(".work-entry:last").append(formattedDescription);
	}
}
work.display(); // Display Work Function


//-------------------- Projects Object ---------------

var projects = {
	"project" : [
		{ 
			"projectTitle" : "Mug Portfolio Website",
			"dates"        : 2015,
			"desciption"   : "Bulding my own web site using Html and CSS languages",
			"projectImages": ["images/plotimage.png","images/plotimage.png"],
		},
		{
			"projectTitle" : "Interactive Resume",
			"dates"        : 2015,
			"desciption"   : "Bulding my own resume using Java script language",
			"projectImages": ["images/plotimage.png"],

		}
	]
};

//------------------ Display Projects -----------------
//--> FOR statement Example

projects.display=function(){

	$("#projects").append(HTMLprojectStart);

	for(pn in projects.project){

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[pn].projectTitle);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[pn].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDesciption = HTMLprojectDescription.replace("%data%",projects.project[pn].desciption);
		$(".project-entry:last").append(formattedDesciption);

		if(projects.project[pn].projectImages.length>0){
			for(img in projects.project[pn].projectImages){
				var formattedImages = HTMLprojectImage.replace("%data%",projects.project[pn].projectImages[img]);
				$(".project-entry:last").append(formattedImages);	
			}
		}	
	}
}

projects.display();


//------------------- Education Object ------------------

var education = {
	"schools" :[
		{ 
		    "name"    : "Faculty of Enginnering, Cairo University",
		    "location": "Dallas, TX",
		    "degree"  : "Bacholer",
		    "major"   : ["EE"],
		    "dates"   : 2008,
		    "url"     : "http://example.com"

		},{
			"name"    : "Nano-Degree Front-End Web Development, Udacity",
			"location": "Santa Clara, CA",
			"degree"  : "Nano-Degree",
			"major"   : ["CS"],
			"dates"   : 2015,
			"url"     : "http://example.com"
		}
	] ,
	"onlineCourses" : [
		{
		  "title" : "HTML and CSS ",
		  "school": "Udacity",
		  "dates" : "2015",
		  "url"   : "https://www.udacity.com/course/nd001"
		},
		{
		  "title" : "Java Script Syntax",
		  "school": "Udacity",
		  "dates" : "2015",
		  "url"   : "https://www.udacity.com/course/nd001"
		}
	]

};
	
//-------------------- Education Display ---------------

education.display = function(){

	for(sch in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[sch].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[sch].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[sch].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[sch].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[sch].major);
		$(".education-entry:last").append(formattedMajor);

	}	

	$("#education").append(HTMLonlineClasses);

	for(course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedUrl);
	}

}
education.display();

//---------------------- Map Diplay --------------------
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);



