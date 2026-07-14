fetch("data/profile.json")
.then(res => res.json())
.then(data => {

    let hobbies = "";

    data.hobbies.forEach(item => {

        hobbies += `
            <div class="hobby">
                ${item}
            </div>
        `;

    });

    let strengths = "";

    data.strengths.forEach(item => {

        strengths += `
            <div class="strength">
                ${item}
            </div>
        `;

    });

    let portfoliogoalHTML = "";

    data.portfoliogoal.forEach(item => {
        portfoliogoalHTML += `<p>${item}</p>`;
    });

    document.getElementById("profile").innerHTML = `

        <div class="profile">

            <div class="profile-image">

                <img src="images/avatar.jpg" alt="Avatar">

            </div>

            <div class="profile-content">

                <h3>Xin chào!</h3>

                <p>
                    Mình là <strong>${data.name}</strong>.
                </p>
                <p>
                    MSV: 25042203
                </p>


                <ul class="info-list">

                    <li>
                        <i class="fa-solid fa-user-graduate"></i>
                        ${data.major}
                    </li>

                    <li>
                        <i class="fa-solid fa-building-columns"></i>
                        ${data.faculty}
                    </li>   

                    <li>
                        <i class="fa-solid fa-school"></i>
                        ${data.school}
                    </li>

                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        ${data.email}
                    </li>

                </ul>

                <p>
                    Mình là một người luôn mong muốn khám phá và ứng dụng các công nghệ mới vào trong quá trình học tập cũng như phát triển bản thân. Trang web này là nơi mình ghi lại hành trình học hỏi và hoàn thiện các kỹ năng số của mình trong môn học Nhập môn Công nghệ số và Trí tuệ nhân tạo.
                </p>

                <p>
                    <strong>Mục tiêu:</strong><br>
                    ${data.goal}
                </p>

                <p>
                    <strong>Định hướng phát triển:</strong><br>
                    ${data.career}
                </p>

               <div class="portfoliogoal">
                    <p><strong>Mục tiêu của Portfolio</strong><br></p>

                    ${portfoliogoalHTML}
                </div>

                <div class="strengths">

                    <p><strong>Điểm mạnh</strong><br></p>

                    <div class="strength-list">

                        ${strengths}

                    </div>

                </div>                

                <div class="hobbies">

                    <p><strong>Sở thích</strong><br></p>

                    <div class="hobby-list">

                        ${hobbies}

                    </div>

                </div>

            </div>

        </div>

    `;

});