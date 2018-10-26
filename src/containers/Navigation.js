import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, Link, graphql} from "gatsby";

const Navigation = ({menu}) => (
  <StaticQuery
    query={graphql`
      query {
        allNavItem {
          edges {
            node {
              wpID
              structure
            }
          }
        }
      }
    `}
    render={ (data) => {
      const menuType = menu === 'footer' ? 0 : 1;
      const navTree = JSON.parse(data.allNavItem.edges[menuType].node.structure);
      const rawNavTree = Object.keys(navTree);
      return (
        <div>

          {rawNavTree.map(navItem => {
            navItem = navTree[navItem];
            return (
              <Link to={navItem.slug} key={navItem.slug}>
                <h3>{navItem.title}</h3>
              </Link>
            )
          })}
        </div>
      )
    }

    }/>
)

Navigation.propTypes = {
  menu: PropTypes.string
}
export default Navigation;
