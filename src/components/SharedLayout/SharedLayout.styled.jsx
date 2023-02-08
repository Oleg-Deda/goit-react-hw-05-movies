import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  padding: 0 20px;
`;

export const Header = styled.header`
  border-bottom: 1px solid #000000;
  box-shadow: 0px 1px 2px #121306;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 6px 10px;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  color: #ffffff;
  background: #121306;
    box-shadow: 2px 3px 4px #66fa64;
    &:hover,
  &:focus {
    color: #03e158;
        box-shadow: 2px 3px 4px #009ec1, 1px 1px 2px #8964fa;
  }

  &.active {
    color: #03e158;
    background: #121306;
  }
`;
