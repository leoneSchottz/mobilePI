import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  const notifications = [
    {
      sender: 'Programação Web',
      date: '2023-05-19',
      time: '15:30',
      message: 'Você enviou sua tarefa para Implemente o método apagarUsuario...',
    },
    {
      sender: 'Lógica de Programação',
      date: '2023-05-19',
      time: '16:45',
      message: 'Você enviou sua tarefa para Implemente o método atualizarUsuario',
    },
    {
      sender: 'SENAC',
      date: '2023-05-19',
      time: '16:45',
      message: 'Lembre-se do nosso encontro amanhã!',
    },

  ];

  const handleLearnMore = () => {

    console.log('Botão "Ver Mais" pressionado!');
  };

  return (
    <View style={styles.container}>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.senderText}>{notification.sender}</Text>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.timeText}>{notification.time}</Text>
              <Text style={styles.dateText}>{notification.date}</Text>
            </View>
          </View>
          <Text numberOfLines={3} style={styles.messageText}>{notification.message}</Text>
          <TouchableOpacity style={styles.learnMoreButton} onPress={handleLearnMore}>
            <Text style={styles.learnMoreButtonText}>Ver Mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    height: 150,
    position: 'relative',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  senderText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  dateTimeContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 14,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
  },
  messageText: {
    bottom: 5,
    height:80,
    width: 250,
    fontSize: 16,
    marginBottom: 100,
  },
  learnMoreButton: {
    backgroundColor: '#ebebeb',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  learnMoreButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default NotificationScreen;
