import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().min(6,'Password must be 6 digits longs').required('Password is required')
})

const App = () => {
  return (
    <Formik
      initialValues = {{email: '', password: ''}}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema = {formSchema}
    >

    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (<SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        <Text style={styles.errorMsg}>{errors.email}</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        <Text style={styles.errorMsg}>{errors.password}</Text>
        <Button onPress={handleSubmit} color="blue" style={styles.button} title="Submit" />
      </View>
    </SafeAreaView>)}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf:'center'
  }, input : {
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 40,
    width: '100%',
    marginVertical: 10,
    padding: 10
  }, button: {
    borderWidth: 1,
    height: 40,
    width: 40,
  }, errorMsg: {
    color: 'red',
    marginVertical: 5,
    alignSelf:'flex-start'
  }
  
});

export default App;
