
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo5 from '../../../../assets/Ultra_Aura.png';
import HeadModule from "../module";

const Header = styled.header`
  position: relative;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  width:90%;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const NavbarBrand = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const HeadModuleWrapper = styled.div`
  flex-shrink: 0; /* Ensure it does not shrink */
  @media (max-width: 768px) {
    display: block; /* Ensure it's visible on smaller screens */
  }
`;

const CourseHeader = ({courseId}) => {
  console.log(courseId,"cid");
  return (
    <Header>
      <Navbar>
        <NavbarBrand to="/">
          <Logo src={logo5} alt="Logo" />
        </NavbarBrand>

        <MenuWrapper>
          {/* Main Menu can be added here */}
        </MenuWrapper>

        <HeadModuleWrapper>
          <HeadModule courseId={courseId}/>
        </HeadModuleWrapper>
      </Navbar>
    </Header>
  );
};

// Add PropTypes validation
CourseHeader.propTypes = {
  activeMenu: PropTypes.string.isRequired,
  courseId:PropTypes.number.isRequired,
};

export default CourseHeader;
