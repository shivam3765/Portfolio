async function callapi() {
    let result = await fetch("./myprojectdata.json");
    result = await result.json();

    document.getElementById("main_container").innerHTML = result.map((user) =>

        `<div class="project">
            <img src="${user.image}">
            <div class="hidden_containt">
               <p class="text">${user.text}</p>
                    <a href="${user.link}" target="_blank">
                        <button class="btn">visit</button>  
                    </a> 
            </div>
            
        </div>`
    ).join("")
}

callapi();