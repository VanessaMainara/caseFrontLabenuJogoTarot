import React from "react";
import Header1 from "../../assets/Header1.png";
import { BoxButton, Button, Description, ImgBorder } from "./headerStyle";

const Header = (props) => {
  const buttonReload = () => {
    window.location.reload();
    return false;
  };

  return (
    <header>
      <div>
        <ImgBorder src={Header1} />
        <BoxButton>
          <Button onClick={props.shuffle}>Embaralhar</Button>
          <Button onClick={props.shuffle && buttonReload}>Reiniciar</Button>
        </BoxButton>
        <Description>
        Vamos fazer uma leitura de tarô? Para começar, clique no botão "Embaralhar" para misturar as cartas. 
        Em seguida, mova o cursor sobre a carta escolhida e clique no nome dela para descobrir o seu significado.
         Lembre-se sempre de que as cartas de tarô nunca mentem!
        </Description>
      </div>
    </header>
  );
};

export default Header;
