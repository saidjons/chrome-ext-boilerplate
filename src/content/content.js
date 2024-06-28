//document object


// localStorage.setItem("longman-counter", JSON.stringify([]));
// localStorage.setItem("longman-words", JSON.stringify([]));


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.info("request", request);

        switch (request.action) {
            case "scrape": scrape(); sendResponse({ counter: getCounter() });

                break;

            case "logData": logData();sendResponse({ message: "logged" });

            break;
            case "sync": sendResponse({ counter: getCounter() });

                break;
            case "clearData": clearData();sendResponse({ counter: getCounter() });

                break;

            default:
                break;
        }


        //   console.log(sender.tab ?
        //               "from a content script:" + sender.tab.url :
        //               "from the extension");

    });

const clearData = function () {
    let words = localStorage.setItem("longman-words",JSON.stringify([]));
    console.info("longman-words cleared")
}
const logData = function () {
    let words = localStorage.getItem("longman-words");
    let parsed = JSON.parse(words)
    console.info(`count : ${parsed.length}`);
    console.info(words)
}
const pushWord = function (word) {
    let wordsJSON = localStorage.getItem("longman-words");
    let words = JSON.parse(wordsJSON)
    
     let check = isWordExists(word,words)
     if(check ==false){
         words.push(word)
         localStorage.setItem("longman-words", JSON.stringify(words));
        return;
     }

     alert("word exists "+ word.word)
 

     
}
const isWordExists = function (obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].word === obj.word) {
            return true;
        }
    }

    return false;
}

const getCounter = function () {
    let words = localStorage.getItem("longman-words");
    return JSON.parse(words).length
}
const scrape = function () {
    let extraction = extractWord()
    console.info(extraction);
    pushWord(extraction)
}

function extractWord() {

    let word = document.querySelector("h1.pagetitle").textContent;
    let translations = []

    let pronounciations = []
    let pronounsDom   = document.querySelector('.dictionary > .dictentry').querySelectorAll('.Head .speaker')

    // let pronounsDom   = document.querySelectorAll(".Head .speaker")
    if(pronounsDom.length){
        pronounsDom.forEach(el => {
            let link  = el.getAttribute("data-src-mp3")
            if(link){
                pronounciations.push(link)
            }
        });
    }

    let pos = ''
    if (document.querySelector('span.POS')) {
        pos = document.querySelector('span.POS').textContent ?? ""
    };
    if (!pos && document.querySelector('span.GRAM')) {
        pos = document.querySelector('span.GRAM').textContent ?? ""
    };
    pos.trim()

    let translationsDom = document.querySelectorAll('.dictlink > span .Sense')

    if (translationsDom.length) {

        translationsDom.forEach(dom => {
            let tr = ""
            if (!dom.querySelector('span .DEF')) {
                return;
            }
            tr = dom.querySelector('span .DEF').textContent
            let audioDoms = dom.querySelectorAll('span .EXAMPLE')

            let ex = []
            //  getting audios and examples 
            for (var i = 0; i < audioDoms.length; i++) {
                audioDoms[i]
                let text = audioDoms[i].textContent.trim() ?? ""
                let audio = ""
                if (audioDoms[0].querySelector('span') && audioDoms[0].querySelector('span').getAttribute("data-src-mp3")) {

                    audio = audioDoms[0].querySelector('span').getAttribute("data-src-mp3")
                }
                ex.push({ text, audio })
            };

            translations.push({ tr, ex });

        });

    };
    return { pos,word,prouncitions:pronounciations, defs:translations }

}



