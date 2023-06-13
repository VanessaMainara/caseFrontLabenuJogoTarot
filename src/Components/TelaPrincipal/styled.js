import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  width:95vw;
  align-items: row;
  flex-wrap: wrap; 
  justify-content: space-between;
  margin-left:1vw;
  span:first-child {
    display: inline-block;
    min-width: 70px;
    text-align: left;
  }
 
`;


export const AllCard = styled.div`
  width: 12vw;
  height: 38vh;
  margin: 40px 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
  text-align: center;
  :hover {
    transform: rotateY(180deg);
  }
  @media (max-width:900px) {
  min-width:130px;
  }
`;

export const ImgCard = styled.img`
  display: flex;
  align-items: center;
  width: 12vw;
  height: 38vh;
  min-width:130px;
`;

export const CardFront = styled.div`
  display: flex;
  position: absolute;
  width: 12vw;
  height: 38vh;
  backface-visibility: hidden;
  min-width:130px;
`;
export const CardBack = styled.div`
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 12vw;
  height: 38vh;
  backface-visibility: hidden;
  min-width:130px;
`;

export const ButtonCard = styled.button`
  font-family: "Macondo", cursive;
  border: none;
  color: white;
  background: none;
  font-size: medium;
  cursor: pointer;
  :hover{
    color:black;
    background:white;
  }
`;

export const StyledSwal = styled.div`
  .swal2-popup {
    border-radius: 10px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  }
`;