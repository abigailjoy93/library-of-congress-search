
let inputElSearch = document.querySelector('.searchInput')
let inputElFormat = document.querySelector('.formatInput')
let buttonEl = document.querySelector('.submitInput')

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
    });

});

  // Browser Fetch Method
  // TODO: Comment on how Fetch returns an API call
  // This returns an array

  // TODO: Comment on the differences on the format of the data that was returned
