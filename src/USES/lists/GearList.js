import React from 'react';

import UsesItem from '../UsesItem/UsesItem';

const GearList = (props) => {
    const drum = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M431.34 122.05l73.53-47.42a16 16 0 0 0 4.44-22.19l-8.87-13.31a16 16 0 0 0-22.19-4.44l-110.06 71C318.43 96.91 271.22 96 256 96 219.55 96 0 100.55 0 208.15v160.23c0 30.27 27.5 57.68 72 77.86v-101.9a24 24 0 1 1 48 0v118.93c33.05 9.11 71.07 15.06 112 16.73V376.39a24 24 0 1 1 48 0V480c40.93-1.67 78.95-7.62 112-16.73V344.34a24 24 0 1 1 48 0v101.9c44.5-20.18 72-47.59 72-77.86V208.15c0-43.32-35.76-69.76-80.66-86.1zM256 272.24c-114.88 0-208-28.69-208-64.09s93.12-64.08 208-64.08c17.15 0 33.73.71 49.68 1.91l-72.81 47a16 16 0 0 0-4.43 22.19l8.87 13.31a16 16 0 0 0 22.19 4.44l118.64-76.52C430.09 168 464 186.84 464 208.15c0 35.4-93.13 64.09-208 64.09z"/></svg>
    const phoneCase = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/></svg>
    const bag = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"/></svg>
    const headphones = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z"/></svg>

    return (
        <span>
            <UsesItem icon={drum} title="Drum Set" name="Mapex Armory 5 Piece" text="My Matte Green Mapex 5 Peice with Zildjian Cymbals." />
            <UsesItem icon={phoneCase} title="Phone Case" name="Rhinoshield CrashGuard" text="A nice, lightweight, bumper guard that protects my phone and makes it easier to grip." />
            <UsesItem icon={bag} title="Bag" name="Handcrafted Leather Laptop Bag" text="A nice, high quality, leather, laptop bag made by a small handcrafting shop in Fussen, Germany." />
            <UsesItem icon={headphones} title="Earbuds" name="Galaxy Buds+ " text="A pair of black, wireless, bluetooth earbuds with touch gestures and noise cancellation." />
        </span>
    )
};

export default GearList;