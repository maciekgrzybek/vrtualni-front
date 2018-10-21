import React from 'react';
import PropTypes from 'prop-types';

import './layout.css'

const Layout = ({ children, seoData }) => (
    <>

      {/*<Header siteTitle={data.site.siteMetadata.title}/>*/}
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1400,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
