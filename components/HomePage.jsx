import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import Header from './Header';
import { COLOR } from './utils/CONSTANTS';
import IncompleteTasks from './IncompleteTasks';
import { Motion, AnimatePresence } from '@legendapp/motion';
import CompleteTasks from './CompleteTasks';
import { randomId } from './utils/randomId';

const HomePage = () => {
  const [visibleModalAddTasks, setVisibleModalAddTasks] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: randomId(), title: 'By bread', completed: false },
    {
      id: randomId(),
      title: 'By car',
      completed: false,
    },
    {
      id: randomId(),
      title: 'Create bread',
      completed: true,
    },
    {
      id: randomId(),
      title: 'By payment',
      completed: false,
    },
    {
      id: randomId(),
      title: 'Send emails',
      completed: false,
    },
    {
      id: randomId(),
      title: 'By payment',
      completed: false,
    },
    {
      id: randomId(),
      title: 'Walk the dog',
      completed: false,
    },
    {
      id: randomId(),
      title: 'Finish report',
      completed: false,
    },
  ]);

  const addTask = () => {
    if (valueInput) {
      setTasks([
        { id: randomId(), title: valueInput, completed: false },
        ...tasks,
      ]);
    }
    setVisibleModalAddTasks(false);
    setValueInput('');
  };
  const clickToTask = (task) => {
    const allTasks = [];

    tasks.forEach((el) => {
      if (el.id !== task.id) {
        allTasks.push(el);
      } else {
        allTasks.push({ ...el, completed: !el.completed });
      }
    });
    setTasks(allTasks);
  };

  return (
    <View style={styles.wrapperHomePage}>
      <Header tasks={tasks} />
      <View style={styles.itemsTasks}>
        <Text style={styles.titleBlockTasks}>Incomplete</Text>
        {tasks.map((el) => (
          <View key={el.id}>
            {!el.completed && (
              <IncompleteTasks el={el} clickToTask={clickToTask} />
            )}
          </View>
        ))}
      </View>
      <View style={styles.itemsTasks}>
        <Text style={styles.titleBlockTasks}>Complete</Text>
        {tasks.map((el) => (
          <View key={el.id}>
            {el.completed && (
              <CompleteTasks el={el} clickToTask={clickToTask} />
            )}
          </View>
        ))}
      </View>
      <AnimatePresence>
        {visibleModalAddTasks && (
          <Motion.View
            onStartShouldSetResponder={addTask}
            style={styles.modalCreate}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <View style={styles.wrapperInput}>
              <TextInput
                style={styles.input}
                onChangeText={setValueInput}
                value={valueInput}
                placeholder="Enter task"
                autoFocus={visibleModalAddTasks}
                onSubmitEditing={addTask}
              />
            </View>
          </Motion.View>
        )}
      </AnimatePresence>
      <Pressable
        style={styles.buttonCreate}
        onPress={() => setVisibleModalAddTasks(!visibleModalAddTasks)}
      >
        <Text style={styles.textButtonCreate}>+</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  wrapperHomePage: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: COLOR.white,
    padding: 15,
    gap: 20,
    // borderColor: 'red',
    // borderWidth: 2
  },
  itemsTasks: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  modalCreate: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  wrapperInput: {
    backgroundColor: COLOR.white,
    height: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleBlockTasks: {
    color: COLOR.darkGrey,
    fontSize: 18,
    fontFamily: 'MontserratBold',
  },
  buttonCreate: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.mint,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 3,
    position: 'absolute',
    right: 35,
    bottom: 35,
  },
  buttonCreateHover: {
    width: 610,
    height: 610,
  },
  textButtonCreate: {
    color: COLOR.black,
    fontSize: 45,
    fontFamily: 'MontserratRegular',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 16,
    color: COLOR.black,
  },
});
