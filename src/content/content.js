// content.js
// alert('Hello, world!');

console.log('conent js');


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

  

        console.log(request,'saidjon');
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        sendResponse({farewell: "goodbye"});
    });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.color === "green") {
//       document.body.style.backgroundColor = "green";
//       sendResponse({ status: "done" });
//     }
//   });


//   chrome.runtime.onConnect.addListener(function (port) {
//     port.onMessage.addListener(function (msg) {
//       if (port.name === "uiOps") {
//         const idToQuery = msg.id;
//         if (document.getElementById(idToQuery)) {
//           port.postMessage({
//             exists: true,
//           });
//         } else {
//           port.postMessage({
//             exists: false,
//           });
//         }
//       }
//     })
//     })