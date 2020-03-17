import styled from 'styled-components';

export const UserCard = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #EFEFEF;
  transition: all 0.3s ease;
  margin: 10px;
  color: grey;

  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.1);
    box-shadow: 7px 7px 10px #ebebeb;
  }
`;

export const Image = styled.img`
  border-radius: ${({ icon }) => icon ? '0' : '100%'};
  ${({ icon }) => icon ? 'width: 30px; background-image: #C7C7C7;' : '' }
`;

export const UserCardContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  width: 100vw;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;