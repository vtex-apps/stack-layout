import React from 'react'
import { defineMessages } from 'react-intl'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

const CSS_HANDLES = ['stackContainer', 'stackItem'] as const

interface Props {
  zIndexOffset?: number
}

const StackLayout: StorefrontFunctionComponent<Props> = ({ children, zIndexOffset = 0 }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.stackContainer} relative`}>
      {React.Children.toArray(children).map((child, idx) => {
        if (idx === 0) {
          return (
            <div
              key={idx}
              className={applyModifiers(handles.stackItem, 'first')}
              style={{ zIndex: zIndexOffset + 1 }}
            >
              {child}
            </div>
          )
        }

        return (
          <div
            key={idx}
            className={`${handles.stackItem} absolute top-0 left-0 w-auto h-auto`}
            style={{ zIndex: zIndexOffset + idx + 1 }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

const messages = defineMessages({
  title: {
    defaultMessage: '',
    id: 'admin/editor.stack-layout.title',
  },
  description: {
    defaultMessage: '',
    id: 'admin/editor.stack-layout.description',
  },
})

StackLayout.schema = {
  title: messages.title.id,
  description: messages.description.id,
}

export default StackLayout
