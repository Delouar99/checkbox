
const skills = document.querySelectorAll('.skill');
const all_skills  = document.querySelector('.all_skills');

skills.forEach(skill =>{

    skill.addEventListener('change', function () {
        let all_data = document.querySelectorAll('.skill:checked');
        
        let skills_arr = [];
        all_data.forEach( data =>{
            skills_arr.push(data.value);
        });

        let list = ' ';
        skills_arr.map(data => {
            list +=`
            <li class="list-group-item">${data}</li>
            `;
        });
        all_skills.innerHTML = list;

    });

 

   

});