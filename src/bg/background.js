// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

chrome.runtime.onMessageExternal.addListener(function(message,sender,response){
  console.info(message,sender);
  response({
    message:"go it",
    sender:"saidjon"
  })
})
  chrome.omnibox.onInputStarted.addListener(function(){
    console.log('input started');
  })
  chrome.omnibox.onInputChanged.addListener(function(text,suggest){
    console.log('input changed :'+ text);
  })
chrome.tabs.onUpdated.addListener((tabss)=>{
  // console.log(tab);
  chrome.tabs.query({
    // active:false,
    currentWindow:true
  },function(tabs){
     
  
    console.log(tabs);
  })
})
chrome.history.onVisited.addListener((history) => {
  console.log(history);
  
});

console.log('background  page js ');
//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   });