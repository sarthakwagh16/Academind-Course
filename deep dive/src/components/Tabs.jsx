import React from 'react'

export default function Tabs({buttons, children}) {
  return (
    <>
    <menu>
        {buttons}
    </menu>
    {children}
    </>
  )
}
