import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    searchImg: null,
  };

  setSearchText = data => {
    this.setState({ searchImg: data });
  };

  render() {
    return (
      <>
        <Searchbar liftData={this.setSearchText} />
        <ImageGallery searchByInputData={this.state.searchImg} />
      </>
    );
  }
}
