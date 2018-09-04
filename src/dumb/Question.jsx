import React from 'react'
import AnalogyColumn from './AnalogyColumn'
import { Input } from 'semantic-ui-react'

export default ({ onChange, onClick, id, question }) =>
	<div className="flex-row" style={{fontFamily: 'Ubuntu', fontSize: '3em', flex: 2}}>
		<AnalogyColumn topElement={question.word1} bottomElement={question.word3} alignItems='flex-end' flex={4}/>
		<AnalogyColumn topElement=':' bottomElement=':' flex={1}/>									 
		<AnalogyColumn
			topElement={question.word2} 
			bottomElement={<Input transparent value={question.answer} onChange={onChange}/>}
			alignItems='flex-start'
			flex={4}
		/>									 
	</div>
