import React from 'react';
import {StaticQuery, Link, graphql} from "gatsby";

export default () => (
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
      const navTree = JSON.parse(data.allNavItem.edges[0].node.structure);
      const rawNavTree = Object.keys(navTree)
      console.log(navTree);
      return (
        <div>

          {rawNavTree.map(navItem => {
            navItem = navTree[navItem];
            return (
              <Link to={'/'}>
                <h3>{navItem.title}</h3>
              </Link>
            )
          })}
        </div>
      )
    }

    }/>
)
