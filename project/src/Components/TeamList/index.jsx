import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import * as Style from "../../App.less";
import * as ListStyle from "./index.less"

class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }
  updateMembers() {
    axios.get(`http://www.mocky.io/v2/5ca00c403300006e00a87dba?team=${this.props.id}`)
      .then(res => {
        this.setState({
          members: res.data
        });
      })
  }
  componentWillMount() {
    if (this.props.id) {
      this.updateMembers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateMembers();
    }
  }

  render() {
   return (
     <div className={Style.Box}>
       <div>
         {this.state.members.map(member => {
           const name = `${member.name.first} ${member.name.last}`;
           const location = `${member.location.city}, ${member.location.state}`;
           return (
             <div className={ ListStyle.MemberItem } key={member.id}>
               <p className={ ListStyle.Name }>{name}</p>
               <p className={ ListStyle.Location }>{location}</p>
             </div>
           );
         })}
       </div>
     </div>
   );
  }
}

TeamList.propTypes = {
  id: PropTypes.string
};

export default TeamList
