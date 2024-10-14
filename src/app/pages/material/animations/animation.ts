import { animate, state, style, transition, trigger } from "@angular/animations"

export const enterTransition = transition(':enter', [
	style({
		opacity: 0
	}),
	animate('1s ease-in', style({opacity: 1}))
])

export const leaveTransition = transition(':leave', [
	style({
		opacity: 1
	}),
	animate('1s ease-out', style({opacity: 0}))
])

export const fadeIn = trigger('fadeIn', [enterTransition])

export const fadeOut = trigger('fadeOut', [leaveTransition])

export const fadeInOut = trigger('fadeInOut', [
	state('open', style({
		opacity: 1
	})),
	state('close', style({
		opacity: 0
	})),
	transition('open => *', [animate('1s ease-out')]),
	transition('* => open', [animate('1s ease-in')]),
])