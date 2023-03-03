const ul = document.querySelector("ul");
ul.style.display='flex'
ul.style.flexWrap='wrap'

const fetchApi = async () => {
    const callData = await fetch('https://rickandmortyapi.com/api/character');
    const mydata = await callData.json();

    let li = "";
    mydata.results.map(item=>{
        li+= `<li style="margin:10px">
            <img src="${item.image}"/>
            <p>${item.name}</p>
        </li>`
    })
    ul.innerHTML = li
};
fetchApi()


