// The JS  will be loaded each time we load window
window.onload = init;

function init() {
    generateQuote()
}

// This will run when we click the button
function generateQuote() {
    let quoteSize = quoteBank.length;
    let randomIndex = Math.floor(Math.random() *quoteSize)
    let randomQuoteData = quoteBank[randomIndex]

    let twitterLink ="https://twitter.com/intent/tweet?&text="
    
    // Add The Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20")
    twitterLink += '"' + quoteInApiFormat + '"'; 
    
    // Add The Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20")
    twitterLink += "%0D%0A - " + authorInApiFormat; 

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author
}
