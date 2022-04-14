const elForm = document.querySelector(".form");
const elSelect = document.querySelector(".form-select");
const elList = document.querySelector(".list");

function rendergeners(rend , elem){
  const newArr = ["All" , ];
  
  rend.forEach(film =>{
    film.genres.forEach(elem =>{
      if(!newArr.includes(elem)){
        newArr.push(elem)
      }
    })
  });
  
  newArr.forEach(sel =>{
    const elOption = document.createElement("option");
    elOption.value = sel;
    elOption.textContent = sel;
    elem.appendChild(elOption);
  })
}

function renderGanres(arr , elem) {
  elem.innerHTML = "";

  arr.forEach( film => {
    const elItem = document.createElement("li");
    const elImg = document.createElement("img");
    const elLink = document.createElement("a");
    const elTitle = document.createElement("h4");
    const elText = document.createElement("p");
    const elSubList = document.createElement("ul");
    const elBookmark = document.createElement("button");
    const elDeleteBtn = document.createElement("button");
    
    for (const genre of film.genres) {
      const elSubItem = document.createElement("li");
      elSubItem.textContent =genre;
      elSubList.appendChild(elSubItem)
    };
    
    elItem.setAttribute("class" , "w-25 bg-success border rounded-3 m-3 p-3");
    elImg.setAttribute("src" , film.poster);
    elImg.setAttribute("width" , "250");
    elImg.setAttribute("class" , "p-1 img");
    elLink.setAttribute("class" , "text-black text-decoration-none")
    elLink.setAttribute("href" , "https://www.google.com/search?q= " + film.title +"+movie&rlz=1C1BNSD_enUZ980UZ980&oq=" + film.title +"movie&aqs=chrome..69i57j46i10j0i10j46i10j0i10l5.5869j0j1&sourceid=chrome&ie=UTF-8");
    elLink.setAttribute("target" , "_blank");
    elTitle.classList.add("h4");
    elTitle.textContent = film.title;
    elText.textContent = film.overview.split(" ").slice(1,15).join(" ") + "...";
    elText.classList.add("text");
    elSubList.classList.add("mb-5");
    elBookmark.textContent = "Bookmark";
    elDeleteBtn.textContent = "Delete";
    elBookmark.setAttribute("class" , "btn btn-primary me-3");
    elDeleteBtn.setAttribute("class" , "btn btn-danger");
    
    elItem.appendChild(elImg);
    elItem.appendChild(elLink);
    elLink.appendChild(elTitle);
    elItem.appendChild(elText);
    elItem.appendChild(elSubList);
    elItem.appendChild(elBookmark);
    elItem.appendChild(elDeleteBtn);
    elem.appendChild(elItem);
  });
}

elForm.addEventListener("change" , ()=>{
  const selValue = elSelect.value;
  let filterFilms = selValue == "All" ? films : films.filter(elem => elem.genres.includes(selValue));
  renderGanres(filterFilms , elList);
});

renderGanres(films , elList);
rendergeners(films , elSelect);