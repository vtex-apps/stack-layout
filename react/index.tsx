import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
const CSS_HANDLES = ['stackContainer', 'stackItem'] as const

interface Props {
  zIndexOffset?: number
}

const StackLayout: StorefrontFunctionComponent<Props> = ({
  children,
  zIndexOffset = 0
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const intl = useIntl()
  return (
    <div className={`${handles.stackContainer} relative`} aria-label={intl.formatMessage(
      { id: 'store/stack-layout.aria-label' })}>
      {React.Children.toArray(children).map((child, idx) => {

        // This allows the user customize the stackItem via CSS, via the blockClass of each child
        const childBlockClass = (child as any)?.props?.blockProps?.blockClass || ''
        let stackItemBlockClass = ''
        if (childBlockClass) {
          stackItemBlockClass = applyModifiers(handles.stackItem, childBlockClass)
        }

        if (idx === 0) {
          return (
            <div
              key={idx}
              className={`${applyModifiers(handles.stackItem, 'first')} ${stackItemBlockClass}`}
              style={{ zIndex: zIndexOffset + 1 }}
            >
              {child}
            </div>
          )
        }

        return (
          <div
            key={idx}
            className={`${handles.stackItem} absolute top-0 left-0 w-auto h-auto ${stackItemBlockClass}`}
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
