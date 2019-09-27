import React, { FC, Fragment } from 'react'

interface Props {
  zIndexOffset?: number
}

const StackLayout: FC<Props> = ({ children, zIndexOffset = 0 }) => {
  return (
    <div className="relative flex flex-grow-1 items-stretch">
      <Fragment>
        {React.Children.toArray(children).map((child, idx) => {
          if (idx === 0) {
            return (
              <div
                key={idx}
                className={`flex flex-grow-1 flex-column items-stretch`}
                style={{ zIndex: zIndexOffset + 1 }}
              >
                {child}
              </div>
            )
          }

          return (
            <div
              key={idx}
              className={`absolute top-0 left-0 w-100 h-100 flex-column`}
              style={{ zIndex: zIndexOffset + idx + 1 }}
            >
              {child}
            </div>
          )
        })}
      </Fragment>
    </div>
  )
}

export default StackLayout
