import {trigger, state, style, transition, animate, keyframes} from '@angular/core';

export function Parallax(duration: number = 300) {
    return trigger('parallax', [
            state('start_position', style({
                transform: 'translateY(0)'
            })),
            state('end_position', style({
                transform: 'translateY(-20px)'
            })),
            transition('start_position <=> end_position', [
                animate(duration+'ms ease')
            ]),
        ])
}

export var PARALLAX_PROVIDERS = [
    Parallax
];