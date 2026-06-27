import React from 'react'
import { SignIn } from '@clerk/nextjs'
import {neobrutalism } from '@clerk/ui/themes'

const SignInPage = () => {
  const clerkAppearance = {
    theme: [neobrutalism],
    variables: {
      colorPrimary: '#8B5CF6',
    },
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pexels-eberhardgross-12486830.jpg')",
          filter: 'saturate(1.1) contrast(1.1)',
        }}
      />
      <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-6">
          <SignIn appearance={clerkAppearance} />
        </div>
      </div>
  )
}


export default SignInPage