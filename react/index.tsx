import React, { FC, Fragment } from 'react'
import { generateBlockClass, BlockClass } from '@vtex/css-handles'
import styles from './styles.css'

interface Props {
  zIndexOffset?: number
}

const StackLayout: FC<Props & BlockClass> = ({ children, blockClass, zIndexOffset = 0 }) => {
  return (
    <div className={`${generateBlockClass(styles.stackContainer, blockClass)} relative flex flex-grow-1 items-stretch`}>
      <Fragment>
        {React.Children.toArray(children).map((child, idx) => {
          if (idx === 0) {
            return (
              <div
                key={idx}
                className={`${styles.stackItem} ${styles.stackItem}--first flex flex-grow-1 flex-column items-stretch`}
                style={{ zIndex: zIndexOffset + 1 }}
              >
                {child}
              </div>
            )
          }

          return (
            <div
              key={idx}
              className={`${styles.stackItem} absolute top-0 left-0 w-100 h-100 flex-column`}
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
