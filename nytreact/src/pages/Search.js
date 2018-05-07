import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Hero from "../components/Hero"
import { ArticleCardList } from "../components/ArticleCardList/ArticleCardList";
import ArticleCard from "../components/ArticleCard";
import Row from "../components/Row";
import Col from "../components/Col";

class Search extends Component {
  state = {
    search: "",
    articles: [],
    startYears: [],
    endYears: [],
    topics: [],
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // UPDATED FORM SUBMIT (HOW EXACTLY IS THIS WORKING???)

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticlesTopic(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data, error: ""});
      })
      .catch(err => this.setState({ error: err }));
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
            topics={this.state.topics}
            startYears={this.state.startYears}
            endYears={this.state.endYears}
          />

        <Row>
         <Col size="md-12">
          <SearchResults results={this.state.results} />
          {!this.state.articles.length ? (
            <h1 className="text-center">No Articles Found</h1>
          ) : ( 
          <ArticleCardList>
            {this.state.articles.map(article => {
              return (
                <ArticleCard
                key={article.title}
                title={article.title}
                summary={article.summary}
                href={article.href}
                />
              );
            })}
          </ArticleCardList>
        )}
         </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
