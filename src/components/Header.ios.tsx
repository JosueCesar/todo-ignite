import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { HeaderProps } from './Header';

export const Header: React.FC<HeaderProps> = ({ darkMode, handleTheme }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerDarkMode: {
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
    top: 6,
    right: 20,
  },
  themeButtonText: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  themeButtonTextDarkMode: {
    fontSize: 15,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  }
});
