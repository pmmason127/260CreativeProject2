document.getElementById("getVerse").addEventListener("click", function(event)
{
    event.preventDefault()
    let referenceList = [["2CORINTHIANS", "12:9"], ["1PETER", "5:7"], ["HEBREWS", "11:6"], ["ISAIAH", "53:5"], 
                        ["JOHN", "16:33"], ["PHILIPPIANS", "4:8"], ["JOHN", "3:16"], ["ROMANS", "3:23"], ["PSALM", "23:4"], 
                        ["JEREMIAH", "29:11"], ["PHILIPPIANS", "4:13"], ["ROMANS", "8:28"], ["PROVERBS", "3:5"], ["GENESIS", "1:1"], 
                        ["JOHN", "14:16"], ["ROMANS", "6:23"], ["PHILIPPIANS", "4:6"], ["ROMANS", "12:2"], ["ACTS", "18:10"]];
    let randReference = Math.floor(Math.random() * 19) + 1;
    console.log(randReference);
    let book = referenceList[randReference][0];
    let verse = referenceList[randReference][1];
    console.log(book);
    console.log(verse);
    let url = "https://bible-api.com/" + book + "+" + verse + "?translation=kjv";
    
    fetch(url)
        .then(function(response) 
        {
            return response.json();
        }).then(function(json) 
        {
            console.log(json);
            let result = "";
            result += "<p>" + json.reference + "</p>";
            result += "<p>" + json.text + "</p>";
            document.getElementById("bibleVerse").innerHTML = result;
        });
});