import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Question from '../dumb/Question'
import QuestionBreadcrumbs from '../dumb/QuestionBreadcrumbs'
import SubmitButton from '../dumb/SubmitButton'
import ValidateButton from '../dumb/ValidateButton'

const convertQuestionsToList = questions => _.chain(questions)
	.toPairs()
	.map(pair => ({ ...pair[1], id: parseInt(pair[0], 10)}) )
	.sortBy('id')
	.value()

class QuestionsContainer extends Component {

	constructor (props) {
		super(props)
		this.state = {
			id: 0,
			numberOfVisibleQuestions: 1
		}
	}

	onAnswerChange (e, data) {
		let answer = data.value
		this.props.changeAnswer(this.state.id, answer)
	}

	onNextQuestionClick () {
		let { numberOfVisibleQuestions, id } = this.state
		let { questions, validateAnswer } = this.props

		validateAnswer(id, questions[id].answer)

		let questionsList = convertQuestionsToList(questions)
		let allQuestionIds = questionsList.map(q => q.id)
		let unansweredQuestionIds = questionsList.filter(q => q.answer === '').map(q => q.id)

		if (numberOfVisibleQuestions === questionsList.length) {
			let iterateOver = _.isEmpty(unansweredQuestionIds) ? allQuestionIds : unansweredQuestionIds
			this.setState({id: iterateOver.find(i => i > id) || iterateOver[0]})
		} else {
			this.setState({id: id + 1})
			if (id + 1 === numberOfVisibleQuestions) {
				this.setState({numberOfVisibleQuestions: numberOfVisibleQuestions + 1})
			}
		}

	}

	onBreadcrumbsClick (e, { id }) {
		this.setState({ id })
	}

	onSubmit () {
		console.log('yay')
	}

  render () {
		let { id, numberOfVisibleQuestions } = this.state
		let { questions } = this.props

		let questionsList = convertQuestionsToList(questions)
		let visibleQuestions = questionsList.slice(0, numberOfVisibleQuestions)

		let submitButton = questionsList.filter(q => q.validated).length === numberOfVisibleQuestions
			? <SubmitButton onSubmit={this.onSubmit.bind(this)} />
			: <div/>

		return (
			<div className="flex-column" style={{flex: 7}}>
				<QuestionBreadcrumbs
					onClick={this.onBreadcrumbsClick.bind(this)}
					visibleQuestions={visibleQuestions}
					activeId={id}
				/>
				<Question	
					onChange={this.onAnswerChange.bind(this)}
					onClick={this.onNextQuestionClick.bind(this)}
					question={questions[id]}
				/>
				<div className="flex-row" style={{justifyContent: 'space-between'}}>
					{submitButton}
					<ValidateButton onClick={this.onNextQuestionClick.bind(this)} />
				</div>
			</div>
		)
  }
}


const callValidator = (id, answer) =>
	dispatch =>
		Promise.resolve(true).then(
			validated => dispatch({ type: 'VALIDATE_ANSWER', id, validated })
		)

const mapStateToProps = ({ questions }) => ({ questions })
const mapDispatchToProps = dispatch => ({
	changeAnswer: (id, answer) => dispatch({ type: 'CHANGE_ANSWER', id, answer }),
	validateAnswer: (id, answer) => dispatch(callValidator(id, answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)