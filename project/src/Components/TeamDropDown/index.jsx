import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import * as style from "./index.less";
import { idLookUp } from "../../helpers";

class TeamDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: this.props.teams,
      selected: "Select Team",
      menuOpen: false
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.teams !== this.props.teams) {
     this.setState({
       teams: this.props.teams,
       selected: idLookUp(this.props.selected, this.props.teams).name
     });
    }
  }

  toggleList = () => {
    const menuOpen = this.state.menuOpen;
    this.setState({
      menuOpen: !menuOpen
    });
  };

  handleSelect = (id) => {
    let selected = idLookUp(id, this.state.teams);
    this.setState({
      selected: selected.name,
      menuOpen: false
    });
    this.props.history.replace(`/teams/${id}`);
  };


  render() {
    return (
      <div className={style.DropDown}>
        <div className={style.DropDownSelect} onClick={this.toggleList}>
          <div className={style.Title}>{this.state.selected}</div>
          {this.state.menuOpen
            ? <i className="fa fa-caret-up"/>
            : <i className="fa fa-caret-down"/>
          }
        </div>
        {this.state.menuOpen &&
        <ul className={style.TeamList}>
          {this.state.teams.map((team) => {
            if (!(team.name === this.state.selected)) {
             return <li onClick={() => this.handleSelect(team.id)} key={team.id}>{team.name}</li>
            } else {
              return null;
            }
          })}
        </ul>}
      </div>
    )
  }
}

TeamDropDown.propTypes = {
  selected: PropTypes.string,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withRouter(TeamDropDown);