import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

import './layout.css'
import BackgroundLines from "./BackgroundLines";

const Layout = ({ children, seoData }) => (
    <>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1400,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <Header/>
        <BackgroundLines/>
        {children}
      </div>
    </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
