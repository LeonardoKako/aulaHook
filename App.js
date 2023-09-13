import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');

  const handleCadastro = () => {
    console.log('Valores informados:');
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('E-mail:', email);
    console.log('Confirmar E-mail:', confirmarEmail);
    console.log('CPF:', cpf);
    console.log('Idioma do Currículo:', idioma);
  };

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.titulo}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput  
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme seu E-mail"
        value={confirmarEmail}
        onChangeText={setConfirmarEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Idioma do Currículo"
        value={idioma}
        onChangeText={setIdioma}
      />
      <Button title="CADASTRAR" onPress={handleCadastro} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  div: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',

  },
  titulo: {
    fontSize: 40,
    margin: 20,
    color: '#929292'
  },
  input: {
    width: '100%',
    maxWidth: 250,    
    height: 40,
    borderColor: '#d4d4d4',
    color: '#929292',
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
  },
});

export default App;
