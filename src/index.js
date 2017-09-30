import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Base from './components/Base'
import Schemes from './components/Schemes'
import Models from './components/Models'
import Entries from './components/Entries'
import './styles/app.css'

const models = [
  {
    name: 'Model 01',
    attributes: {
      id: {
        type: 'integer',
        default: 0,
      },
      quantity: {
        type: 'integer',
        default: 0,
      },
      status: {
        type: 'string',
        default: '',
      },
      complete: {
        type: 'boolean',
        default: false,
      },
    },
  },
  {
    name: 'Model 02',
    attributes: {
      id: {
        type: 'integer',
        default: 0,
      },
      quantity: {
        type: 'integer',
        default: 0,
      },
      status: {
        type: 'string',
        default: '',
      },
      complete: {
        type: 'boolean',
        default: false,
      },
    },
  },
]

const entries = [
  {
    type: 'get',
    api: '/model',
    desc: 'The description of model api',
    deprecated: true,
  },
  {
    type: 'post',
    api: '/model',
    desc: 'The description of model api',
  },
  {
    type: 'put',
    api: '/model',
    desc: 'The description of model api',
  },
  {
    type: 'delete',
    api: '/model',
    desc: 'The description of model api',
  },
  {
    type: 'get',
    api: '/model',
    desc: 'The description of model api',
  },
]

const entriesGroup = [
  {
    groupName: 'Model APIs',
    groupDesc: 'The description of Model APIs',
    entries,
  },
]
const modelsGroup = [
  {
    groupName: 'Models',
    groupDesc: 'The description of Models',
    models,
  },
]

const base = {
  title: 'Swagger Example API',
  subTitle: '[ Base URL: example.swagger.io/v2 ]',
}

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
          <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'scroll' }}>
            <Base {...this.props.base}>{this.props.children}</Base>
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

ReactDOM.render(
  <ReactSwaggerUI entries={entriesGroup} models={modelsGroup} base={base}>
    This is a sample server Swagger UI. You can find out more about Swagger at http://swagger.io or
    on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the
    authorization filters.
  </ReactSwaggerUI>,
  document.getElementById('root')
)

export default ReactSwaggerUI
