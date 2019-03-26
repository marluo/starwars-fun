import React from "react";
import { connect } from "react-redux";
import { onClickMenu } from "../actions/";
import { CharsOrPlanets } from "../actions/";
import "./Header.css";
import fetchChecker from "../reducers/fetchChecker";

class Header extends React.Component {
  render() {
    return (
      <div className="tc paddingfix">
        <div className="tc">
          <img className="kuk" src={require(`./star_wars_logo.png`)} />
        </div>
        <a
          className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray sides"
          onClick={() => {
            this.props.CharsOrPlanets("planets");
            this.props.onClickMenu(this.props.SWPlanets);
          }}
        >
          Planets
        </a>
        <a
          className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray sides"
          onClick={() => {
            this.props.CharsOrPlanets("chars");
            this.props.onClickMenu(this.props.SWChars);
          }}
        >
          Characters
        </a>
        <a className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray sides">
          Ships
        </a>
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
