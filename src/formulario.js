import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {

  const [fecha, setFecha] = useState('');
  const [hora, sethora] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    const options = { weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'}
    // console.warn('A date has been picked: ', date);
    hideDatePicker();
    setFecha(date.toLocaleDateString('es-Es', date))    

  };

  // Time

  const showTimepicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimepicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    hideTimepicker();

    const options = { hour : 'numeric', minute : '2-digits'}
    sethora(time.toLocaleString('en-US', options));
    
    console.warn('Hora ', time.toLocaleString('en-US', options));



  };

  return (
    <>
      <View style={styles.formulario}>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => alert(texto)}
        />

        <Text style={styles.label}>Propietario</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => alert(texto)}
        />

        <Text style={styles.label}>Contacto</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => alert(texto)}
          keyboardType="numeric"
        />

        <View>
          <Text style={styles.label}>Fecha</Text>
          <Button title="Selecciona fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            locale="es_Es"
            isDarkModeEnabled={true}
          />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Hora</Text>
          <Button title="Selecciona Hora" onPress={showTimepicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimepicker}
            locale="es_Es"
            isDarkModeEnabled={true}
          />
          <Text>{hora}</Text>
        </View>

        <Text style={styles.label}>Sintomas</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => alert(texto)}
          multiline
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  formulario: {
    backgroundColor: '#ffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
});

export default Formulario;
