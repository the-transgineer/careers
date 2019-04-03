import React from "react";
import PropTypes from "prop-types";
import * as style from "./index.less";

class TeamDropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams: this.props.teams,
      selected: this.props.selected || "Select Team",
      menuOpen: false
    }
  }

  toggleList = () => {
    const menuOpen = this.state.menuOpen;
    this.setState({
      menuOpen: !menuOpen
    });
  };

  handleSelect = (id) => {
    let selected;
    this.state.teams.forEach( team => {
      if (team.id === id) {
        return selected = team.name;
      }
    });
    this.setState({
      selected,
      menuOpen: false
    });
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

export default TeamDropDown;