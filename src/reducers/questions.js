import _ from 'lodash'

const initialState = _.mapValues(
	{
		0: {word1: 'saturnine', word2: 'reticent', word3: 'elated'},
		1: {word1: 'quotiden', word2: 'stolid', word3: 'uncanny'},
		2: {word1: 'erstwhile', word2: 'forgotten', word3: 'contemporary'}
	},
	v => ({ 
		...v,
		answer: '',
		validated: false
	})
)

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_ANSWER':
			return {
				...state,
				[action.id]: {
					...state[action.id],
					answer: action.answer
				}
			}
		case 'VALIDATE_ANSWER':
			return {
				...state,
				[action.id]: {
					...state[action.id],
					validated: action.validated
				}
			}
		default:
			return state;
	}
}