import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

export interface HeaderProps {
  darkMode: boolean;
  handleTheme(): void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, handleTheme }) => {
  return (
    <View style={darkMode ? styles.headerDarkMode : styles.header}>
      <Text style={darkMode ? styles.headerTextDarkMode : styles.headerText}>to.</Text>
      <Text style={[darkMode ? styles.headerTextDarkMode : styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
        do
      </Text>

      <TouchableOpacity style={styles.themeButton}>
        <Text
          style={darkMode ? styles.themeButtonTextDarkMode : styles.themeButtonText}
          onPress={handleTheme}
        >
          Tema
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerDarkMode: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerTextDarkMode: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  themeButton: {
    position: 'absolute',
    top: StatusBar.currentHeight,
    right: 20
  },
  themeButtonText: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Poppins-Regular'
  },
  themeButtonTextDarkMode: {
    fontSize: 15,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular'
  }
});
