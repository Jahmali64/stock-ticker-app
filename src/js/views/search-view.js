function SearchView(viewId){
    //passes in the id of the view
    this.view = document.querySelector(viewId);
    this.configUI = function(){};
    this.updateLabel = function(label){
        //updates label
        this.view.querySelector('label[for=searchTerm]').textContent = label
    };
    return this;
}

export default SearchView;