function responseCallback(res) {
  console.log("response:${res}");
}
console.log("POP UP HELLO");
document.addEventListener("DOMContentLoaded", function (dcle) {
  id = "emjafccejmcocnnanicjfipccihahhfn";

  btn = document.getElementById("btn");
  note = document.getElementById("note");
  console.log(note.value);
  let tabId = null;
 ;

  // Open up connection

  btn.addEventListener("click", function () {

    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, function (t) {
      tabId = t[0].id;
    });

    console.log("clicked", note.value);
    setTimeout(async()=>console.log(
      await window.navigator.clipboard.readText()), 3000)
   

      let tab = null;

      chrome.tabs.query(
        { active: true, lastFocusedWindow: true },
        function (t) {
          tab = t[0];
        }
      );


      setTimeout(() => {
        
      chrome.tabs.sendMessage(tab.id, { greeting: note.value }, function (res) {
        console.log(res);
      });
    }, 50);

   
  });
});
