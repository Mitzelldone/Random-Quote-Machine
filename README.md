# Random Quote Machine

### 🟥DEMO[HERE](https://mitzelldone.github.io/Random-Quote-Machine/index.html)

## HTML

Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options. [more info](https://getbootstrap.com/docs/5.1/components/card/)

```HTML
    <div class="container">
        <div class="row py-5">
            <div class="col-md-6 offset-md-3">
                <wrapper id="quote-box">
                    <div class="card">
                        <div class="card-header text-center card text-white bg-dark mb-3">
                            Random Quote Machine
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title">
                                <div id="text"></div>
                            </h5>
                            <div id="author" class="text-center"></div>
                            <button id="new-quote" onClick="generateQuote()" class="btn btn-success ">New Quote </button>
                            <a href="#" id="tweet-quote" target="_blank" class="btn btn-primary " title="Tweet this quote!" >Tweet</a>
                        </div>
                    </div>
                </wrapper>
            </di>
        </div>
    </div>
```

## JavaScript

`generateQuote()` function will run each time we load the window. As starting, we want the quote to be shown.

```Javascript
// The JS  will be loaded each time we load window
window.onload = init;

function init() {
    generateQuote()
}
```

Get random quote from the `quoteBank` array by their number.

```JavaScript

// This will run when we click the button
function generateQuote() {
    let quoteSize = quoteBank.length;
    let randomIndex = Math.floor(Math.random() *quoteSize)
    let randomQuoteData = quoteBank[randomIndex]

    let twitterLink ="https://twitter.com/intent/tweet?&text="

    // Add The Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20") // replace empty space with %20
    twitterLink += '"' + quoteInApiFormat + '"';

    // Add The Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20")
    twitterLink += "%0D%0A - " + authorInApiFormat;

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author
}

```
