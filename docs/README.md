# VTEX Stack Layout

Use this layout component to show blocks on top of other blocks.
Each children passed to `stack-layout` will receive an increasingly higher value of `zIndex`.

So for example, if you set:

```
"stack-layout": {
  "children": ["flex-layout.row#viewone", "flex-layout.row#viewtwo", "flex-layout.row#viewthree]
}
```

This means `flex-layout.row#viewone` will appear on the bottom, `flex-layout.row#viewtwo` will appear over it with `zIndex` of value 2, and `flex-layout.row#viewthree` will appear over them both with `zIndex` of value 3.

### Blocks API

`stack-layout` accepts any block as its children, as long as that block is allowed as children of `stack-layout`'s parent.

These are the props accepted by the block:

| Prop name      | Type     | Description                                                                                                                                                                            | Default value |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `blockClass`   | `string` | Allows to pass a custom name to be added to component css classes                                                                                                                      | `null`        |
| `zIndexOffset` | `number` | An offset to be passed to the zIndex of the children of the stack layout. If you pass 3, the first children will have zIndex of 3 and the next layer will have zIndex of 4, and so on. | `0`           |

### CSS API

| CSS class          | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `stackContainer`   | Container that wrapps the whole component                |
| `stackItem`        | Container for each item                                  |
| `stackItem--first` | Special name appended to the first children of the stack |
