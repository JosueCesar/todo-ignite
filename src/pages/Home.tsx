import React, { useState } from 'react';

import { FlatList } from 'react-native';

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

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}