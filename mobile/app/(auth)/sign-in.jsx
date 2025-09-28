import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from '@/assets/styles/auth.styles.js'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/assets/styles/colors.js' 
import { useState } from 'react'

export default function Page() {
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

  // Handle the submission of the sign-in form
        const onSignInPress = async () => {
            // guard: ensure Clerk is loaded
            if (!isLoaded) {
                setError('Authentication is not ready. Please try again shortly.')
                return
            }

            // client-side validation
            if (!emailAddress || !password) {
                setError('Please fill in all fields.')
                return
            }

            setLoading(true)
            setError('')

            try {
                const signInAttempt = await signIn.create({
                    identifier: emailAddress,
                    password,
                })

                if (signInAttempt.status === 'complete') {
                    await setActive({ session: signInAttempt.createdSessionId })
                    router.replace('/')
                } else {
                    // handle other statuses in future work
                    console.error(JSON.stringify(signInAttempt, null, 2))
                    setError('Unexpected authentication state. Please try again.')
                }
            } catch (err) {
                if (err?.errors?.[0]?.code === 'form_password_incorrect') {
                    setError('Password is incorrect. Please try again.')
                } else {
                    setError('An error occurred. Please try again.')
                }
            } finally {
                setLoading(false)
            }
        }

    return (
    <KeyboardAwareScrollView
        style={{flex:1}}
        contentContainerStyle={{flexGrow:1}}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={100}
        >
        <View style={styles.container}>
            
            <Text style={styles.title}>Welcome Back</Text>

            {error? (
                        <View style={styles.errorBox}>
                            <Ionicons name="alert-circle" size={20} color={COLORS.expense}/>
                            <Text style={styles.errorText}>{error}</Text>
                            <TouchableOpacity onPress={() => setError('')}>
                                <Ionicons name="close" size={20} color={COLORS.textLight}/>
                            </TouchableOpacity>
                        </View>
                    ) : null}

            <TextInput
                style= {[styles.input, error &&  styles.errorInput]}
                autoCapitalize="none"
                value={emailAddress}
                placeholderTextColor="#9A8478"
                placeholder="Enter email"
                editable={!loading}
                onChangeText={(email) => { setEmailAddress(email); if (error) setError('') }}
            />
            <TextInput
                style= {[styles.input, error &&  styles.errorInput]}
                value={password}
                placeholder="Enter password"
                placeholderTextColor="#9A8478"
                secureTextEntry={true}
                editable={!loading}
                onChangeText={(password) => { setPassword(password); if (error) setError('') }}
            />
            <TouchableOpacity
                style={[styles.button, (loading || !isLoaded) && { opacity: 0.6 }]}
                onPress={onSignInPress}
                disabled={loading || !isLoaded}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Sign in</Text>
                )}
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Don&#39;t have an account?</Text>
                <Link href="/(auth)/sign-up" asChild>
                    <TouchableOpacity >
                        <Text style={styles.linkText}> Sign up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    </KeyboardAwareScrollView>
    )
}