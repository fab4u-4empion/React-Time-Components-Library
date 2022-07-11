# Time components &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/fab4u-4empion/React-Time-Components-Library/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-time-components.svg?style=flat)](https://www.npmjs.com/package/react-time-components)

It is library containing react components for working with date and time

## Installation

npm: `npm i react-time-components`

## Documentation

[Clock](https://github.com/fab4u-4empion/React-Time-Components-Library/blob/master/src/Clock/README.md)

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "react-time-components";

const App = () => {
    return (
        <Clock />
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### License

Library is [MIT licensed](./LICENSE). 

### Idea of components

Idea was taken [from](https://codepen.io/jkantner/pen/MWEmExB)