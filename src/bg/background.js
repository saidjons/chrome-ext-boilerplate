 
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
 


 