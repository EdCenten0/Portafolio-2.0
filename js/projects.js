//Elementos HTML
const main__section__projects__containers = document.querySelector('.main__section__projects__containers')
// Vars

let project_list = [];

project_list.push({
    url:'#',
    img_url:'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg' ,
    alt_img:'gato',
    title: 'Project 1',
    description: 'Sisisiisis'
})

project_list.push({
    url:'#',
    img_url:'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg' ,
    alt_img:'gato',
    title: 'Project 1',
    description: 'Sisisiisis'
})

project_list.push({
    url:'#',
    img_url:'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg' ,
    alt_img:'gato',
    title: 'Project 1',
    description: 'Sisisiisis'
})

project_list.push({
    url:'#',
    img_url:'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg' ,
    alt_img:'gato',
    title: 'Project 1',
    description: 'Sisisiisis'
})


function render_projects(arr_project){
    for(project of arr_project){
        //Getting items
        
        const wrapper_a = document.createElement('a');
        const main__section__projects__containers__project = document.createElement('div');
        const main__section__projects__containers__project__img = document.createElement('div');
        const project_img = document.createElement('img');
        const main__section__projects__containers__project__synopsis = document.createElement('div');
        const project_title_p = document.createElement('p');
        const project_description_p = document.createElement('p');

        //Setting classes
        
        main__section__projects__containers__project.classList.add('main__section__projects__containers__project');
        main__section__projects__containers__project__img.classList.add('main__section__projects__containers__project__img');
        main__section__projects__containers__project__synopsis.classList.add('main__section__projects__containers__project__synopsis');

        //Setting atrubutes
        wrapper_a.setAttribute('href', project.url);
        project_img.setAttribute('src', project.img_url);
        project_img.setAttribute('alt', project.alt_img);
        project_title_p.innerText = project.title;
        project_description_p.innerText = project.description;




        main__section__projects__containers__project__synopsis.append(project_title_p, project_description_p);
        main__section__projects__containers__project__img.append(project_img);
        main__section__projects__containers__project.append(main__section__projects__containers__project__img, main__section__projects__containers__project__synopsis);
        wrapper_a.append(main__section__projects__containers__project);
        main__section__projects__containers.append(wrapper_a);


    };
}

render_projects(project_list);