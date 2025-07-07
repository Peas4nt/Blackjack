import React from 'react'
import type { HeaderProps } from '../types'

export const Header = ({ data }: {data:HeaderProps[]} ) => {
  return (
    <header>
      <nav>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
