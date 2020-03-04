import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TopicsList extends PureComponent {
  static propTypes = {
      topics: PropTypes.arrayOf(PropTypes.shape{
          topic: PropTypes.string.isRequired,
          count:PropTypes.number.isRequired
      }).isRequired
  };
  render() {
      <div>
          <h1>Topics Top 10</h1>
          <ol>
              topics.map(t => (
              <li key={t.topic}>{`${t.topic} (${t.count})`}</li>
              ))
          </ol>
      </div>
  }
}

export default TopicsList