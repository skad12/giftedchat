
import { imageListClasses } from '@mui/material';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const Register = () => {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [imageURL, setImageUrl] = useState('');

   const register = () => {
    auth.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        user.updateProfile({
            displayName: name, 
            photoURL: imageURL? imageURL:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...   
          });
        // ...
      })
      .catch((error) => {

        const errorMessage = error.message;
        alert(errorMessage)
      });
      
   }

    return ( 

        <View style={styles.container}>

       <Input 
       placeholder="Enter your name"
       label="Name"
       leftIcon={{ type: 'material', name:'badge' }}
       value={name}
       onChangeText={text => setName(text)} 
       />

<Input 
       placeholder="Enter your email"
       label="Email"
       leftIcon={{ type: 'material', name:'email' }}
       value={email}
       onChangeText={text => setEmail(text)} 
       />

<Input 
       placeholder="Enter your Password"
       label="Password"
       leftIcon={{ type: 'material', name:'lock' }}
       value={password}
       onChangeText={text => setPassword(text)} 
       secureTextEntry
       />

<Input 
       placeholder="Enter your Image Url"
       label="Profile Picture"
       leftIcon={{ type: 'material', name:'face' }}
       value={ImageURL}
       onChangeText={text => setImageUrl(text)} 
    
       />

       <Button title="Register"  style={styles.button} />

        </View>
     );
}
 
export default Register;

const styles = StyleSheet.create ({
   button: {
      width: 600,
      marginTop: 10,
   },

   container: {
      flex: 1,
      alignItems:'center',
      padding: 10,
     
   }
})