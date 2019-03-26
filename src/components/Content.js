import React from "react";
import { connect } from "react-redux";
import { fetchSWCharacters } from "../actions/";
import { fetchSWPlanets } from "../actions";
import { CharsOrPlanets } from "../actions";
import ContentCard from "./ContentCard";

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchSWCharacters();
    //kör actionen som fetchar karaktärer 2x från APIn
    this.props.fetchSWPlanets();
    //kör actionen som fetchar planeter 2x från apin
  }

  renderCharacters() {
    console.log("triumf", this.props.fetchChecker);
    console.log("testing KAKAKAKA", this.props.SWChars[0]);
    if (!this.props.fetchChecker) {
      //kollar om det SWChars har ett värde i sig, om den inte har det blir den false, alltså visas detta.
      return (
        <div className="bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5">
          <div className="ui two column centered grid">
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.fetchChecker && !this.props.number[0]) {
      console.log("testasdasdasdsdadasdasads", this.props.number);
      //detta visas om vi inte har passat in number något value via knapparna, då arrayen inte har några värden
      return (
        <div>
          <div>Please Select an Option</div>
        </div>
      );
    }

    if (this.props.number && this.props.fetchChecker) {
      //Kollar så att vi faktiskt har klickat på en knapp och passat in arrayerna actionen
      console.log(this.props.number);
      const SWCharsMerged = this.props.number;
      console.log("hej", SWCharsMerged);
      return SWCharsMerged.map(char => {
        return (
          <ContentCard
            char={char}
            charsOrPlanets={this.props.renderState}
            fetchChecker={this.props.fetchChecker}
          />
        );
      });
    }
  }
  render() {
    //rendererar ut karaktärerna, loading och om man ska välja en option
    console.log("peppe", this.props.SWChars);
    return <div className="tcx">{this.renderCharacters()} </div>;
  }
}

const mapStateToProps = state => {
  return {
    number: state.number,
    SWChars: state.SWChars,
    SWPlanets: state.SWPlanets,
    renderState: state.CharsOrPlanets,
    homeworld: state.homeworld,
    fetchChecker: state.fetchChecker
    //vi får nu alla karaktärer från staten som vi hämtar via actionen. Vi använder denna för att
    //mappa alla ut på skärmen
  };
};

export default connect(
  mapStateToProps,
  {
    //passar in actionen i denna komponent
    fetchSWCharacters: fetchSWCharacters,
    fetchSWPlanets: fetchSWPlanets,
    CharsOrPlanets: CharsOrPlanets
  }
)(Content);
