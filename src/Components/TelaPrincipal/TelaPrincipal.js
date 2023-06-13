import React, { useState } from "react";
import { imageBackCard } from "../baseUrlImg";
import Header from "../Header/Header";
import { cardsJson } from "../listaCards";
import {
  AllCard,
  ButtonCard,
  CardBack,
  CardFront,
  ContainerCard,
  ImgCard,
  StyledSwal
} from "./styled";
import Swal from "sweetalert2";
import FlipMove from "react-flip-move";



const TelaPrincipal = () => {
  const [cards, setCards] = useState(cardsJson);

  const shuffle = () => {
    const newCards = [...cards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setCards(newCards);
  };

  const items = cards.map((card) => {
    const title = card.name;
    const text = card.meaning;
    const img = card.image;

    const AlertCard = () => {
      return (
        <StyledSwal>
          {Swal.fire({
            title: title,
            text: text,
            color: 'white',
            imageUrl: img,
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'tarot card',
            width: 1000,
            height: 900,
            background: 'black',
          }).then((result) => {
            if (result.value) {
              window.location = 'Default.aspx';
            }
          })}
        </StyledSwal>
      );
    };
    
    return (
      <div key={card.name}>
        <FlipMove duration={550} easing="ease">
          <AllCard>
            <CardFront>
              <ImgCard src={imageBackCard} />
            </CardFront>

            <CardBack>
              <ImgCard src={card.image} />
              <ButtonCard onClick={AlertCard}>
                {card.name.toUpperCase()}
              </ButtonCard>
            </CardBack>
          </AllCard>
        </FlipMove>
      </div>
    );
  });

  return (
    <div>
      <Header shuffle={shuffle} cards={cards} />

      <ContainerCard>{items}</ContainerCard>
    </div>
  );
};

export default TelaPrincipal;


