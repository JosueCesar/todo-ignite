import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(oldTasks => [ ...oldTasks, newTask ])
  }

  function handleMarkTaskAsDone(id: number) {
    let [task] = tasks.filter(item => item.id === id);

    setTasks(oldTasks => 
      [
        ...oldTasks.filter(item => item.id !== id),
        { 
          ...task,
          done: !task.done
        }
      ]
    );

    console.log(tasks)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(item => item.id !== id));
  }

  function handleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <View style={darkMode ? styles.containerDarkMode : styles.container}>
      <Header darkMode={darkMode} handleTheme={handleTheme} />

      <TodoInput darkMode={darkMode} addTask={handleAddTask} />

      <MyTasksList
        darkMode={darkMode}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDarkMode: {
    flex: 1,
    backgroundColor: '#191622',
  }
})