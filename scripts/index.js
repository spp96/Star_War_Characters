let getdetailsArr = JSON.parse(localStorage.getItem("detail")) || [];
let id;
let getdata = async () => {
  let query = document.getElementById("query").value;
  let url = `https://swapi.dev/api/people/?search=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  return data.results;
};

let append = (data) => {
  let container = document.getElementById("myData");
  container.innerHTML = null;

  data.forEach((el) => {
    let person = document.createElement("div");
    person.addEventListener("click", function () {
      myfun(el);
    });
    person.innerHTML = `<div class = "ndetails"><p class = "nam">${el.name} </p> <br/> <p class = "byr">${el.birth_year}</p ></div> <p class = "gender"> ${el.gender}`;
    person.setAttribute("class", "para");
    container.append(person);
  });
};

async function main() {
  let data = await getdata();
  append(data);
}

function debouncing(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

function myfun(el) {
  getdetailsArr.push(el);
  localStorage.setItem("Person_Data", JSON.stringify(getdetailsArr));
  window.location.href = "details.html";
}