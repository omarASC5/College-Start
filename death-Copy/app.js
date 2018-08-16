//JOBS 




var request = require('request');  

var host = 'data.usajobs.gov';  
var userAgent = 'ocobas19@avenues.org';  
var authKey = 'IAwyp+bM0KcEU60pNZNMouMXNVdvvnMRcp6xWOs1gw4=';    

request({      
    url: 'https://data.usajobs.gov/api/Search?Student=True&Page=1&ResultsPerPage=50',      
    method: 'GET',      
    headers: {          
        "Host": host,          
        "User-Agent": userAgent,          
        "Authorization-Key": authKey      
    }  
}, function(error, response, body) {      
     var data = JSON.parse(body); 
     var userData = data.SearchResult.SearchResultItems;

      //PositionTitle
     //PositionURI
     //OrganizationName
     //QualificationSummary
     //JobCategory


     for (let i = 0; i < userData.length; i++) {
      const userDiv = document.createElement('div');
      const position_title_paragraph = document.createElement('p');
      const position_title_url_link = document.createElement('a');
      const organization_name_paragraph = document.createElement('p');
      const qualification_summary_paragraph = document.createElement('p');
      const job_category_paragraph = document.createElement('p');

      const mainDiv = document.querySelector('.content-container');


      document.body.appendChild(userDiv);
      mainDiv.appendChild(userDiv);
      userDiv.appendChild(position_title_paragraph);
      userDiv.appendChild(organization_name_paragraph);
      userDiv.appendChild(qualification_summary_paragraph);
      userDiv.appendChild(job_category_paragraph);
      userDiv.appendChild(position_title_url_link);
      
      
      position_title_paragraph.classList.add("position-title-style");
      position_title_url_link.classList.add("position-title-url-style");
      organization_name_paragraph.classList.add("name-style");
      qualification_summary_paragraph.classList.add("qualification-style");
      job_category_paragraph.classList.add("job-category-style");
      


      //Add Classes to each Div
      userDiv.classList.add("jobs-row");


  const position_title = document.getElementsByClassName('position-title-style');
  const position_title_url = document.getElementsByClassName('position-title-url-style');
  const organization_name = document.getElementsByClassName('name-style');
  const qualification_summary = document.getElementsByClassName("qualification-style");
  const job_category = document.getElementsByClassName("job-category-style");

  position_title[i].innerHTML = 'Position Title: ' + userData[i].MatchedObjectDescriptor.PositionTitle;
  // college_name[i].innerHTML = 'School Name: ' + userData[i].name;
  job_category[i].innerHTML = 'Job Category: ' + userData[i].MatchedObjectDescriptor.JobCategory[0].Name;
  qualification_summary[i].innerHTML = 'Qualifications: ' + userData[i].MatchedObjectDescriptor.QualificationSummary;
  organization_name[i].innerHTML = 'Organization Name: ' + userData[i].MatchedObjectDescriptor.OrganizationName;
  position_title_url[i].innerHTML = 'Click Here to Apply!';
  position_title_url[i].href =  userData[i].MatchedObjectDescriptor.PositionURI;

  }     
    
    });
    

    