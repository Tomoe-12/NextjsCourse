import Link from 'next/link'
import React from 'react'

const SettingLayout = ({children} : {children : React.ReactNode}) => {
  return (
   <main>
    <Link href={'settings/profile'}>Profile</Link>
    {children}
    </main>
  )
}

export default SettingLayout