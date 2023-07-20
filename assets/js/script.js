
let inputElSearch = document.querySelector('.searchInput');
let inputElFormat = document.querySelector('.formatInput');
let buttonEl = document.querySelector('.submitInput');
let sectionEl = document.querySelector('.sectionEl');
let tbodyEl = document.querySelector('#table_body');
buttonEl.addEventListener("click", function () {
  let requestUrl = 'https://www.loc.gov/search/?q=' + inputElSearch.value + '&fo=json';

  fetch(requestUrl)
    .then(function (response) {
      // console.log(response.json());
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Response \n-------------');
      console.log(data);

      for (let i = 0; i < data.results.length; i++) {

        
        let trEl = document.createElement('tr');
        let tdEl0 = document.createElement('td')
        trEl.appendChild(tdEl0).textContent = i + 1;
        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1).textContent = "Title: " + data.results[i].title;
        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2).textContent = "Date: " + data.results[i].date;
        let tdEl3 = document.createElement('td');
        trEl.appendChild(tdEl3).textContent = "Subject: " + data.results[i].subject;
        tbodyEl.appendChild(trEl);

        // tbodyEl.append("<tr>" +
        // "<td>" + (i+1) + "</td>" +
        // "<td>" + data.results[i].title + "</td>" +
        // "<td>" + data.results[i].date + "</td>" +
        // "<td>" + data.results[i].subject + "</td>" +
        // "<td><a href=" + data.results[i].id + ">Read more</a></td>" +
        //  + "</tr>");
      }

    });



});



  // Browser Fetch Method
  // TODO: Comment on how Fetch returns an API call
  // This returns an array

  // TODO: Comment on the differences on the format of the data that was returned
