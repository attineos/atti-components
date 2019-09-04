import React from 'react'
import { isString } from 'lodash'

import { Text } from '../../Typographies'

const renderText = content => {
  if (isString(content)) {
    return <Text>{content}</Text>
  }

  return content
}

export default renderText
