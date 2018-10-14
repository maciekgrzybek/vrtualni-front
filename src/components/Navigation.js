import React from 'react';
import {StaticQuery, Link, graphql} from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allNavItem {
          edges {
            node {
              ID
              title
            }
          }
        }
      }
    `}
    render={ (data) => {
      const navTree = data.allNavItem.edges;
      console.log(navTree);
      return (
        <div>

          {navTree.map(navItem => {
            return (
              <Link to={'/'}>
                <h3>{navItem.node.title} - {navItem.node.ID}</h3>
              </Link>
            )
          })}
        </div>
      )
    }

    }/>
)
