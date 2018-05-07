import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Hero from "../components/Hero"

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    startYears: [],
    endYears: [],
    topics: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
    // GET ARTICLES
    // API.getArticlesList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  // UPDATED FORM SUBMIT (HOW EXACTLY IS THIS WORKING???)

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticlesTopic(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticlesStartYear(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticlesEndYear(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: ""});
      })
      .catch(err => this.setState({ error: err.message}));
  };


  render() {
    return (
      <div>
        <Hero backgroundImage="https://img00.deviantart.net/4854/i/2013/352/8/1/newspaper_collage_texture_by_flordeneu-d6yeuvs.jpg">
          <h1>New York Times Scraper</h1>
          <h2>Find some articles!</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
            topics={this.state.topics}
            startYears={this.state.startYears}
            endYears={this.state.endYears}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
