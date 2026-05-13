import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  // Add numbers/operators
  const handlePress = (value) => {
    setInput(input + value);
  };

  // AC button
  const clearInput = () => {
    setInput('');
  };

  // Backspace button
  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  // Percentage button
  const percentage = () => {
    try {
      const result = eval(input) / 100;
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  // Equals button
  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>
        {input || '0'}
      </Text>

      {/* First Row */}
      <View style={styles.row}>
        <CalcButton title="AC" onPress={clearInput} />
        <CalcButton title="⌫" onPress={backspace} />
        <CalcButton title="%" onPress={percentage} />
        <CalcButton title="/" onPress={() => handlePress('/')} />
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <CalcButton title="7" onPress={() => handlePress('7')} />
        <CalcButton title="8" onPress={() => handlePress('8')} />
        <CalcButton title="9" onPress={() => handlePress('9')} />
        <CalcButton title="*" onPress={() => handlePress('*')} />
      </View>

      {/* Third Row */}
      <View style={styles.row}>
        <CalcButton title="4" onPress={() => handlePress('4')} />
        <CalcButton title="5" onPress={() => handlePress('5')} />
        <CalcButton title="6" onPress={() => handlePress('6')} />
        <CalcButton title="-" onPress={() => handlePress('-')} />
      </View>

      {/* Fourth Row */}
      <View style={styles.row}>
        <CalcButton title="1" onPress={() => handlePress('1')} />
        <CalcButton title="2" onPress={() => handlePress('2')} />
        <CalcButton title="3" onPress={() => handlePress('3')} />
        <CalcButton title="+" onPress={() => handlePress('+')} />
      </View>

      {/* Fifth Row */}
      <View style={styles.row}>
        <CalcButton title="0" onPress={() => handlePress('0')} />
        <CalcButton title="." onPress={() => handlePress('.')} />
        <CalcButton title="=" onPress={calculateResult} />
      </View>
    </View>
  );
}

// Reusable Button Component
function CalcButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-end',
    padding: 20,
  },

  display: {
    color: '#fff',
    fontSize: 55,
    textAlign: 'right',
    marginBottom: 25,
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#2c2c2c',
    width: 75,
    height: 75,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
