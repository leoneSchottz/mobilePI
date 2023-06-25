import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
    ],
    dayNames: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

const Calendario = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    const minDate: string = '2023-01-01';
    const maxDate: string = '2023-07-30';

    const startPeriod: string[] = ['2023-06-01', '2023-06-01'];
    const endPeriod: string[] = ['2023-07-30', '2023-07-30'];
    const schoolDays: string[] = ['2023-06-07', '2023-06-06', '2023-06-05', '2023-07-01', '2023-07-02', '2023-07-05', '2023-07-06', '2023-07-07', '2023-07-08', '2023-07-09', '2023-07-07', '2023-07-13', '2023-07-14', '2023-07-15'];
    const nonSchoolDays: string[] = ['2023-06-09', '2023-06-02', '2023-06-08', '2023-07-25'];
    const holidays: string[] = ['2023-07-25'];
    const institutionalBreak: string[] = ['2023-07-05'];
    const saturdayClasses: string[] = ['2023-06-03', '2023-07-03', '2023-07-10', '2023-07-17'];

    const handleDateSelect = (date): void => {
        setSelectedDate(date.dateString);
    };

    const verifyIntervalDays = (dates: string[], cor: string, marked: boolean, dotColor: string) => {
        const marcations: Object = {};

        for (const date of dates) {
            marcations[date] = {
                customStyles: {
                    container: {
                        backgroundColor: cor,
                    },
                    text: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    dot: {
                        width: 4,
                        height: 4,
                        borderRadius: 2,
                        marginTop: 1,
                    },
                },
                dotColor: dotColor,
                marked: marked
            };
        }

        return marcations;
    };

    const renderItem = (item) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemCard}>
                    <Text style={styles.itemText}>{item.name}</Text>
                </View>
            </View>
        );
    };


    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDateContainer}>
                <Text style={styles.emptyDateText}>Nenhum evento neste dia</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Agenda
                minDate={minDate}
                maxDate={maxDate}
                onDayPress={handleDateSelect}
                markingType={'custom'}
                markedDates={{
                    [selectedDate]: {
                        selected: true, selectedColor: 'blue'
                    },
                    ...verifyIntervalDays(startPeriod, '#A06CA0', false, ''),
                    ...verifyIntervalDays(endPeriod, '#A06CA0', false, ''),
                    ...verifyIntervalDays(holidays, 'red', false, ''),
                    ...verifyIntervalDays(nonSchoolDays, 'gray', false, ''),
                    ...verifyIntervalDays(schoolDays, 'lightgreen', true, 'red'),
                    ...verifyIntervalDays(saturdayClasses, 'lightskyblue', false, ''),
                    ...verifyIntervalDays(institutionalBreak, 'red', false, '')
                }}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: 'rgb(166,166,166)'
                }}
                renderItem={renderItem}
                renderEmptyData={renderEmptyDate}
                items={{
                    '2023-06-07': [{name: 'Evento 1'}],
                    '2023-06-06': [{name: 'Evento 2'}],
                    '2023-06-05': [{name: 'Evento 3'}]
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    itemContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    itemText: {
        color: 'black'
    },
    itemCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: 16,
    },
    emptyDateContainer: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    emptyDateText: {
        color: 'gray',
        textAlign: 'center'
    }
});

export default Calendario;
