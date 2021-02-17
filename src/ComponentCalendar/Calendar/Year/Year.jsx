import React, { Component } from 'react';

class Year extends Component {
  currentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  render() {
    return (
      <>
        {this.currentYear()}
      </>
    );
  }
}

export default Year;
