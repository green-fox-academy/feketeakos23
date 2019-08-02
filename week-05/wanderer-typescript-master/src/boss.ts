'use strict';
import Characters from './characters'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export default class Boss extends Characters {

    constructor
        (XPos: number,
            YPos: number,
            maxHP?: number,
            currentHP: number = 2 * 1 * (Math.floor(Math.random() * 10) + 6) + (Math.floor(Math.random() * 10) + 6), // X is missing instead of 1 !!!
            maxDP?: number,
            currentDP: number = 1 / 2 * (Math.floor(Math.random() * 10) + 6) + (Math.floor(Math.random() * 10) + 6) / 2, // X is missing instead of 1 !!!
            maxSP?: number,
            currentSP: number = 1 * (Math.floor(Math.random() * 10) + 6) * 1,  // X is missing instead of 1 !!!
            X?: number,
            d6?: number) {
        super(maxHP, currentHP, maxDP, currentDP, maxSP, currentSP, XPos, YPos, X, d6)

    }

    drawBoss(XPos: number, YPos: number) {
        let image = document.getElementById('boss') as HTMLImageElement;
        ctx.drawImage(image, XPos * 72, YPos * 72);
    }
}