import React from "react";
import { connect } from "react-redux";
import tachyons from "tachyons";

class ContentCard extends React.Component {
  componentDidMount() {}

  renderCharsOrPlanets() {
    if (this.props.numberState === "chars") {
      return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <div>
            <h2>{this.props.info.name}</h2>
            <img alt="robots" src={require(`./${this.props.info.name}.jpg`)} />
            <h4>Weight: {this.props.info.mass}</h4>
            <h4>Height:{this.props.info.height}</h4>
            <h4>Birthyear:{this.props.info.height}</h4>
            <h4>Homeworld:{this.props.info.homeworld}</h4>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderCharsOrPlanets()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: ownProps.char,
    numberState: ownProps.charsOrPlanets
  };
};

export default connect(mapStateToProps)(ContentCard);
