import React from "react";
import { connect } from "react-redux";
import { onClickMenu } from "../actions/";
import { CharsOrPlanets } from "../actions/";
import "./Header.css";
import fetchChecker from "../reducers/fetchChecker";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="ui block header centered">
          <div className="container">Star Wars Fun</div>
          <button
            className="ui black button centered"
            onClick={() => {
              this.props.CharsOrPlanets("planets");
              this.props.onClickMenu(this.props.SWPlanets);
            }}
          >
            Planets
          </button>
          <button
            className="ui black button centered"
            onClick={() => {
              this.props.CharsOrPlanets("chars");
              this.props.onClickMenu(this.props.SWChars);
            }}
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
//onClick={(favorite)=>{
//this.handleSubmit(favorite);
//this.handleName(favorite);
//}
const mapStateToProps = state => {
  return {
    SWChars: state.SWChars,
    SWPlanets: state.SWPlanets,
    CharsOrPlanets: state.CharsOrPlanets,
    fetchChecker: state.fetchChecker
  };
};

export default connect(
  mapStateToProps,
  {
    onClickMenu: onClickMenu,
    CharsOrPlanets: CharsOrPlanets
  }
)(Header);
