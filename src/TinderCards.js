import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url:"https://th.bing.com/th/id/OIP.k5mBS4TCgV1jk-4IvWjySAHaFj?pid=ImgDet&rs=1",
        },
        {
            name: "Jeff Bezos",
            url:"https://pixel.nymag.com/imgs/daily/intelligencer/2019/02/07/07-jeff-bezos.w700.h700.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction)
    };
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style= {{backgroundImage: 'url${person.url})' }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
