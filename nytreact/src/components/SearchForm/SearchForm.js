import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Topic:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="topic"
        list="topics"
        type="text"
        className="form-control"
        placeholder=""
        id="topic"
      />
      <p>  </p>
      <label htmlFor="breed">Start Year:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="startYear"
        list="startYears"
        type="text"
        className="form-control"
        placeholder=""
        id="startYear"
      />
      <p>  </p>
      <label htmlFor="breed">End Year:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="endYear"
        list="endYears"
        type="text"
        className="form-control"
        placeholder=""
        id="endYear"
      />
      <p>  </p>
      <label htmlFor="breed">breeds:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        list="breeds"
        type="text"
        className="form-control"
        placeholder=""
        id="breed"
      />
      {/* <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist> */}
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
