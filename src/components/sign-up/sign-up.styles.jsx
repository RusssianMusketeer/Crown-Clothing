import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: unset;
  }


`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
