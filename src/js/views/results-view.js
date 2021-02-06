import ejs from "ejs";

//html markup to display stock
const stockView = `
<aside class="stock">
    <header><h3 class="name"><%=stock['01. symbol']%></h3></header>
    <ul class="details" >
        <li> Latest Trading Day: <span><%=stock['07. latest trading day']%></span></li>
        <li> Open:<span><%=stock['02. open']%></span></li>
        <li> Close: <span><%=stock['05. price']%></span></li>
    </ul>
</aside>
`;

//html markup to display if there are no results
const noResultsView = `
<aside class="error">
    <header>
        <h3> There are no results matching this search</h3>
    <header>
</aside>
`;

//function to cycle through data and insert into the html markup
function ResultsView(viewId){
    //create a reference to markup container
    this.container = document.querySelector(viewId);

    //insert stock data into stockView markup
    this.configUI = function(stock){
        const elem = ejs.render(stockView, {stock});
        this.container.insertAdjacentHTML('afterbegin', elem);
    };

    this.renderStock = function(stock){
        this.removeChildElements()
        console.log(stock['Global Quote'])

        //display noResultsView markup if no data is return from user's search input
        if(Object.keys(stock['Global Quote']).length === 0){
            const elem = ejs.render(noResultsView)
            this.container.insertAdjacentHTML('afterbegin', elem)
        }

        //display stockView markup if data is return from user's search input
        if(Object.keys(stock['Global Quote']).length !== 0){
            Object.values(stock).forEach(stock => {
                const elem = ejs.render(stockView, {stock});
                this.container.insertAdjacentHTML('afterbegin', elem)
            })
        }
    }

    this.removeChildElements = function(){
        this.container.querySelectorAll('aside').forEach(item => {
            this.container.removeChild(item);
        })
    }
}

export default ResultsView;