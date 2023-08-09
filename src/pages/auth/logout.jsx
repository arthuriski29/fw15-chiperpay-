import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

function Logout() {
  const router = useRouter()
  const doLogout = useCallback(async()=>{
    await axios.get('/api/logout')
    router.replace('/auth/login')
  }, [router])

  React.useEffect(() => {
    doLogout()
  }, [doLogout])

  return (
    <div>Logout...</div>
  )
}

export default Logout