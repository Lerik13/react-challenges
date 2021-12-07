import React from 'react';
import { Routes , Route } from "react-router-dom";
import ChallengeList from './ChallengeList';
import NewChallenge from './NewChallenge';
import Challenge from './Challenge';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<ChallengeList/>}/>
			<Route path="/challenge/:challengeId" element={<Challenge/>}/>
			<Route path="/new-challenge" element={<NewChallenge/>}/>
		</Routes>
	);
}

export default App;
