import React from "react";
import { connect } from "react-redux";
import tachyons from "tachyons";
import "./ContentCard.css";

//ATT GÖRA IMORGON: FIXA SÅ ATT JAG HAR EN RENDER BARA FÖR ALLT.
// SE TILL ATT JAG HAR EN TILL PROP MED ALLT SOM INTE DELAR INFO, OCH ANVÄND SEDAN DENNA PROP ISTÄLLET FÖR ATT RENDERA UT ALLT!

/*The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.*/

class ContentCard extends React.Component {
  renderCharsOrPlanets() {
    if (this.props.numberState === "planets" || "chars") {
      const otherKeys = Object.keys(this.props.other);
      const statsInfo = otherKeys.map(otherKeys => {
        console.log(this.props.info);
        return (
          <p>
            {otherKeys}: {this.props.other[otherKeys]}
          </p>
        );
      });
      return (
        <div className="selector">
          <div>
            <h4>{this.props.info.planetname}</h4>
            <img
              src={require(`../images/${this.props.info.name}.jpg`)}
              className="br3"
            />
            <div>{statsInfo}</div>
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
    fetchChecker: state.fetchChecker,
    other: ownProps.other
  };
};

export default connect(mapStateToProps)(ContentCard);
