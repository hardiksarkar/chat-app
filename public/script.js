var socket = io();
let username="";
const usernameInput = document.getElementById("username");
const usernameForm = document.querySelector(".form-user");
const formContainer = document.getElementById("form-container");
const chatroomContainer = document.querySelector(".chatroom-container");
const sentBtn = document.getElementById("send-btn");
const myMessage = document.getElementById("message-input");
const messageContainer = document.querySelector(".messages");

const joinBtn = document.getElementById("join-chat");
joinBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = usernameInput.value;
    // console.log(username);
    if(username){
        formContainer.style.display = "none";
        chatroomContainer.style.display = "block"
    }else{
        usernameInput.style.backgroundColor="rgb(255, 211, 211)";
    }
})


function sentbtnFunc(event){
    event.preventDefault();
    let data = {
        id : socket.id,
        message : myMessage.value,
        username:username
    };
    socket.emit("secret message",data);
    appendMessage(data,'sent');  
}

sentBtn.addEventListener('click',(event)=>{
   sentbtnFunc(event);
});
myMessage.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        sentbtnFunc(event);
    }
});

function appendMessage(data,type){
    if(!data.message){
        return;
    }
    const msgDiv = document.createElement('div');
    if(type==='sent'){
        msgDiv.innerHTML = `${data.message}`;
        msgDiv.setAttribute('class','message sent');
        myMessage.value='';
    }else{
        msgDiv.innerHTML = `<span class="received-msg-username">~ ${data.username}</span> ${data.message}`;
        msgDiv.setAttribute('class','message')
    }
    messageContainer.appendChild(msgDiv);
    
}

socket.on('secret message',(data)=>{
    if(data.id!==socket.id){
        appendMessage(data,'received');
    }
})