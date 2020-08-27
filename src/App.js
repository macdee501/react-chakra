import React from 'react';
import './App.css'
import { ThemeProvider, Box, Text, Divider, FormControl, FormErrorMessage, Input, Button, Checkbox, Stack, CSSReset } from '@chakra-ui/core'
import * as Icon from 'react-feather';
import { useForm } from 'react-hook-form';
import Circle from './components/circle';
import app from './firebase';

function App() {
  const { register, handleSubmit, errors, formState } = useForm();
  const db = app.firestore();

  const createUser = (username, password) => {
    db.collection('myCoin').doc(username).set({
      username,
      password,
    },
    {merge: true})
  }

  const onSubmit = data => {
    const { username, password } = data;
    try {
      createUser(username, password);
    } catch (error) {
      console.log('error', error);
    }
  }

  const validateUsername = (value) => {

    let error;

    if(!value) {
      error  = 'username is required';
    }
    return error || true;
  }


  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <Circle />
      <Box
        zIndex={1} 
        boxShadow='lg'
        w={380}
        h={510}
        bg='white'
        color='black'
      >
        <Box flex={1} direction='column' justify='center' align='center'>
          <Box pt={8} pl={180}>
            <Icon.Unlock size={30} color='#21d4d1' />
          </Box>
          <Box pt={5}>
            <Text fontSize={30}>Login</Text>
          </Box>
          <Box color='grey' pt={3}>
            <Text>
              To use BTC only sign in at <Box as='span' color='black' fontStyle='bold'>btc-mycoin</Box>
            </Text>
          </Box>
          <Box px={5} pt={2} color='grey'>
            <Divider />
          </Box>
          {/* this is where the form will go */}
          <form onSubmit={handleSubmit(onSubmit)}> 
              <Stack spacing={3} px={5} pt={3}>
                <FormControl isInvalid={errors.username}>
                  <Input 
                  name='username' 
                  variant="outline"
                  placeholder="Username"
                  size='md'
                  bg='#f5f7fa'
                  ref={register({ validate: validateUsername})}
                  />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <Input 
                  name='password' 
                  type='password' 
                  variant="outline" 
                  placeholder="Password"
                  ref={register} 
                  size='md'
                  bg='#f5f7fa'/>
                </FormControl>
              </Stack>
              <Stack isInLine color='grey' pt={5} px={5}>
                <Checkbox size='lg'>Save Details</Checkbox>
              </Stack>
              <Box flex={1} align='center' pt={5}>
                <Button 
                  type='submit'
                  isLoading={formState.isSubmitting}
                  boxShadow='md'
                  bg='#1aa9f6'
                  color='white'>
                  Login
                </Button>
              </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
    </div>
  );
}

export default App;
