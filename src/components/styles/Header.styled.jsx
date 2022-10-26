import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  max-width: ${({ theme }) => theme["max-width"]};
  margin: auto;
  padding: 4rem 1.5rem;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 1.5rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export const Image = styled(Logo)`
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;

export default StyledHeader;
