let getdetailsArr = JSON.parse(localStorage.getItem("Person_Data"));

  getdetailsArr.forEach((el) => {

    let container = document.getElementById("main");
    let Btn = document.getElementById("btn");
    let name = document.querySelector("#heading");
    name.innerText = el.name;
    let Person_Info = document.createElement("div");
    Person_Info.innerHTML = `<h2>${"Personal Info"}</h2>
                <h4>${"Birth Year : "} ${el.birth_year}</h4>
                <h4>${"Gender : "}${el.gender}</h4>
                <h4>${"Height : "}${el.height}</h4>`;
    let anatomy = document.createElement("div");
    anatomy.innerHTML = `<h2>${"Anatomy"}</h2>
                <h4>${"Eye Color : "} ${el.eye_color}</h4>
                <h4>${"Mass : "}${el.mass}</h4>
                <h4>${"Hair Color : "}${el.hair_color}</h4>`;
    let btn = document.createElement("button");
    btn.innerHTML = `<a href="index.html">Go Back</a>`;
    container.append(Person_Info, anatomy);
    Btn.append(btn)
  });