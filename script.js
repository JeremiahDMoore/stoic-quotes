document.getElementById('generateButton').onclick = function() {
    generateQuote();
};

function generateQuote() {
    const quotes = [
        'The only way to happiness is to cease worrying about things which are beyond the power of our will.',
        'Wealth consists not in having great possessions, but in having few wants.',
        'He who fears death will never do anything worth of a man who is alive.'
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerText = selectedQuote;
    console.log('Quote generated:', selectedQuote);
}
