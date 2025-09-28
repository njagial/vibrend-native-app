import { ClerkProvider } from '@clerk/clerk-expo'
import  TokenCache from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import * as React from 'react'

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={TokenCache}>
      <Slot />
    </ClerkProvider>
  )
}