import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChallengesContext } from './ChallengesContext';

const ChallengeList = () => {
	const {challenges} = useContext(ChallengesContext)

	return (
		<main>
			<section>
				<aside>
					<h2>Challenges</h2>
					<ul>
					{
						Object.keys(challenges).map(id => (
							<li key={id}>
								<Link to={`/challenge/${id}`}>{challenges[id].name}</Link>
							</li>
						))
					}
					</ul>
					<Link to="/new-challenge">
						<b>Create new challenge</b>
					</Link>
				</aside>
			</section>
		</main>
	);
};

export default ChallengeList;