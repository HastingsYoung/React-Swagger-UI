# React-Swagger
A simple React wrapper of Swagger API in Material design.

## Demo
![alt text](https://github.com/HastingsYoung/react-swagger-ui/raw/master/screenshots/react-swagger.gif "demo")

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwaggerUI from 'react-swagger';
 
const models = [{
    name: "Model 01",
    attributes: {
        "id": {
            "type": "integer",
            "default": 0
        },
        "quantity": {
            "type": "integer",
            "default": 0
        },
        "status": {
            "type": "string",
            "default": ""
        },
        "complete": {
            "type": "boolean",
            "default": false
        }
    }
}, {
    name: "Model 02",
    attributes: {
        "id": {
            "type": "integer",
            "default": 0
        },
        "quantity": {
            "type": "integer",
            "default": 0
        },
        "status": {
            "type": "string",
            "default": ""
        },
        "complete": {
            "type": "boolean",
            "default": false
        }
    }
}];
 
const entries = [{
    type: "get",
    api: "/model",
    desc: "The description of model api"
}, {
    type: "post",
    api: "/model",
    desc: "The description of model api"
}, {
    type: "put",
    api: "/model",
    desc: "The description of model api"
}, {
    type: "delete",
    api: "/model",
    desc: "The description of model api"
}];
 
const entriesGroup = [{
    groupName: "Model APIs",
    groupDesc: "The description of Model APIs",
    entries
}];
const modelsGroup = [{
    groupName: "Models",
    groupDesc: "The description of Models",
    models
}];
 ReactDOM.render(<ReactSwaggerUI entries={entriesGroup} models={modelsGroup}/>, document.getElementById('root'));
```

## License
Copyright 2017 Hastings Yeung

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.