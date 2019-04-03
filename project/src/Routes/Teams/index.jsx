import React from "react";
import DropDown from "../../Components/TeamDropDown";
import * as style from '../../App.less';
import teams from "./teams";

class Teams extends React.Component {
  render() {
    return (
      <div className={style.Content}>
        <div className={style.Breadcrumb}>
          Teams  <i className="fa fa-chevron-right"/>
          <DropDown teams={teams}/>
        </div>
      </div>
    );
  }
}

export default Teams;