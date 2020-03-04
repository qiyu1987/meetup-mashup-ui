import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class RsvpItem extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.shape({
      rsvp_id: PropTypes.string,
      event: PropTypes.shape({
        event_name: PropTypes.string
      }),
      member: PropTypes.shape({
        member_name: PropTypes.string,
        photo: PropTypes.string
      })
    })
  };
  render() {
    const {
      rsvp: { event, member }
    } = this.props;
    return (
      <div style={{display:"flex", padding:5}}>
        <img style={{width:100, height:100}}src={member.photo} alt="" />
        <div>
          <h2>{event.event_name}</h2>
          <p>{`${member.member_name} is joining this event.`}</p>
        </div>
      </div>
    );
  }
}

export default RsvpItem;
