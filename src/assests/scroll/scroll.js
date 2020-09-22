import React from 'react';

import { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        // onScroll={this.handleScroll}
        // onScrollFrame={this.handleScrollFrame}
        // onScrollStart={this.handleScrollStart}
        // onScrollStop={this.handleScrollStop}
        // onUpdate={this.handleUpdate}
        // renderView={this.renderView}
        // renderTrackHorizontal={this.renderTrackHorizontal}
        // renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={props => (
          <div {...props} className="thumb-horizontal" />
        )}
        // renderThumbVertical={this.renderThumbVertical}
        // autoHide
        // autoHideTimeout={1000}
        // autoHideDuration={200}
        // autoHeight
        // autoHeightMin={0}
        // autoHeightMax={200}
        // thumbMinSize={30}
        // universal={true}
        renderThumbVertical={props => (
          <div {...props} className="thumb-vertical" />
        )}
        {...this.props}
      />
    );
  }
}

export default CustomScrollbars;
