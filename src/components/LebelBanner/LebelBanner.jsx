import React from 'react';
import SingleItem from './SingleItem/SingleItem';

const LebelBanner = () => {

    const items = [
        {    
            id: "1",
            img : "https://i.ibb.co/8XrvtvB/1.png",
            tittle: "Awesome Aroma",
            "texts": "You will definitely be a fan of the design & aroma of your coffee"
        },
        {
            id: "2",
            img : "https://i.ibb.co/88xNYNg/2.png",
            tittle: "High Quality ",
            "texts": "We served the coffee to you maintaining the best quality "
        },
        {
            id: "3",
            img : "https://i.ibb.co/PW2b61p/3.png",
            tittle: "Pure Grades",
            "texts": "The coffee is made of the green coffee beans which you will love"
        },
        {
            id: "4",
            img : "https://i.ibb.co/KzQRCP7/4.png",
            tittle: "Proper Roasting ",
            "texts": "Your coffee is brewed by first roasting the green coffee beans "
        },
    ]
    return (
        <div>
            <div className="items">
                {
                   items.map(item => <SingleItem key={item.id} item = {item}></SingleItem>)
                }
            </div>
        </div>
    );
};

export default LebelBanner;