import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RsvpItem from "./RsvpItem";

class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(
      PropTypes.shape({
        rsvp_id: PropTypes.string,
        event: PropTypes.shape({
          event_name: PropTypes.string
        }),
        member: PropTypes.arrayOf(
          PropTypes.shape({
            member_name: PropTypes.string,
            photo: PropTypes.string
          })
        )
      })
    )
  };
  render() {
    return (
      <div>
        {this.props.rsvps.map(rsvp => (
          <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />
        ))}
      </div>
    );
  }
}

export default RsvpList;
