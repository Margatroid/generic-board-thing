import React from 'react';

const Header = ({ newIdea, isLoading }) => {
  const loadingStatus = isLoading ? (
    <div className="navbar-item">
      <span className="icon">
        <i className="fa-sync fa-spin fas" />
      </span>
      Saving changes...
    </div>
  ) : (
    <div className="navbar-item">All changes saved.</div>
  );

  return (
    <nav className="is-light navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="field">
            <p className="control">
              <a className="button is-link is-primary" onClick={newIdea}>
                <span className="icon">
                  <i className="fas fa-plus" />
                </span>
                <span>New idea</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="is-active navbar-menu">
        <div className="navbar-end">{loadingStatus}</div>
      </div>
    </nav>
  );
};

export default Header;
