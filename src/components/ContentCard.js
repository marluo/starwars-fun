import React from "react";
import { connect } from "react-redux";
import tachyons from "tachyons";
import "./ContentCard.css";

//ATT GÖRA IMORGON: FIXA SÅ ATT JAG HAR EN RENDER BARA FÖR ALLT.
// SE TILL ATT JAG HAR EN TILL PROP MED ALLT SOM INTE DELAR INFO, OCH ANVÄND SEDAN DENNA PROP ISTÄLLET FÖR ATT RENDERA UT ALLT!

/*The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.*/

class ContentCard extends React.Component {
  renderCharsOrPlanets() {
    if (this.props.numberState === "chars") {
      return (
        <div className="selector">
          <h2>{this.props.info.name}</h2>
          <img
            alt="robots"
            className="br3"
            src={require(`./${this.props.info.name}.jpg`)}
          />
          <p>Weight: {this.props.info.mass}</p>
          <p>Height:{this.props.info.height}</p>
          <p>Birthyear:{this.props.info.height}</p>
          <p>Homeworld:{this.props.info.homeworld}</p>
          <p>Species:{this.props.info.species}</p>
          <p>Language:{this.props.info.language}</p>
        </div>
      );
    }
    if (this.props.numberState === "planets") {
      console.log("tetris", this.props.info);
      return (
        <div className="selector">
          <div>
            <h4>{this.props.info.planetname}</h4>
            <img
              src={require(`../images/${this.props.info.planetname}.jpg`)}
              className="br3"
            />
            <h4>gravity:{this.props.info.gravity}</h4>
            <h4>population:{this.props.info.population}</h4>
            <h4>climate:{this.props.info.climate}</h4>
            <h4>residents:{this.props.info.residents}</h4>
            <p className />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="bg-light-silver dib br3 pa1 ma2 grow bw2 shadow-5 upper v-top">
        {this.renderCharsOrPlanets()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: ownProps.char,
    numberState: ownProps.charsOrPlanets,
    homeworld: ownProps.planets,
    fetchChecker: state.fetchChecker
  };
};

export default connect(mapStateToProps)(ContentCard);
