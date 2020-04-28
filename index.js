const dropList = document.getElementById('drop-list');

window.addEventListener('DOMContentLoaded', function() {
  $.get('https://dog.ceo/api/breeds/list')
    .then(function(data) {
      const breeds = data.message;
      breeds.forEach(function(breed) {
        const option = document.createElement('option');

        option.setAttribute('value', breed);
        option.textContent = breed;
        dropList.appendChild(option);
      })
      // forEach loops over each individual item in an array and assign them

      // for(breed in breeds){
      // }

      // for(let i: i < breeds.length; i++) {
      // }

    });

    dropList.addEventListener('change', function(e) {
      const breed = e.target.value;
      $.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(function(data) {
        const img = document.createElement('img');
        console.log('data =', data)
        img.setAttribute('src', data.message)
        const images = document.getElementById('images')
        images.innerHTML = ''; //add this line so images are replaced for every change
        images.appendChild(img)
      });
    });
});