import styled from "styled-components";

export const ImgBorder = styled.img`
  width: 100vw;
  height: 250px;
  position: relative;
  @media (max-width: 900px) {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  font-family: "Macondo", cursive;
  border: none;
  font-size: 2.5rem;
  color: white;

  cursor: pointer;
  background: none;
  :hover{
    font-size:2.6rem;
    font-weight:600;
  }
  :active {
    color: white;
  }
`;

export const Description = styled.h2`
  color: white;
  border: #d49c6c 9px double;
  text-align: center;
  padding: 10px;
  margin-top: 50px;
`;
