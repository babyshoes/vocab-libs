import React from 'react'

const style = {'flex': 1, justifyContent: 'center'}

export default ({topElement, bottomElement, width, alignItems, flex}) =>
	<div className="flex-column" style={{ width, alignItems, flex, justifyContent: 'space-evenly' }}> 
		<div className="flex-column" style={style}> { topElement } </div>
		<div className="flex-column" style={style}> { bottomElement } </div>
	</div>
