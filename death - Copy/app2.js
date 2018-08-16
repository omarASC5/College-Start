//SCHOLARSHIPS


//RUN NPM WATCH TO AUTOMATICALLY UPDATE WITH BROWSERIFY
//RUN NPM RUN BUILD TO NORMALLY (MANUALLY) UPDATE
//SYNTAX FOR INSTALLING DEPENDENCY: $ npm i request-promise --save

const rp = require('request-promise');

function scrapeContent(openingTag, closingTag, inputData) {
 let scrapedElements = [];
 const startIndexLen = openingTag.length;
 const startIndex = inputData.indexOf(openingTag) + startIndexLen;
 let totalElements = inputData.lastIndexOf(openingTag);

 const startIndex2 = inputData.indexOf(openingTag, startIndex);
 totalElements = totalElements / (startIndex2 - startIndex);

 for (let i = 0; i < totalElements; i++) {
   const distanceBetween = ((startIndex2 - startIndex) * i) + startIndex;
   const newStartIndex = inputData.indexOf(openingTag, distanceBetween);
   const newEndIndex = inputData.indexOf(closingTag, distanceBetween);
   const newElement = inputData.slice(newStartIndex + startIndexLen, newEndIndex);
   scrapedElements.push(newElement);
 }
 return scrapedElements;
}

  let optionsArr = [];
  let urlArr = [];

 for (let b = 0; b < 1; b++) {
   urlArr.push(`https://www.collegescholarships.org/financial-aid/?page=${b}`)
   let options2 = {
     url: urlArr[b],
     json: true,
    };
    
    optionsArr.push(options2);
    
    rp(optionsArr[b])
    .then((data) => {
      let userData = data;
      let elements = scrapeContent('<span class="lead"><strong>', '</strong></span>', userData);
      let names = scrapeContent('<h4 class="text-uppercase"><a', '</a></h4>', userData);
      let descriptions = scrapeContent('<div class="scholarship-description">', '<ul class="fa-ul">', userData);
      let locations = scrapeContent('<span class="trim" data-length="120">', '</span>', userData);

      for (let i = 0; i < locations.length; i++) {
        console.log(locations[i].trim());

      }

      let cutIndexDesc1 = descriptions[1].indexOf('<p>');
      let cutIndexDesc2 = descriptions[4].indexOf('<p>');
      let cutIndexDesc3 = descriptions[5].indexOf('<p>');
      let cutIndex1 = names[1].indexOf('>');
      let cutIndex2 = names[2].indexOf('>');
      let cutIndex3 = names[3].indexOf('>');


      const element1 = elements[1]
      const price1 = document.querySelector('.price1')
      const priceText1 = document.createTextNode(element1)
      price1.appendChild(priceText1)

      const element2 = elements[2]
      const price2 = document.querySelector('.price2')
      const priceText2 = document.createTextNode(element2)
      price2.appendChild(priceText2)

      const element3 = elements[3]
      const price3 = document.querySelector('.price3')
      const priceText3 = document.createTextNode(element3)
      price3.appendChild(priceText3)


      const names1 = names[1].slice(cutIndex1+1);
      const name1 = document.querySelector('.name1')
      const nameText1 = document.createTextNode(names1)
      name1.appendChild(nameText1)

      const names2 = names[2].slice(cutIndex2+1);
      const name2 = document.querySelector('.name2')
      const nameText2 = document.createTextNode(names2)
      name2.appendChild(nameText2)
      
      const names3 = names[3].slice(cutIndex3+1);
      const name3 = document.querySelector('.name3')
      const nameText3 = document.createTextNode(names3)
      name3.appendChild(nameText3)


      const description1 = descriptions[1].slice(cutIndexDesc1)
      const realDesc1 = description1.slice(3, 125)
      const desc1 = document.querySelector('.desc1')
      const descText1 = document.createTextNode(realDesc1)
      desc1.appendChild(descText1)

      const description2 = descriptions[4].slice(cutIndexDesc2)
      const realDesc2 = description2.slice(3, 219)
      const desc2 = document.querySelector('.desc2')
      const descText2 = document.createTextNode(realDesc2)
      desc2.appendChild(descText2)

      const description3 = descriptions[5].slice(cutIndexDesc3)
      const realDesc3 = description3.slice(3, 122)
      const desc3 = document.querySelector('.desc3')
      const descText3 = document.createTextNode(realDesc3)
      desc3.appendChild(descText3)


      const whos1 = locations[5]
      const who1 = document.querySelector('.who1')
      const whoText1 = document.createTextNode(whos1)
      who1.appendChild(whoText1)
      const res1 = locations[9]
      const resS1 = document.querySelector('.res1')
      const resText1 = document.createTextNode(res1)
      resS1.appendChild(resText1)
      const locations1 = locations[2]
      const location1 = document.querySelector('.location1')
      const locationText1 = document.createTextNode(locations1)
      location1.appendChild(locationText1)

      const whos2 = locations[29]
      const who2 = document.querySelector('.who2')
      const whoText2 = document.createTextNode(whos2)
      who2.appendChild(whoText2)
      const res2 = locations[28]
      const resS2 = document.querySelector('.res2')
      const resText2 = document.createTextNode(res2)
      resS2.appendChild(resText2)
      const locations2 = locations[24]
      const location2 = document.querySelector('.location2')
      const locationText2 = document.createTextNode(locations2)
      location2.appendChild(locationText2)

      const whos3 = locations[29]
      const who3 = document.querySelector('.who3')
      const whoText3 = document.createTextNode(whos3)
      who3.appendChild(whoText3)
      const res3 = locations[36]
      const resS3 = document.querySelector('.res3')
      const resText3 = document.createTextNode(res3)
      resS3.appendChild(resText3)
      const locations3 = locations[32 ]
      const location3 = document.querySelector('.location3')
      const locationText3 = document.createTextNode(locations3)
      location3.appendChild(locationText3)

      console.log(locations)
    })
     .catch((err) => {
       console.log(err);
     });

 }