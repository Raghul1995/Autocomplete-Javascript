const search = document.querySelector('#search');
const match = document.querySelector('#match-list');

//search data.json

const searchData = async (searchText) => {
	const res = await fetch('../components/data/data.json');
	const states = await res.json();
	//console.log(states)

	//Getting match for text input

	let matches = states.filter((state) => {
		const regex = new RegExp(`^${searchText}`, 'gi');
		return state.name.match(regex) || state.abbr.match(regex);
	});

	//condition

	if (searchText.length === 0) {
        matches = [];
        match.innerHTML = []
    }
    console.log(matches);

    outputHtml(matches)

};
// outputting in the HTML

const outputHtml = (matches)=>{
if(matches.length > 0){
    const html = matches.map(match=>
        `<div class="card card-body mb-1">
            <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span> </h4>
        </div> `
    ).join("");
    match.innerHTML= html
}}


//add eventlistner

search.addEventListener('input', () => {
	searchData(search.value);
});
