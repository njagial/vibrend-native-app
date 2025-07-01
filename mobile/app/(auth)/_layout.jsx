import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'


export default function AuthRoutesLayout() {
    // Use `useAuth()` to access the authentication state
    const { isSignedIn } = useAuth()
    if (isSignedIn) {
    return <Redirect href={'/'} />
    }

    return <Stack screenOptions={{headerShown: false}}/>
}