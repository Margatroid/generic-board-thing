import React from 'react';

const Header = () => {
  return (
    <nav className="is-light navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="field">
            <p className="control">
              <a className="button is-link is-primary">
                <span className="icon">
                  <i className="fas fa-plus" />
                </span>
                <span>New idea</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
