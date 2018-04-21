import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";

const emailIcon = <FontIcon className="material-icons">email</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const profileIcon = <FontIcon className="material-icons">face</FontIcon>;

const styles = {
  position: "fixed",
  bottom: "0px",
  width: "100%"
};
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationSimple extends Component {
  state = {
    selectedIndex: 0
  };

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <Paper zDepth={1} style={styles}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Letters"
            icon={emailIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Memories"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Profile"
            icon={profileIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationSimple;
