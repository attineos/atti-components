export default ({ beforeRender = '', render, id }) => `	render${id} = () => {
		${beforeRender}
		return (
			${render}
		)
	}
`
