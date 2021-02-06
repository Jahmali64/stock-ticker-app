function Stockapi(){
    this.apiBaseURL = "https://www.alphavantage.co/";

    //create an initial UI for the resultsView
    this.init = function(){
        const result = this.query("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=3UKZYXDE3QIYCQHX")
        return result;
    };

    this.query = async function (url) {
        const req = await fetch(url);
        const res = await req.json();
        return res;
    };

    //create a function to encode the search params for the url to fetch the data
    this.search = async function (data){
        const tickerSymbol = {...data};
        let url = new URL(this.apiBaseURL + 'query?function=GLOBAL_QUOTE&');

        const params = new URLSearchParams()
        params.set('symbol', tickerSymbol.tickerSymbol)

        url = url+params+'&apikey=3UKZYXDE3QIYCQHX';
        
        const req = await fetch(url);
        const res = await req.json();
        return res;
    }
    return this;
}

export default Stockapi;