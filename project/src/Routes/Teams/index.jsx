import React from "react";
import DropDown from "../../Components/TeamDropDown";
import PropTypes from "prop-types";
import * as style from '../../App.less';
import axios from "axios";
import TeamList from "../../Components/TeamList";

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    }
  }

   componentWillMount() {
    axios.get("http://www.mocky.io/v2/5c9d99d133000056003f2385")
      .then(res => {
        if (res.status === 200) {
          this.setState({
            teams: res.data,
          });
        }
      }).catch( err => {
        console.log(err);
    })
  }

  render() {
    return (
      <div className={style.Content}>
        <div className={style.Breadcrumb}>
          Teams  <i className="fa fa-chevron-right"/>
          <DropDown selected={this.props.teamId} teams={this.state.teams}/>
        </div>
        <TeamList teamId={this.props.teamId}/>
      </div>
    );
  }
}

Teams.propTypes = {
  teamId: PropTypes.string,
  memberId: PropTypes.string
};

export default Teams;

