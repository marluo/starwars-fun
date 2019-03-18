import React from "react";
import { connect } from "react-redux";
import { fetchSWCharacters } from "../actions/";
import { fetchSWPlanets } from "../actions";

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchSWCharacters();
    this.props.fetchSWPlanets();
  }

  renderCharacters() {
    if (!this.props.SWChars[0]) {
      return (
        <div className="container">
          <div className="ui two column centered grid">
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
          </div>
        </div>
      );
    }
    if (!this.props.number[0] && !this.props.number[1]) {
      return (
        <div className="ui two column centered grid">
          Please Select an Option
        </div>
      );
    }

    if (this.props.number[0] && this.props.number[1]) {
      const SWCharsMerged = [...this.props.number[0], ...this.props.number[1]];
      console.log("fattaru", SWCharsMerged);
      return SWCharsMerged.map(char => {
        return <div className="four wide column">{char.name}</div>;
      });
    }
  }
  render() {
    console.log("peppe", this.props.SWChars);
    return <div className="ui grid">{this.renderCharacters()} </div>;
  }
}

const mapStateToProps = state => {
  return {
    number: state.number,
    SWChars: state.SWChars,
    SWPlanets: state.SWPlanets
    //vi får nu alla karaktärer från staten som vi hämtar via actionen. Vi använder denna för att
    //mappa alla ut på skärmen
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSWCharacters: fetchSWCharacters,
    fetchSWPlanets: fetchSWPlanets
  }
)(Content);
