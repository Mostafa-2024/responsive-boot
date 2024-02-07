let lastSeen = document.querySelector(".last-seen");

let pup = document.querySelector(".pup");

let close = document.querySelector(".close");

let lastSeenDate = new Date();

let timeSpan = document.querySelector(".time");

let boxParent = document.querySelector(".app-content");

let box = document.querySelector(".app-content .box");

let input = document.querySelector("#input");

let button = document.querySelector("#button");

let img = document.querySelector("#image");

let audio = new Audio("../assets/sentmessage.mp3");

img.addEventListener("click", () => {

  pup.style.display = "flex"; 

  close.onclick = () => {

    pup.style.display = "none";
    
  }
})

timeSpan.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

lastSeen.innerHTML = "typing...";

setTimeout(() => {
  if(lastSeenDate.getHours() >= 12 ) {

    lastSeen.innerHTML = "last seen today at " + lastSeenDate.getHours() + ":" + lastSeenDate.getMinutes() + " PM";
  
  } else {
  
    lastSeen.innerHTML = lastSeenDate.getHours() + ":" + lastSeenDate.getMinutes() + " AM";
  
  };
},1000);

setTimeout(() => {

    box.style.height = "auto";
  
  }
, 1000)

button.addEventListener("click", () => {

  if(input.value == "") {

  }else {
    addChild();
    replay();
  }
});

input.addEventListener("keypress", (e) => {

  if(e.key == "Enter") {

    if(input.value == "") {

    }else {

      addChild();

      replay();

    }
  }
});

let addChild = () => {

  audio.play();

  let newDiv = document.createElement("div");

  newDiv.classList.add("chat");

  let newText = document.createTextNode(input.value);
  
  newDiv.appendChild(newText);

  let time1 = document.createElement("span");

  time1.classList.add("time");

  time1.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

  newDiv.appendChild(time1);
  
  boxParent.appendChild(newDiv);
  
  input.value = "";
}

function skills() {

  setTimeout(

    () => {

      audio.play();

      let skills = document.createElement("div");

      skills.classList.add("box");

      skills.style.height = "auto";

      boxParent.appendChild(skills);

      skills.innerHTML = `
        I can comfortably write code in following languages : <br>
        Technical Skills: <br>
        <span class="mt-2">HTML</span> <br>
        <span>CSS</span> <br>
        <span>JavaScript</span> <br>
        <span>Frameworks :</span> <br>
        <span>Bootstrap</span> <br>
        <span>ReactJS</span> <br>
        <span>Version Control :</span> <br>
        <span>Git and GitHub</span> <br>
      `;
      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      skills.appendChild(time2);
    }
    , 1000);

}

function education() {

  setTimeout(

    () => {

      audio.play();

      let education = document.createElement("div");

      education.classList.add("box");

      education.style.height = "auto";

      boxParent.appendChild(education);

      education.innerHTML = `
        
        I have a degree in <span class="mt-2 fs-6">Chemistry Education from Al-Azhar University,</span><br>
        Skillfully integrating computational expertise into chemical data analysis.<br>
        Eagerly seeking opportunities at the crossroads of chemistry and computer<br>
        science to advance technology for a deeper understanding of chemical data.
      `;

      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      education.appendChild(time2);
      
    }
    , 1000);

}

function address() {

  setTimeout(

    () => {

      audio.play();

      let address = document.createElement("div");

      address.classList.add("box");

      address.style.height = "auto";

      boxParent.appendChild(address);

      address.innerHTML = `
        
        <span class="text-white">Egypt</span><br>
        <span class="text-white">Cairo</span><br>
        <span class="text-white">Nasr City</span><br>
      `;
      
      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      address.appendChild(time2);
      
    }
    , 1000);

}

function contact() {

  setTimeout(

    () => {

      audio.play();

      let contact = document.createElement("div");

      contact.classList.add("box");

      contact.classList.add("contact");

      contact.style.height = "auto";

      boxParent.appendChild(contact);

      contact.innerHTML = `
        
        <div><i class="fa-solid fa-phone" style="transform: rotate(20deg)"></i><span>+2001028808258</span></div>
        <div><a href="mailto:elmomtaz44@gmail.com"><i class="far fa-envelope"></i></a></div>
        <div><a href="https://github.com/Mostafa-2024"><i class="fa-brands fa-github"></i></div>
        <div><i class="fa-brands fa-whatsapp"></i><span>01123125084</span></div>

      `;
      
      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      contact.appendChild(time2);

    }
    , 1000);

}
function projects() {

  setTimeout(

    () => {
      
    audio.play();

      let projects = document.createElement("div");

      projects.classList.add("box");

      projects.classList.add("projects");

      projects.style.height = "auto";

      boxParent.appendChild(projects);

      projects.innerHTML = `
      You want to check my projects? Then just jump into my Github Account.
      <div><a href="https://github.com/Mostafa-2024"><i class="fa-brands fa-github"></i></a></div>
      `;
      
      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      projects.appendChild(time2);

    }
    , 1000);

}


function about() {

  setTimeout(

    () => {

      audio.play();

      let about = document.createElement("div");

      about.classList.add("box");

      about.classList.add("about");

      about.style.height = "auto";

      boxParent.appendChild(about);

      about.innerHTML = `

        This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!
        Designed and Developed by <span>Mostafa Kamal</span> with ❤️

      `;
      
      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      about.appendChild(time2);

    }
    , 1000);
  }
function clear() {

  audio.play();

  setTimeout(

    () => {

      window.location.reload();

    }
    , 1000);

}

function replay(){

  if(boxParent.lastChild.innerHTML.startsWith("help")) {

    setTimeout(() => {

      audio.play();

      let trueValue = document.createElement("div");
  
      trueValue.classList.add("box");

      trueValue.style.height = "auto";

      trueValue.innerHTML = `
        Send Keyword to get what you want to know about me...<br>
        e.g <br>
        '<span class="skills mt-2">skills</span>' - to know my skills <br>
        '<span class="education">education</span>' - to get my education details <br>
        '<span class="address">address</span>' - to get my address <br>
        '<span class="contact">contact</span>' - to get ways to connect with me <br>
        '<span class="projects">projects</span>' - to get details of my projects <br>
        '<span class="about">about</span>' - to know about this site <br>
        '<span class="clear">clear</span>' - to clear conversation <br>
      `

      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      trueValue.appendChild(time2);

      boxParent.appendChild(trueValue);
    
      }, 1000)
      
  }else if(boxParent.lastChild.innerHTML.startsWith("skills")) {

      skills();

  }else if(boxParent.lastChild.innerHTML.startsWith("education")) {

    education();

  }else if(boxParent.lastChild.innerHTML.startsWith("address")) {

    address();

  }else if(boxParent.lastChild.innerHTML.startsWith("contact")) {

    contact();

  }else if(boxParent.lastChild.innerHTML.startsWith("projects")) {

    projects();

  }else if(boxParent.lastChild.innerHTML.startsWith("clear")) {

    clear();

  }else if(boxParent.lastChild.innerHTML.startsWith("about")) {

    about();

  }else {
    
    setTimeout(() => {

    let falseValue = document.createElement("div");
  
    falseValue.classList.add("box");

    falseValue.style.height = "auto";

    falseValue.innerHTML = `Please write correct value... <br> Send '<span>help</span>' to know more about usage.`

      let time2 = document.createElement("span");

      time2.classList.add("time");

      time2.innerHTML = lastSeenDate.getHours() +" : "+ lastSeenDate.getMinutes();

      falseValue.appendChild(time2);

    boxParent.appendChild(falseValue);

    }, 1000)

  }
}