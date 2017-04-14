import React from 'react'

const range = (from, to) => Array.from(
  {length: to - from + 1},
  (_, index) => index + from
)

const width = 200
const gap = 10

const getCountColumn = windowWidth => Math.floor(
  (windowWidth - gap) / (width + gap)
) - 1

export class Layout extends React.PureComponent {
  constructor (props, children) {
    super(props, children)

    this.state = {
      columnSize: getCountColumn(window.innerWidth)
    }
  }

  componentDidMount () {
    const handler = e => {
      const columnSize = getCountColumn(window.innerWidth)

      this.setState(
        prevState =>
          prevState.columnSize === columnSize ? prevState : { columnSize }
      )
    }
    window.addEventListener('resize', handler)

    this.unsubscribe = () => window.removeEventListener('resize', handler)
  }

  render () {
    const { children } = this.props
    const { columnSize } = this.state
    const columns = range(0, columnSize)
      .map(i => ({ items: [], height: gap, index: i }))

    const balanceItem = (item) => {
      columns.sort((a, b) => a.height - b.height)
      columns[0].items.push({ top: columns[0].height, component: item })
      columns[0].height += (item.props.style.height + gap)
    }

    children.forEach(ch => balanceItem(ch))
    columns.sort((a, b) => a.index - b.index)

    return (
      <div>
        {columns.reduce(
          (store, next) => store.concat(
            next.items.map(({top, component}) => React.cloneElement(
              component,
              Object.assign({}, component.props, {
                style: Object.assign({}, component.props.style, {
                  position: 'absolute',
                  top,
                  left: next.index * (width + gap) + gap})
              })
            ))
          ),
          []
        )}
      </div>
    )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }
}
