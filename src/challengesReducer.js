/* // Structure of data
{
	0: {
		name: "Push up 100",
		days: {1: "COMPLETED", 2: "EMPTY", 3: "EMPTY"}
	},
	1: {},
	2: {}
}
*/
import {CREATE_CHALLENGE, TOGGLE_DAY} from './actions'


const COMPLETED = "x";
const EMPTY = "o";

const days = Object.fromEntries(
	Array.from({ length: 30 }, () => EMPTY).map((e,i) => [i, e])
)

export const challengesReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_CHALLENGE: {
			const newChallengeId = Object.keys(state).length;
			const {name} = action.payload;
			return {...state, ...{ [newChallengeId]: {name, days} }}
		}
		case TOGGLE_DAY: {
			const { challengeId, day } = action.payload;
			const challenge = state[challengeId]
			const updatedChallenge = {
				...challenge,
				days: { ...challenge.days, ... { [day]: COMPLETED } }
			}
			return {
				...state,
				...{ [challengeId]: updatedChallenge }
			}
		}
		default:
			return state
	}
}