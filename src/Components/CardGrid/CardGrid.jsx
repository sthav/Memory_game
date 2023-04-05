import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Hummer from "../../images/Hummer.jpeg";
import Audi from "../../images/Audi.jpg";
import Bmw from "../../images/Bmw.jpg";
import bugatti from "../../images/bugatti.jpg";
import cadillac from "../../images/cadillac.jpg";
import Ferrari from "../../images/Ferrari.jpg";
import lamborghini from "../../images/lamborghini.jpg";
import Merc from "../../images/Merc.jpg";
import mustang from "../../images/mustang.jpg";
import rollsroyce from "../../images/rollsroyce.jpg";


const CardGrid = (props) => {

    const { handleGameLogic, score, highScore } = props;

    let images = [
        {
            src: Hummer,
            title: 'Hummer',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: Audi,
            title: 'Audi',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: Bmw,
            title: 'Bmw',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: bugatti,
            title: 'bugatti',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: cadillac,
            title: 'cadillac',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: Ferrari,
            title: 'Ferrari',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: lamborghini,
            title: 'lamborghini',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: Merc,
            title: 'Merc',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: mustang,
            title: 'mustang',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
        {
            src: rollsroyce,
            title: 'rollsroyce',
            backgroundColor: 'rgb(255 223 137)',
            borderstyle: '1px solid rgb(255 223 137)',
        },
    ];

    const [cards, setNewCards] = useState(images);

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
    };

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setNewCards(newCards);
    }, [score, highScore, ]);



    return (
        <div>
            {cards.map((card) => (
                <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
            ))};
        </div>
    )
}


export default CardGrid;