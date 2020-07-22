/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Cita from './src/cita';
import Formulario from './src/formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {
      id: 1,
      paciente: 'Perro',
      propietario: 'victor',
      sintamas: 'no come nada ',
    },
    {id: 2, paciente: 'Gato', propietario: 'victor', sintamas: 'no come nada '},
    {id: 3, paciente: 'Gato', propietario: 'victor', sintamas: 'no come nada '},
    {id: 4, paciente: 'Gato', propietario: 'victor', sintamas: 'no come nada '},
  ]);

  const eliminarCita = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.encabezado}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Formulario/>

      <Text style={styles.titulo}>{ citas.length == 0 ? 'Crea tus citas' : 'Administra tus citas' }</Text>

      <FlatList
        data={citas}
        renderItem={({item}) => (
          <Cita cita={item} eliminarCita={eliminarCita} />
        )}
        keyExtractor={(citas.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    backgroundColor: '#ef2c4e',
    flex: 1,
  },
  titulo: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default App;
