
function responseCallback(res) {
    console.log("response:${res}");
}
console.log('POP UP HELLO');
 document.addEventListener('DOMContentLoaded',function(dcle){
    id ='emjafccejmcocnnanicjfipccihahhfn'

    btn = document.getElementById('btn')
    note = document.getElementById('note')
    console.log(note.value);
    btn.addEventListener("click",function(){
        console.log('clicked',note.value);
        chrome.runtime.sendMessage(id,note.value,responseCallback)

    })
 })