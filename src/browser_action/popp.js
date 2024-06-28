
// popup html js file 


function responseCallback(res) {
  console.log("response:${res}");
}



console.log("POP UP HELLO");


document.addEventListener("DOMContentLoaded", function (dcle) {
  id = "emjafccejmcocnnanicjfipccihahhfn";
  // run functions here
   
  syncCounter()
  logData()
  clearData()
  btn = document.getElementById("btn");
  // note = document.getElementById("note");
  // console.log(note.value);
  let tabId = null;
   

  // Open up connection

  btn.addEventListener("click", function () {

    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, function (t) {
      tabId = t[0].id;
    });

    // setTimeout(async()=>console.log(
    //   await window.navigator.clipboard.readText()), 3000)


    let tab = null;

    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (t) {
        tab = t[0];
      }
    );

    // recieve scraped word
    setTimeout(() => {

      chrome.tabs.sendMessage(tab.id, { action: "scrape" }, function (res) {
        console.log(res);
        //  setStorage("longman",JSON.stringify(res.extraction))
        //  get chrome storage


        setCounter(res.counter)
      });
    }, 50);


  });
});

 

const clearData = function () {
  let updateBTN = document.querySelector('#clearBTN')
  updateBTN.addEventListener("click", function () {
    let tab = null;

    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (t) {
        tab = t[0];
      }
    );
    // recieve message
    setTimeout(() => {

      chrome.tabs.sendMessage(tab.id, { action: "clearData" }, function (res) {
        console.log(res);
        //  setStorage("longman",JSON.stringify(res.extraction))
        //  get chrome storage


        setCounter(res.counter)
      });
    }, 50);


  });
}
const logData = function () {
  let updateBTN = document.querySelector('#logBTN')
  updateBTN.addEventListener("click", function () {
    let tab = null;

    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (t) {
        tab = t[0];
      }
    );
    // recieve message
    setTimeout(() => {

      chrome.tabs.sendMessage(tab.id, { action: "logData" }, function (res) {
        console.log(res);
        //  setStorage("longman",JSON.stringify(res.extraction))
        //  get chrome storage


        setCounter(res.counter)
      });
    }, 50);


  });
}


const syncCounter = function () {
  let updateBTN = document.querySelector('#updateBTN')
  updateBTN.addEventListener("click", function () {
    let tab = null;

    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (t) {
        tab = t[0];
      }
    );
    // recieve scraped word
    setTimeout(() => {

      chrome.tabs.sendMessage(tab.id, { action: "sync" }, function (res) {
        console.log(res);
        //  setStorage("longman",JSON.stringify(res.extraction))
        //  get chrome storage


        setCounter(res.counter)
      });
    }, 50);


  });
}





const setCounter = function (counter) {
  let dom = document.querySelector('span')
  dom.textContent = counter

}
