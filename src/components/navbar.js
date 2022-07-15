import React from 'react';
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Make It Happen
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
