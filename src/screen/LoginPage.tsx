import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const LoginPage = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)


    const handlelogin = () => {
       if(name === 'admin' && password === 'admin') 
       {
           setLoggedIn(true)
       }

         else {

             setLoggedIn(false)
             alert('Wrong credentials')
         }


    }

    const showlogincomponent = () => {

        return (

            <>

            <TextInput className='border-2 border-cyan-500 w-9/12 h-10 rounded-lg text-center' value={password} onChangeText={setPassword} placeholder='Enter your email' />
            <TextInput className='border-2 border-cyan-500 w-9/12 h-10 rounded-lg text-center' value={name} onChangeText={setName} placeholder='Enter your password' secureTextEntry />

            <View className='mt-8'>

                <Button title='Login' onPress={handlelogin} />
            </View>

            </>
        )


    }

    const showmessagecomponent = () => {

        return (

            <Text className='text-2xl font-bold'>Welcome to the app</Text>
        )

    }

    return (
        <View className='flex-1 justify-center items-center gap-8'>

            {
            loggedIn ?    

            showmessagecomponent() : showlogincomponent()

            
           }
            

            
            
        
        </View>
    )
}

export default LoginPage