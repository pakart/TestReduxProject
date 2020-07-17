/* eslint-disable class-methods-use-this */
const React = require('react');

class VotingComponent extends React.Component {
  getPair() {
    return this.props.pair || [];
  }

  render() {
    return <article>
          {this.getPair().map((entry) => <button key={entry}>
              <h1>{entry}</h1>
            </button>)}
        </article>;
  }
}

module.exports = VotingComponent;
