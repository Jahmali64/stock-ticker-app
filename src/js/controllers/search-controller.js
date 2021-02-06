function SearchController(model, searchView, resultsView){
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;

    //this.configUI is being used create an initial set up for the controller
    this.configUI = async function() {
        //add an event listener to the form's submit button, then call the onHandleSubmit function whenever it's pressed
        this.searchView.view.addEventListener('submit', this.onHandleSubmit)
        const data = await model.init();
        //pass the data received to the view
        this.resultsView.configUI(data['Global Quote']);
    };

    this.onHandleSubmit = async(e) => {
        //prevent the form's default submit behaviour
        e.preventDefault();
        //combine the search and create a reference to the user inserted value
        const searchParams = {
            tickerSymbol: e.currentTarget.searchTerm.value
        }
        const stockSearch = await this.model.search(searchParams)
        this.resultsView.renderStock(stockSearch)
    }
    this.configUI();
    return this;
}

export default SearchController;