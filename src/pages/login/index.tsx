import React, {useEffect, useState} from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export const Login = () => {

  const [showLoading, setShowLoading] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<string>('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)

  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogDescription, setDialogDescription] = useState('')

  /*
  const handleEmailLogin = async () => {
    try {
      setShowLoading(true)

      if (email.length <= 0) {
        setDialogTitle('Digite seu email!')
        setDialogDescription('Por favor, digite seu email e tente novamente!')
        setOpenDialog(true)
      }

      if (password.length <= 0) {
        setDialogTitle('Digite sua senha!')
        setDialogDescription('Por favor, digite sua senha e tente novamente!')
        setOpenDialog(true)
      }

      await auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          console.debug(`Sucesso ao fazer login. ${result}`)
        })
        .catch((error) => {
          setDialogTitle('Erro')
          setDialogDescription('Ocorreu um erro ao fazer login por email, tente novamente!')
          setOpenDialog(true)
        })

      setShowLoading(false)
    } catch(error) {
      setDialogTitle('Erro')
      setDialogDescription('Ocorreu um erro ao fazer login por email, tente novamente!')
      setOpenDialog(true)
      setShowLoading(false)
    }
  }
  */

  // const signOut = () => firebaseauth.signOut()

  useEffect(() => {
    // return firebaseauth.onAuthStateChanged(onAuthStateChanged) // faz o unsibcribe dos metodos quando desmonta o componente
    setIsRegistering(false)
  }, [])

  /*
  // Verifica o estado da autenticação do usuário
  const onAuthStateChanged = async (user: any) => {
    const firebaseUser = user

    if (user) {
      // Aqui é feito os demais tratamentos com as informações do usuário
      // Navigation.navigate('Home')
    }

    setShowLoading(false)
  }
  */

  const LoginScreen = () => {
    return (
      <View style={{ margin: 16 }}>
        <TextInput
          style={{ marginTop: 16 }}
          label={'Nome'}
          value={displayName} // Use value em vez de defaultValue
          onChangeText={(text) => setDisplayName(text)}
          placeholder='Nome de usuário'
        />
  
        <TextInput
          style={{ marginTop: 16 }}
          label={'Senha'}
          value={password} // Use value em vez de defaultValue
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
          placeholder='******'
        />
  
        <Button
          style={{ marginTop: 16 }}
          mode='contained'
          onPress={() => {
            console.log('Fazendo acesso');
            // navigation.navigate('Home')
          }}
        >
          Acessar
        </Button>
  
        <Button
          style={{ marginTop: 16 }}
          onPress={() => setIsRegistering(true)}
        >
          Criar Conta
        </Button>
      </View>
    )
  }
  
  const RegisterAccountScreen = () => {
    return (
      <View style={{margin: 16}}>
        <TextInput
          style={{ marginTop: 16 }}
          label={'nome'}
          defaultValue={displayName}
          onChangeText={(text) => setDisplayName(text)}
          placeholder='Nome de usuário'/>

        <TextInput
          style={{ marginTop: 16 }}
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          placeholder='email@dominio.com' />

        <TextInput
          style={{ marginTop: 16 }}
          label={'Senha'}
          defaultValue={password}
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
          placeholder='******'/>

        <TextInput
          style={{ marginTop: 16 }}
          label={'Confirme a Senha'}
          value={confirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
          onChangeText={setConfirmPassword}
          placeholder='******' />

        <Button 
          style={{ marginTop: 16 }}
          mode='contained'
          onPress={() => {
          console.log('Criando conta e fazendo acesso')
          // navigation.navigate('Home')
        }}>Criar conta e Acessar</Button>

        <Button 
          style={{ marginTop: 16 }}
          onPress={() => setIsRegistering(false)}>Cancelar</Button>
      </View>
    )
  }

  return (
      <View style={{
        flexGrow: 1,
        padding: 16,
        width: Dimensions.get('window').width
      }}>
          <Card>
              {
                !isRegistering
                  ? <LoginScreen />
                  : <RegisterAccountScreen />
              }
          </Card>
      </View>
  )
}
