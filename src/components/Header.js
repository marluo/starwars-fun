import React from "react";
import { connect } from "react-redux";
import { onClickMenu } from "../actions/";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="ui block header centered">
          <div className="container">Star Wars Fun</div>
          <button
            className="ui black button centered"
            onClick={() => this.props.onClickMenu(this.props.SWPlanets)}
          >
            Planets
          </button>
          <button
            className="ui black button centered"
            onClick={() => this.props.onClickMenu(this.props.SWChars)}
          >
            Characters
          </button>
          <button className="ui black button centered">Ships</button>
        </h3>
        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    SWChars: state.SWChars,
    SWPlanets: state.SWPlanets
  };
};

export default connect(
  mapStateToProps,
  {
    onClickMenu: onClickMenu
  }
)(Header);
