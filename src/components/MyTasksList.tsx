import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function FlatListHeaderComponent({ darkMode }: { darkMode: boolean }) {
  return (
    <View>
      <Text style={darkMode ? styles.headerDarkMode : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  darkMode: boolean;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? (darkMode ? styles.taskButtonDoneDarkMode : styles.taskButtonDone) : styles.taskButton}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? (darkMode ? styles.taskMarkerDoneDarkMode : styles.taskMarkerDone) : (darkMode ? styles.taskMarkerDarkMode : styles.taskMarker)}
            />
            <Text 
              style={item.done ? (darkMode ? styles.taskTextDoneDarkMode :  styles.taskTextDone) : (darkMode ? styles.taskTextDarkMode : styles.taskText)}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDarkMode: {
    color: '#67E480',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDarkMode: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#67E480',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDarkMode: {
    color: '#67E480',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDarkMode: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(68, 71, 90, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDarkMode: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#67E480',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDarkMode: {
    color: 'rgba(225, 225, 230, 0.6)',
    textDecorationLine: 'line-through'
  }
})