import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="affiche">
      <h1 style={{ color: "red" }}>{props.fullName} </h1>
      <h3 style={{ color: "blue" }}>{props.bio} </h3>
      <h3 style={{ color: "blue" }}>{props.profession} </h3>
      <button
        className="btn btn-primary"
        onClick={() => props.handel(props.fullName)}
      >
        click
      </button>
      {props.children}
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};
Profile.defaultProps = {
  fullName: "Attia Ghazi Walid",
  bio: "study in go my code",
  profession: "student",
};

export default Profile;
