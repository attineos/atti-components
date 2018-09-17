import { reduce } from 'lodash'
import templateCompoRender from './templateCompoRender'

export default ({ component, pathToCompo, renders }) => `import React from 'react'
import ${component} from '${pathToCompo}'

class ${component}Nav extends React.Component {
	${renders &&
    renders.length > 0 &&
    reduce(
      renders,
      (acc, render) =>
        acc +
        '\n' +
        templateCompoRender({
          render: render.render,
          id: render.id,
          beforeRender: render.beforeRender,
        }),
      '',
    )}
	
	
	render() {
		return (
			<React.Fragment>
			${renders &&
        renders.length > 0 &&
        reduce(renders, (acc, render) => acc + '\n' + `{this.render${render.id}()}`, '')}
			</React.Fragment>
		)
	}

}

export default ${component}Nav
`
