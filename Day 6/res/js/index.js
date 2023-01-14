
const cities = [];
fetch('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/dbae5d894564490a239fff7435841dc120f6ce9e/cities.json')
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(word, cities){
    return cities.filter(place =>{
        const regex = new RegExp(word, 'gi');
        return place.name.match(regex) || place.state.match(regex);
    });
}

function displayMatches(){
    if(this.value == ''){
        suggestions.innerHTML = `
        <ul class="suggestions">
            <li>Filter for a city</li>
            <li>or a State</li>
        </ul>`;
        return;
    }
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const city = place.name.replace(regex, '<span class="hl">' + this.value + '</span>');
        const state = place.state.replace(regex, '<span class="hl">' + this.value + '</span>');
        return '<li><span class="name">' + city + ', ' + state + '</span></li>';
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('change', displayMatches);