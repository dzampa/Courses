import React, { Component } from 'react';
import api from '../services/api';
import ImagePicker from 'react-native-image-picker';

import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';

export default class New extends Component {
  
  static navigationOptions = {
    headerTitle: 'Nova Publicação'
  };

  state = {
    preview: null,
    image: null,
    author:'',
    place:'',
    description:'',
    hashtags:'',
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker({
      title: 'Selecionar imagem',
    }, upload =>{
      if(upload.error){
        console.log('Erro');
      } else if (upload.didCancel){
        console.log('Used canceled');
      } else {
        const preview = {
          uri: `data:image/jpge;base64,${upload.data}`,
        }

        let prefix;
        let ext;

        if(uploade.fileName){
          [prefix, ext] = upload.fileName.split('.')
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }        

        const image = {
          uri : upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`
        };
        this.setState({preview, image});
      }
    })
  };

  handleSubmit = async() => {
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);
    
    this.props.navigation.navigate('Feed');
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.selectButton} onPress={this.handleSelectImage}>
          <Text style={styles.selectButtonText}>Selecionar Imagem</Text>
        </TouchableOpacity>

        { this.state.preview && <Image  style={styles.selectButton} source={this.state.preview}/>}

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author=>this.setState({author})}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Local da Foto"
          placeholderTextColor="#999"
          value={this.state.palce}
          onChangeText={palce=>this.setState({palce})}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Descrição"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={description=>this.setState({description})}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Hastags"
          placeholderTextColor="#999"
          value={this.state.hashtags}
          onChangeText={hashtags=>this.setState({hashtags})}
        />
        <TouchableOpacity style={styles.shareButton} onPress={this.handleSubmit}>
          <Text style={styles.shareButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },

  shareButton: {
    backgroundColor: '#7159c1',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
});

