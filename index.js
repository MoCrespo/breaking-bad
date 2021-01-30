const api = "https://www.breakingbadapi.com/api/characters"; 
async function get(e) {
    try{
        const response = await fetch(api);
        const data = await response.json();
        display(data)
        e.preventDefault();
    }catch(e){
        console.log("Error:" , e.message);
    }
   
}
function display(data) {
    const header = document.querySelector('.header');
  
    

    header.innerHTML += `
    <select class='form-control' onchange="set(this.value)">
        <option>Please select<option> 
        ${data.map(charName => `<option>${charName.name}</option>`)}
    </select>
    `
}


async function set(e) {
    if(e !== 'Please Select'){

        const response = await fetch(`${api}?name=${e}`)
        const data = await response.json()
        const content = document.querySelector('#content');
    
       content.innerHTML = `
       <h2 class="mt-5">${data[0].name} (${data[0].nickname})</h2>
       <h4>actor: ${data[0].portrayed} <h4>
       <h5 class="birthday">${data[0].birthday}</h5>
       <img class="img-thumbnail rounded" src="${data[0].img}" style="max-width:200px;" />
        `
        
    }

}
get()
