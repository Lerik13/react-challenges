import React, { useReducer } from 'react';
import { createChallenge, toggleDay } from './actions';
import { challengesReducer } from './challengesReducer'

export const ChallengesContext = React.createContext();

export const ChallengesProvider = ({children}) => {
	const [challenges, dispatch] = useReducer(
		challengesReducer, {}
	)

	const createNewChallenge = (name) => {
		dispatch(createChallenge(name))
	}

	const toggleDayForChallenge = (challengeId, day) => {
		dispatch(toggleDay(challengeId, day))
	}

	return (
		<ChallengesContext.Provider
			value={{ createNewChallenge, toggleDayForChallenge, challenges }}
		>
			{children}
		</ChallengesContext.Provider>
	)
}