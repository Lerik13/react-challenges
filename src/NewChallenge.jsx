import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ChallengesContext } from './ChallengesContext';


const NewChallenge = () => {
	const {createNewChallenge} = useContext(ChallengesContext)
	const navigate = useNavigate()

	const onSubmit = (event) => {
		event.preventDefault()
		const name = event.target.challenge.value
		createNewChallenge(name)
		navigate("/")
	}

	return (
		<main>
			<section>
				<form onSubmit={onSubmit}>
					<p>
						<Link to="/">Back to challenges list</Link>
					</p>
					<label htmlFor="challenge">Challenge title:</label>
					<input required name="challenge" type="text"/>
					<button>Create challenge</button>
				</form>
			</section>
			
		</main>
	);
};

export default NewChallenge;