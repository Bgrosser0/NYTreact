import axios from "axios";
import SearchForm from "../components/SearchForm"

// THIS IS THE MAIN API ISSUE, 
// IT CAUSES A DEPENDENCY ERROR,
// I HOPE TO RESOLVE IT BUT CANNOT BEFORE THE 6:30 DEADLINE

// import express from "express";

// const router = require("express").Router();

// router.get("/articles", (req, res) => {
//   axios
//     .get("https://api.nytimes.com/svc/articlesearch/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// casues this error:
// TypeError: Cannot read property 'prototype' of undefined

const apiThing ="8bcc1acfc78249e49d107e3e6a02cb1f";

var Topic = "";

// Export an object containing methods weYY'll use for accessing the Dog.Ceo API

export default {
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

// module.exports = router;
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