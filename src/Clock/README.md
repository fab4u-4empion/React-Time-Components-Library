# Clock

Displays the current time, date and day of the week

## Example 

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "react-time-components";

const App = () => {
    return (
        <Clock size="regular" locale="en" />
    )
}
```

## Props

| Prop name     | Type                                  | Default       | Description  |
| ------------- |  ----------------------------         | ------------  | -----------  |
| size?         | `"small"` \| `"regular"` \| `"large"` | `"regular"`   | "small" - 100x100`px` <br/> "regular" - 150x150`px` <br/> "large" - 200x200`px`|
| lacale?       | `"ru"` \| `"en"`                      | `"ru"`        |              |