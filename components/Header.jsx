import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getCurrentDateFormatMonDateYear} from "./utils/getDate";
import {COLOR} from "./utils/CONSTANTS";

const Header = ({tasks}) => {
    const [taskComplete, setTaskComplete] = useState({completed: 0, incomplete: 0})

    useEffect(() => {
        let completed = 0;
        let incomplete = 0;
        tasks.forEach((el) => {
            if (el.completed) {
                completed += 1
            } else {
                incomplete += 1

            }
        })
        setTaskComplete({completed: completed, incomplete: incomplete})
    }, [tasks])


    return (
        <View style={styles.wrapperHeader}>
            <Text style={styles.titleCurrentDate}>{getCurrentDateFormatMonDateYear()}</Text>
            <Text
                style={styles.titleAllTasks}>{taskComplete.incomplete} incomplete, {taskComplete.completed} completed</Text>
        </View>
    );
};

export default Header;


const styles = StyleSheet.create({
    wrapperHeader: {
        backgroundColor: COLOR.white,
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderColor: COLOR.brLine,
        paddingBottom: 16,

    },
    titleCurrentDate: {
        color: COLOR.black,
        fontSize: 32,
        fontFamily: 'MontserratBold',
    },
    titleAllTasks: {
        color: COLOR.darkGrey,
        fontSize: 14,
        fontFamily: 'MontserratSemiBold',
        marginTop: 8,
    },
});
