import React from "react";

const Card = (props) => {

    const { card: { src, title, backgroundColor, borderStyle }, handleGameLogic, } = props;

    const cardStyle = {
        backgroundColor: backgroundColor,
        border: borderStyle,
    };

    return (
        <div>
            <button className="card" style={cardStyle} onClick={handleGameLogic.bind(this, title)} >
                <figure>
                    <img src={src} alt={title} />
                    <figcaption>{title}</figcaption>
                </figure>
            </button>

        </div>
    );
}

export default Card;