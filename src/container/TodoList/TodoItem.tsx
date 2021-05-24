import React from 'react'
import { Checkbox } from 'antd'

export default ({ item, onChange }: any) => {
  return (
    <div>
      <Checkbox checked={item.checked} onChange={() => onChange(item)} />
      &nbsp;&nbsp;{item.text}
    </div>
  )
}
