import './style.css';

const newTab = function(e){
    console.log(e.target.className);
    switch(e.target.className){
        case "github":
        case "devicon-github-original colored":
            window.open("https://github.com/Tinkybala", "_blank");
            console.log('click');
            break;
        
        case "linkedin":
        case "devicon-linkedin-plain colored":
            window.open("https://sg.linkedin.com/", "_blank");
            break;

        case "instagram":
            window.open("https://www.instagram.com/", "_blank");
    }
    
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", newTab);