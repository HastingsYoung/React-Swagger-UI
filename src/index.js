import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Schemes from './components/Schemes'
import Models from './components/Models'
import Entries from './components/Entries'
import './styles/app.css'

// const models = [
//   {
//     name: 'Model 01',
//     attributes: {
//       id: {
//         type: 'integer',
//         default: 0,
//       },
//       quantity: {
//         type: 'integer',
//         default: 0,
//       },
//       status: {
//         type: 'string',
//         default: '',
//       },
//       complete: {
//         type: 'boolean',
//         default: false,
//       },
//     },
//   },
//   {
//     name: 'Model 02',
//     attributes: {
//       id: {
//         type: 'integer',
//         default: 0,
//       },
//       quantity: {
//         type: 'integer',
//         default: 0,
//       },
//       status: {
//         type: 'string',
//         default: '',
//       },
//       complete: {
//         type: 'boolean',
//         default: false,
//       },
//     },
//   },
// ]

// const entries = [
//   {
//     type: 'get',
//     api: '/model',
//     desc: 'The description of model api',
//   },
//   {
//     type: 'post',
//     api: '/model',
//     desc: 'The description of model api',
//   },
//   {
//     type: 'put',
//     api: '/model',
//     desc: 'The description of model api',
//   },
//   {
//     type: 'delete',
//     api: '/model',
//     desc: 'The description of model api',
//   },
// ]

// const entriesGroup = [
//   {
//     groupName: 'Model APIs',
//     groupDesc: 'The description of Model APIs',
//     entries,
//   },
// ]
// const modelsGroup = [
//   {
//     groupName: 'Models',
//     groupDesc: 'The description of Models',
//     models,
//   },
// ]

class ReactSwaggerUI extends Component {
  render() {
    const entries = []
    const models = []

    this.props.entries.forEach((d, i) => {
      entries.push(<Entries key={i} {...d} />)
    })

    this.props.models.forEach((d, i) => {
      models.push(<Models key={i} {...d} />)
    })

    return (
      <div className="react-swagger-ui">
        <MuiThemeProvider>
          <div
            style={{ width: '100%', overflowX: 'hidden', overflowY: 'scroll', paddingTop: '50px' }}
          >
            <Schemes />
            {entries}
            {models}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactSwaggerUI.propTypes = {
  models: PropTypes.array,
  entries: PropTypes.array,
}

export default ReactSwaggerUI

// ReactDOM.render(
//   <ReactSwaggerUI entries={entriesGroup} models={modelsGroup} />,
//   document.getElementById('root')
// )
