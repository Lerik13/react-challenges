import React, { useEffect, useReducer } from 'react';
import { createChallenge, toggleDay } from './actions';
import { challengesReducer } from './challengesReducer'

export const ChallengesContext = React.createContext();

export const ChallengesProvider = ({children}) => {
	const [challenges, dispatch] = useReducer(challengesReducer, 
		JSON.parse(localStorage.getItem("challenges") || "{}")
	)

	useEffect(() => {
		localStorage.setItem("challenges", JSON.stringify(challenges))
	}, [challenges])

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