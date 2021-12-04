import { challengesReducer } from "./challengesReducer"
import { createChallenge, toggleDay } from "./actions"

describe("challengesReducer", () => {
	describe("CREATE_CHALLENGE", () => {
		//it.todo("adds new challenge to the state")
		it("adds new challenge to the state", () => {
			const action = createChallenge("test")
			expect(challengesReducer({}, action)).toEqual({
				"0": {
					"name": "test",
					"days": {
						"0": "o",
						"1": "o",
						"10": "o",
						"11": "o",
						"12": "o",
						"13": "o",
						"14": "o",
						"15": "o",
						"16": "o",
						"17": "o",
						"18": "o",
						"19": "o",
						"2": "o",
						"20": "o",
						"21": "o",
						"22": "o",
						"23": "o",
						"24": "o",
						"25": "o",
						"26": "o",
						"27": "o",
						"28": "o",
						"29": "o",
						"3": "o",
						"4": "o",
						"5": "o",
						"6": "o",
						"7": "o",
						"8": "o",
						"9": "o",
					}
				}
			})
		})
	});
	describe("TOGGLE_DAY", () => {
		it("sets the day of the specified challenge to ENABLED state", () => {
			const initialState = challengesReducer({}, createChallenge("test"))

			expect(challengesReducer(initialState, toggleDay(0, 0))[0].days[0]).toEqual("x")
		})
	});
})