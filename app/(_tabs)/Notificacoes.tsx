import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams} from 'expo-router';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const {id} = useLocalSearchParams();
  const idUsuario ='3b700ecc-cec9-4be4-8c00-48bced543861'

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`http://academico3.rj.senac.br/api/Notificacao/FiltrarNotificacaoByUsuarioId/${idUsuario}`);
      const data = await response.json();
      setNotifications(data);
      console.log(data);
    } catch (error) {
      console.log('Ocorreu um erro ao buscar as notificações:', error);
    }
  };

  const handleLearnMore = () => {
    console.log('Botão "Ver Mais" pressionado!');
  };

  return (
    <View style={styles.container}>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.senderText}>{notification.usuarioIdAutor}</Text>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.dateText}>{notification.data}</Text>
            </View>
          </View>
          <Text numberOfLines={3} style={styles.messageText}>
            {notification.notificacaoTexto}
          </Text>
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
    //flex: 1,
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
