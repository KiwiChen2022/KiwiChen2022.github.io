/* populate the index page */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
/*
var members = [];

var getdata; 
function getJson() {
    $.ajax({
    type: "GET",
    url: "../json/character.json",
    'async':false,
    dataType: "json",
    success: (res) => {
    getdata = res
    }
    })
    }
getJson()
console.log(getdata);

var members;
fetch('../json/character.json')
    .then((response) => response.json())
    .then((json) => members = json);
*/ 
/* Declaring the array of each character */
const imgArr = ["1","2","3","4","5","6","7","8","9","10",];
const names= ["Yukihiko Iwakura","Takashi Sugiyama","Haiji Kiyose","Akane Kashiwazaki","Kakeru Kurahara","Tarō Jō","Jirō Jō","Musa Kamala","Yōhei Sakaguchi","Akihiro Hirata"];
const member_description = ["Known as 'Yuki' by the other members of Chikusei-so, he passed the bar examination on his first try. Yuki was initially reluctant to run and was bent on defying Haiji's enthusiasm, but eventually got drawn into it as the others members did. He hates the smell of tobacco coming from Akihiro's smoking until he quit for running.",
"Known as 'Shindo' to the other members of the dorm. Generally considered an honor student by the other residents of Chikusei-so, Takashi is an earnest student from the mountain regions. He was the first convinced by Haiji to give running a chance and has been a significant driving force behind the others. His dedication towards training originally stemmed from wanting to inspire and impress his family, but eventually became something entirely his own.",
"Haiji is a 4th year Kansei University Student and a long time resident of Chikusei-so. He has dreams of running in the Hakone Ekiden with a team and slowly built up one of at-first unwilling acquaintances at the dorm. Despite recovering from a knee injury, Haiji remains one of the most enthusiastic residents and coach of the group.",
"Nicknamed 'Prince' by the other dorm members, Akane is a manga enthusiast with his room filled to the brim with various volumes. He began as one of the most reluctant and slowest members due to his lack of physical stamina and indoor tendencies. Akane picked up his training after Takashi had his family send over a treadmill for him to remain indoors to read manga. After finding true inspiration from his friends at Chikusei-so and Kakeru's presence, he pushes himself beyond his limitations.",
"Kakeru is a 1st year sociology student at Kansei University Student and an experienced runner. A prodigious athlete since high school, he became disillusioned due to an incident on his old Track and Field team. He first joined Chikusei-so after Haiji meets him stealing from a convenience store. Over the course of the story, Kakeru learns the meaning of running together with others.",
"The older of the Jō twins. He goes by Jota and is nearly indistinguishable from his younger brother. The two think and act in tandem. Though he was originally driven by the intention to attract girls through running, Jota came to appreciate the sport.",
"The younger of the Jō twins. He goes by Joji and appears almost the exact same as his elder brother. Originally intending to run for the sake of becoming popular with girls, he realize that running was something enjoyable in itself.",
"Musa is a native to Tanzania. He moved to Japan to study Space and Engineering as a sponsored international student at Kansei University. His Japanese still has flaws leading to some misunderstandings and written mistakes. Kind and earnest, Musa is always supportive of his other team members and is well known by the residents of the local shopping district.",
"Known as 'King' due to his love of trivia, Yohei is a 4th year Sociology student at Kansei University. Besides his nightly trivia marathons, he's generally preoccupied by job hunting to no avail. Yohei eventually relented and joined in the team's efforts due to the earnest words of Takashi.",
"Known as 'Nico-senpai' due to his habit of smoking. Prior to entering Kansei University, he ran Track during high school but quit due to his coach. As Akihiro picked up running again under Haiji's influence, he stopped smoking and began to make small metallic figures as a substitute."]

/* populate the content of each character in the index page */
for (var i=0;i<imgArr.length;i++){
    let character = document.createElement("div");
    character.setAttribute('class','characters')
    const ele = document.createElement("img") //'<img src="images/' + imgArr[i]+'.jpg">';  //<img src="dinosaur.jpg">
    if(i<5){
        ele.setAttribute('src', "images/"+imgArr[i]+".jpeg");
    }
    else{
        ele.setAttribute('src',"images/"+imgArr[i]+".png");
    }
    
    ele.setAttribute('alt', "unsuccessful load");
    character.appendChild(ele);
    const name = document.createElement("h5");
    name.textContent = names[i];
    character.appendChild(name);
    const description = document.createElement("p");
    description.textContent = member_description[i];
    character.appendChild(description);
    thumbBar.appendChild(character);
}

/*
for (var i=0;i<members.length;i++){
    let character = document.createElement("div");
    const ele = document.createElement("img")
    if(i<5){
        ele.setAttribute('src', "images/"+members[i].photo+".jpeg");
    }
    else{
        ele.setAttribute('src',"images/"+members[i].photo+".png");
    }
    
    ele.setAttribute('alt', "unsuccessful load");
    character.appendChild(ele);
    const name = document.createElement("h5");
    name.textContent = members[i].name;
    character.appendChild(name);
    thumbBar.appendChild(character);
}
*/

/* Message Board */

    const messageList = document.querySelector(".messages")
    const btn = document.querySelector(".userMsg button");
    const msg = document.querySelector(".userMsg textarea[name='user_message']");
    function addMsg(){
        const msgValue = msg.value;
        if(!msgValue){
            return;
        }
        msg.value = '';
        const msgToAdd = document.createElement("li");
        const spanToAdd = document.createElement("span");
        const btnToAdd = document.createElement("button");
        msgToAdd.appendChild(spanToAdd);
        msgToAdd.appendChild(btnToAdd);
        spanToAdd.textContent = msgValue;
        btnToAdd.textContent = "Delete";
        messageList.appendChild(msgToAdd);
        btnToAdd.addEventListener("click",() => {messageList.removeChild(msgToAdd)});
        msg.focus(); 
    }
    btn.addEventListener("click",addMsg);

