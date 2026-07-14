fetch("data/summary.json")

.then(res=>res.json())

.then(data=>{

document.getElementById("summary-content").innerHTML=`

<div class="timeline">

<div class="timeline-item">

<div class="timeline-content">

<h3>Trải nghiệm</h3>

<p>

${data.experience.map(item=>`<li>${item}</li>`).join("")}

</p>

</div>

</div>

<div class="timeline-item">

<div class="timeline-content">

<h3>Kiến thức và kỹ năng đạt được</h3>

<ul>

${data.knowledge.map(item=>`<li>${item}</li>`).join("")}

</ul>

</div>

</div>

<div class="timeline-item">

<div class="timeline-content">


<h3>Điều tâm đắc và những thách thức</h3>

<p>

${data.challenge.map(item=>`<li>${item}</li>`).join("")}

</p>

</div>

</div>

<div class="timeline-item">

<div class="timeline-content">

<h3>Kết luận</h3>

<p>

${data.conclude.map(item=>`<li>${item}</li>`).join("")}

</p>

</div>

</div>

</div>

`;

});