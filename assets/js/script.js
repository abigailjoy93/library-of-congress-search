
let inputElSearch = document.querySelector('.searchInput');
let inputElFormat = document.querySelector('.formatInput');
let buttonEl = document.querySelector('.submitInput');
let sectionEl = document.querySelector('.sectionEl');

buttonEl.addEventListener("click", function () {
  let requestUrl = 'https://www.loc.gov/search/?q=' + inputElSearch.value + '&fo=json';

  fetch(requestUrl)
    .then(function (response) {
      console.log(response.json());
      // return response.json();
    })
    .then(function (data) {
      console.log('Fetch Response \n-------------');
      console.log(data);

      let divEl = document.createElement('div');

      let pEl1 = document.createElement('p');
      divEl.appendChild(pEl1).textContent = "this is thing 1";
      let pEl2 = document.createElement('p');
      divEl.appendChild(pEl2).textContent = "this is thing 2";
      let pEl3 = document.createElement('p');
      divEl.appendChild(pEl3).textContent = "this is thing 3";

      sectionEl.appendChild(divEl);


    });



});



  // Browser Fetch Method
  // TODO: Comment on how Fetch returns an API call
  // This returns an array

  // TODO: Comment on the differences on the format of the data that was returned
