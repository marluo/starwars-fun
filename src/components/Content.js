import React from "react";
import { connect } from "react-redux";
import { fetchSWCharacters } from "../actions/";
import { fetchSWPlanets } from "../actions";
import { CharsOrPlanets } from "../actions";
import { fetchSWShips } from "../actions";
import ContentCard from "./ContentCard";

class Content extends React.Component {
  componentDidMount() {
    this.props.fetchSWCharacters();
    //kör actionen som fetchar karaktärer 2x från APIn
    this.props.fetchSWPlanets();
    this.props.fetchSWShips();

    //kör actionen som fetchar planeter 2x från apin
  }

  renderCharacters() {
    const timezone = "America/Los Angeles";
    for (let time in timezone) {
      console.log(time);
    }

    const {
      SWChars,
      searchfilter,
      number,
      renderState,
      fetchChecker,
      SWShips,
      SWPlanets
    } = this.props;
    if (!fetchChecker) {
      //kollar om det SWChars har ett värde i sig, om den inte har det blir den false, alltså visas detta.
      return (
        <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>
      );
    }
    if (fetchChecker && number) {
      console.log("testasdasdasdsdadasdasads", number);
      //detta visas om vi inte har passat in number något value via knapparna, då arrayen inte har några värden
      return (
        <div class="dtc v-mid tc white ph3 ph4-l">
          <h4 class="f6 f2-m f-subheadline-l fw6 tc">
            Please select an option to display information
          </h4>
        </div>
      );
    }

    if (number) {
      console.log("mackan", number);
      //Kollar så att vi faktiskt har klickat på en knapp och passat in arrayerna actionen;
      const SWCharsMerged = number.filter(char => {
        return char.name.toLowerCase().includes(searchfilter.toLowerCase());
      });

      return SWCharsMerged.map(char => {
        console.log("peter", char);
        return (
          <ContentCard
            char={char}
            charsOrPlanets={renderState}
            fetchChecker={fetchChecker}
            other={char.other}
          />
        );
      });
    }
  }
  render() {
    //rendererar ut karaktärerna, loading och om man ska välja en option
    return <div className="tcx">{this.renderCharacters()} </div>;
  }
}

const mapStateToProps = state => {
  return {
    number: state.number,
    SWChars: state.SWChars,
    SWPlanets: state.SWPlanets,
    renderState: state.CharsOrPlanets,
    fetchChecker: state.fetchChecker,
    searchfilter: state.searchfilter,
    SWShips: state.SWShips
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
    CharsOrPlanets: CharsOrPlanets,
    fetchSWShips: fetchSWShips
  }
)(Content);
