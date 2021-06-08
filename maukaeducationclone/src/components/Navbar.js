import React from 'react'
import './Navbar.css';
import maukaLogo from '../Images/maukaLogo.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import 'boxicons'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



export default function Navbar() {

  return (
    <nav class="sticky-top">
      <div className="navbar-container"  >
        <div className="navbar-cpmponents">
          <img src={maukaLogo} class="navbar-logo" alt=""/>

          <a href="/" className="navbar-home-link"> Home </a>
          <a href="/" className="navbar-cohortone-link"> CohortOne </a>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <a href="/" className="navbar-modules-link" variant="contained" color="primary" style={{ height: "40px" }} {...bindTrigger(popupState)}>
                  Modules<box-icon type='solid' name='chevron-down' size="15px" color="white"></box-icon>
          </a>
                <Menu {...bindMenu(popupState)} style={{ color: "tomato" }}>
                  <MenuItem onClick={popupState.close}>Communication</MenuItem>
                  <MenuItem onClick={popupState.close}>Collaboration</MenuItem>
                  <MenuItem onClick={popupState.close}>Creativity</MenuItem>
                  <MenuItem onClick={popupState.close}>Critical Thinking</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <a href="/" className="navbar-talktous-link"> Talk to Us </a>
          <a href="/" className="navbar-joinnow-link"> Join now </a>
          <a  href="/"className="navbar-login-link"> Login </a>
        </div>
      </div>
    </nav>





  )
}
