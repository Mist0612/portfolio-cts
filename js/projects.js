const list = document.getElementById("project-list");

fetch("data/projects.json")
.then(res=>res.json())
.then(data=>{

    data.forEach(project=>{

        list.innerHTML += `

        <div class="project-card">

            <img src="${project.image}">

            <div class="project-content">

                <h3>${project.subject}</h3>

                <h4>${project.title}</h4>

                <p>${project.description}</p>
                <h3>Mục tiêu bài tập</h3>

                <ul>
                
                ${project.objective.map(item => `
                <li>${item}</li>
                `).join("")}
                
                </ul>
                
                <h3>Tóm tắt quá trình thực hiện</h3>
                
                <ol>
                
                ${project.process.map(item => `
                <li>${item}</li>
                `).join("")}
                
                </ol>
                <button class="project-btn"
                    onclick="showProject(${project.id})">

                    Xem chi tiết

                </button>

            </div>

        </div>

        `;

    });

    window.projects=data;

});

function showProject(id){

    const project=window.projects.find(p=>p.id===id);

    document.getElementById("modal-body").innerHTML=`

        <h2>${project.title}</h2>

        <br>

        <img src="${project.image}" style="width:100%;border-radius:10px;">

        <br><br>

        <p>${project.description}</p>

        <br>

        <a class="project-btn"
           href="${project.pdf}"
           target="_blank">

           Xem PDF

        </a>

    `;

    document.getElementById("modal").style.display="flex";

}

document.getElementById("close-modal").onclick=()=>{

    document.getElementById("modal").style.display="none";

}

window.onclick=(e)=>{

    if(e.target.id==="modal"){

        document.getElementById("modal").style.display="none";

    }

}
