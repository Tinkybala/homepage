import './style.css';
import Instagram from './instagram.svg';
import Profile from './pp.jpg';
import TTT from './tic-tac-toe.jpg';
import Todo from './to-do.jpg';
import Spotify from './spotify.jpg';
import Homepage from './landing.jpg';
import Phone from './phone-classic.svg';
import Email from './email-outline.svg';
import Ophir from './ophir.jpeg';

//social media buttons
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

//insert icons and images
const instagramButton = document.querySelector(".instagram");
const instagramIcon = new Image();
instagramIcon.src = Instagram;
instagramButton.appendChild(instagramIcon);

const profile = document.querySelector(".header-content");
const pp = new Image();
pp.src = Profile;
pp.alt = "Hazel Chin Profile";
pp.className = "profile";
profile.prepend(pp);

const ttt = document.querySelector(".ttt");
const tttImg = new Image();
tttImg.src = TTT;
tttImg.alt = "tic-tac-toe website";
ttt.prepend(tttImg);

const todo = document.querySelector('.todo');
const todoImg = new Image();
todoImg.src = Todo;
todoImg.alt = "todo website";
todo.prepend(todoImg);

const spotify = document.querySelector('.spotify');
const spotifyImg = new Image();
spotifyImg.src = Spotify;
spotifyImg.alt = 'spotify data science project';
spotify.prepend(spotifyImg);

const homepage = document.querySelector('.homepage');
const homepageImg = new Image();
homepageImg.src = Homepage;
homepageImg.alt = "my first landing page website";
homepage.prepend(homepageImg);

const phone = document.querySelector('.mobile');
const phoneImg = new Image();
phoneImg.src = Phone;
phoneImg.alt = "phone icon";
phone.prepend(phoneImg);

const email = document.querySelector('.email');
const emailImg = new Image();
emailImg.src = Email;
emailImg.alt = 'mail icon';
email.prepend(emailImg);

const footer = document.querySelector('footer');
const footerImg = new Image();
footerImg.src = Ophir;
footerImg.alt = 'Hazel at Mount Ophir';
footer.appendChild(footerImg);