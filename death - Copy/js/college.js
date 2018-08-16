
//https://github.com/Hipo/university-domains-list
// userData[0].country;
// userData[0].name;
// userData[0].web_pages[0];

    for (let i = 0; i < 50; i++) {
        const userDiv = document.createElement('div');
        const country_paragraph = document.createElement('p');
        const name_paragraph = document.createElement('p');
        const web_pages_link = document.createElement('a');

        const mainDiv = document.querySelector('.content-container');



        document.body.appendChild(userDiv);
        mainDiv.appendChild(userDiv);
        userDiv.appendChild(country_paragraph);
        userDiv.appendChild(name_paragraph);
        userDiv.appendChild(web_pages_link);
        
        
        country_paragraph.classList.add("country-style");
        name_paragraph.classList.add("name-style");
        web_pages_link.classList.add("web_pages-link-style");
        


        //Add Classes to each Div
        userDiv.classList.add("college-row");
  

    const college_country = document.getElementsByClassName('country-style');
    const college_name = document.getElementsByClassName('name-style');
    const college_web_pages_link = document.getElementsByClassName('web_pages-link-style');


    college_country[i].innerHTML = 'Country: ' + userData[i].country;
    college_name[i].innerHTML = 'School Name: ' + userData[i].name;
    college_web_pages_link[i].innerHTML = 'Click Here to Learn More about this School!';
     college_web_pages_link[i].href = userData[i].web_pages[0];

    }
    


