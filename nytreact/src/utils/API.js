import axios from "axios";
import SearchForm from "../components/SearchForm"

const apiThing ="8bcc1acfc78249e49d107e3e6a02cb1f";

var Topic = "";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },

  //NOT POSITIVE THESE ARE THE CORRECT ROUTES

  getArticlesTopic: function() {
    return axios.get("https://api.nytimes.com/svc/articleseardh/?q=" + Topic + apiThing); // apiThing evaluates to key=sldfjlkadsjflkdsfj
   },
  getArticlesEndYear: function() {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json");
  },
  getArticlesStartYear: function() {
    return axios.get("https://nytimes.com/api/articlesearch/begin_date");
  }
};

// NYT API KEY:  8bcc1acfc78249e49d107e3e6a02cb1f

// NYT DEMO ARTICLE SEARCH CODE
// THAT LINK: https://developer.nytimes.com/article_search_v2.json#/Console/GET/articlesearch.json

//   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "8bcc1acfc78249e49d107e3e6a02cb1f",
//   'q': "poop"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });