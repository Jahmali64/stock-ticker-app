/*
uses the MVC structure of Model, Controller(SearchView, ResultsView, Model) and Views(Search and Results)
*/

import SearchController from './controllers/search-controller';
import Stockapi from './models/stockapi';
import ResultsView from './views/results-view';
import SearchView from './views/search-view';

const model = new Stockapi();
const searchView = new SearchView("#search");
const resultsView = new ResultsView("#results");
const searchController = new SearchController(model, searchView, resultsView);