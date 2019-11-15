import React from "react";

const movieForm = ({ match, history }) => {
  return (
    <div>
      <h1>movieForm {match.params.id}</h1>
      <button
        className="btn btn-primary="
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default movieForm;
