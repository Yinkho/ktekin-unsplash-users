import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LinkTitle = styled.div`
  width: 200px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ activeLink }) => activeLink ? '#373737' : '#c7c7c7'};
  font-weight: ${({ activeLink }) => activeLink ? '700' : '400'};

  &:hover {
    transition: all 0.2s ease;
    color: #373737;
  }
`;

export const Bar = styled.div`
  height: 30px;
  width: 1px;
  background-color: #dedede;
`;