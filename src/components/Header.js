import React from "react";
import { connect } from "react-redux";
import { onClickMenu, fetchSWShips } from "../actions/";
import { CharsOrPlanets, searchfilter } from "../actions/";
import "./Header.css";
import fetchChecker from "../reducers/fetchChecker";

class Header extends React.Component {
  componentDidMount() {
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    this.props.searchfilter(event.target.value);
  }

  render() {
    console.log("powertothe", this.props.SWShips);
    return (
      <div className="tc paddingfix">
        <div className="tc">
          <img className="logo" src={require(`./star_wars_logo.png`)} />
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
        <a
          className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray sides"
          onClick={() => {
            this.props.CharsOrPlanets("ships");
            this.props.onClickMenu(this.props.SWShips);
          }}
        >
          Ships
        </a>
        <div className="pa2">
          <input
            className="pa2 ba b--grey bg-moon-gray"
            type="search"
            placeholder="search for something"
            onChange={this.onSearch}
          />
        </div>
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
    fetchChecker: state.fetchChecker,
    SWShips: state.SWShips
  };
};

export default connect(
  mapStateToProps,
  {
    onClickMenu: onClickMenu,
    CharsOrPlanets: CharsOrPlanets,
    searchfilter: searchfilter
  }
)(Header);
