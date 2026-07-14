const list = document.getElementById("project-list");

fetch("data/projects.json")
.then(res => res.json())
.then(data => {

    window.projects = data;

    data.forEach(project => {

        list.innerHTML += `

        <div class="project-card">

            <img src="${project.image}" alt="${project.title}">

            <div class="project-content">

                <h3>${project.subject}</h3>

                <h4>${project.title}</h4>

                <p>${project.description}</p>

                <button
                    class="project-btn"
                    onclick="showProject(${project.id})">

                    Xem chi tiết

                </button>

            </div>

        </div>

        `;

    });

})
.catch(error => {

    console.log(error);

    list.innerHTML = "<h2>Không thể đọc dữ liệu projects.json</h2>";

});

function showProject(id){

    const project = window.projects.find(item => item.id === id);

    document.getElementById("modal-body").innerHTML = `

        <h2>${project.title}</h2>

        <img src="${project.image}" class="modal-image">

        <p class="modal-description">

            ${project.description}

        </p>

        <hr>

        <h3>1. Mục tiêu bài tập</h3>

        <ul>

            ${(project.objective || []).map(item => `
                <li>${item}</li>
            `).join("")}

        </ul>

        <hr>

        <h3>2. Tóm tắt quá trình thực hiện</h3>

        <ol>

            ${(project.process || []).map(item => `
                <li>${item}</li>
            `).join("")}

        </ol>

        <hr>

        <a
            class="project-btn"
            href="${project.pdf}"
            target="_blank">

            📄 Xem file PDF

        </a>

    `;

    document.getElementById("modal").style.display = "flex";

}

document.getElementById("close-modal").onclick = function(){

    document.getElementById("modal").style.display = "none";

}

window.onclick = function(e){

    if(e.target.id === "modal"){

        document.getElementById("modal").style.display = "none";

    }

}
