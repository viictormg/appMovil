import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const Cita = ({cita, eliminarCita}) => {
  const dialogoEliminar = (id) => {
    eliminarCita(id);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Paciente: </Text>
      <Text style={styles.texto}>{cita.paciente}</Text>

      <Text style={styles.titulo}>Propietario: </Text>
      <Text style={styles.texto}>{cita.propietario}</Text>

      <Text style={styles.titulo}>Sintomas </Text>
      <Text style={styles.texto}>{cita.sintamas}</Text>

      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(cita.id)}
          style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#ffff',
    marginVertical: 0.5,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 6,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 14,
  },
  btnEliminar: {
    marginVertical: 7,
    backgroundColor: '#A82929',
    borderRadius: 5,
  },
  textoEliminar: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default Cita;
