const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2"

function printContent(projects) {
    console.log(projects);
    const sortedProjects = projects.sort(function (a, b) {
      if (a.uuid < b.uuid) {
        return -1;
      }
      if (a.uuid > b.uuid) {
        return 1;
      }
      return 0;
    });
    console.log("sortedProjects: ", sortedProjects);
    const firstThreeProjects = sortedProjects.slice(0, 3);
    console.log("firstThreeProjects: ", firstThreeProjects);

    const divDeProyectos = document.getElementById("Recent-Projects-class");
    /*
    divDeProyectos.innerHTML = "Prueba";

    const div = `
    <div class="text-center underline">
        <div>
            Hola
        </div>
    </div>`
    divDeProyectos.innerHTML += div;
    */

    firstThreeProjects.forEach(function (project) {
        const div = `
            <div class="simplify-dashcoin-vectorify">
                <img
                  class="x3-image"
                  src="${project.image}" 
                  alt="${project.name}"
                />
                <div class="div-3x">
                  <h3>"${project.name}"</h3>
                  <p>"${project.description}"</p>
                  <a class="button-learn-more" href="./project-pagina2.html"
                  >Learn more</a
                >
                </div>
            </div>`;
        divDeProyectos.innerHTML += div;
    });
}



async function fetchProjects() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("data: ", data);
    console.log("data: ", data[1].name);
    printContent(data);
}

window.addEventListener("load", function () {
    fetchProjects();
  });