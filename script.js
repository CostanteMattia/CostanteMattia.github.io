let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent= letter;
        span.className= "letter";
        word.append(span);
    });
})
let currentWordIndex=0;
let maxWordIndex= words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex == maxWordIndex ? words[0] : words[currentWordIndex + 1];
   
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className= "letter out";
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className= "letter behind";
        setTimeout(()=>{
            letter.className= "letter in";
        }, 340+i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000);



var mixer = mixitup('.portfolio-gallery');
//Attivazione menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len =section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

//navbar
const header= document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})


let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.replace("open");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


function inviaModulo() {

    var nomeInput = document.getElementsByName("nome")[0];
    var emailInput = document.getElementsByName("email")[0];
    var indirizzoInput = document.getElementsByName("indirizzo")[0];
    var cellulareInput = document.getElementsByName("cellulare")[0];
    var messaggioInput = document.getElementsByName("messaggio")[0];

    if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || messaggioInput.value.trim() === '') {
        
        alert("Si prega di compilare tutti i campi.");
        
        return false;
    }

   
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.web3forms.com/submit", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          
            nomeInput.value = '';
            emailInput.value = '';
            indirizzoInput.value = '';
            cellulareInput.value = '';
            messaggioInput.value = '';

          
            alert("Messaggio inviato con successo!");
        }
    };
    var formData = {
        access_key: "1434e30e-e66b-4f2a-9da9-621409506276",
        nome: nomeInput.value,
        email: emailInput.value,
        indirizzo: indirizzoInput.value,
        cellulare: cellulareInput.value,
        messaggio: messaggioInput.value
    };
    xhr.send(JSON.stringify(formData));

    return false;
}