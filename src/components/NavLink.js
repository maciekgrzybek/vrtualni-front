import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { styled } from 'reakit';



const NavLinkItem = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLink = ({data}) => {
  const {slug, title} = data;
  return (
    <NavLinkItem>
      <Link to={slug}>{title}</Link>
    </NavLinkItem>
  );
};

// NavLink.propTypes = {
//
// };

export default NavLink;
