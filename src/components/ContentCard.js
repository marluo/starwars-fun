import React from "react";
import { connect } from "react-redux";
import tachyons from "tachyons";
import "./ContentCard.css";

class ContentCard extends React.Component {
  renderCharsOrPlanets() {
    if (this.props.numberState === "chars") {
      return (
        <div>
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
        <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 lul fl-w20">
          <div>
            <h4>{this.props.info.planetname}</h4>
            <h4>climate: {this.props.info.climate}</h4>
            <h4>gravity:{this.props.info.gravity}</h4>
            <h4>population:{this.props.info.population}</h4>
            <p>residents:{this.props.info.residents}</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="bg-light-silver dib br3 pa1 ma2 grow bw2 shadow-5 upper">
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
