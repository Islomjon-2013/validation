
document.querySelector(`#text`).addEventListener(`focusout`,myText);
document.querySelector(`#password`).addEventListener(`focusout`,myPass);



document.querySelector(`#btn`).addEventListener(`click`,function(){
    myText()
    myPass()
})
function myText(){
    let message,text;
    let errEliment = document.getElementById(`text`)
    message = document.getElementById('error')
    text = document.getElementById('text').value;
    console.log(text);


try{
if(text == ""){
    errEliment.classList.add('error');
    throw'bo\'sh'
}if(text.length > 0){
    errEliment.classList.remove('error');
    errEliment.classList.add(`valid`)
    message.innerHTML= ""
}
}catch(e){
    message.innerHTML = `qiymat`+ e;
}

}

function myPass(){
    let message,pass;
    let errEliment = document.getElementById(`password`)
    message = document.getElementById('error2')
    pass = document.getElementById('password').value;
    console.log(pass);


try{
if(pass== ""){
    errEliment.classList.add('error2');
    throw'bo\'sh'
}if(pass.length > 0){
    errEliment.classList.remove('error2');
    errEliment.classList.add(`valid`)
    message.innerHTML= ""
}
}catch(e){
    message.innerHTML = `qiymat`+ e;
}

}
