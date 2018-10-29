import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from "gatsby";
import MainNavigation from "../components/MainNavigation";

const GetNavigation = ({menu}) => (
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
      return (
        <div>
          <MainNavigation navigation={navTree}/>
        </div>
      )
    }

    }/>
)

GetNavigation.propTypes = {
  menu: PropTypes.string
}
export default GetNavigation;
