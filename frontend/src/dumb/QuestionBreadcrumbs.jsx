import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

export default ({ onClick, visibleQuestions, activeId }) => {
	let convertQuestionToBreadcrumbSection = ({ id, validated }) =>
		<Breadcrumb.Section id={id} onClick={onClick} key={id}>
			<div style={{color: validated ? 'blue' : 'yellow'}}>&#9673;</div>
		</Breadcrumb.Section>
	let sections = visibleQuestions.map(convertQuestionToBreadcrumbSection)
	return (
		<div className="flex-row" style={{justifyContent: 'flex-start'}}>
			<div style={{flex: 2}}></div>
			<div style={{flex: 10, textAlign: 'left'}}>
				<Breadcrumb size="massive" sections={sections} />
			</div>
		</div>
	)
}