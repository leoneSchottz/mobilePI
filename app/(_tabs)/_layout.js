import { Tabs, useRouter, useNavigation } from 'expo-router'
import { Text, Image } from 'react-native'
import { Ionicons, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Input,
  AspectRatio,
  NativeBaseProvider
} from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Constants } from 'expo-constants'

export default function MenuInferior() {
  const nav = useNavigation()
  const router = useRouter()
  return (
    <NativeBaseProvider>
      <Tabs
        initialRouteName="(dashboard)"
        screenOptions={{
          headerTitleContainerStyle: {
            width: '100%'
          },
          headerTitle: () => (
            <Input
              size="md"
              placeholder="Search"
              variant="filled"
              borderRadius="50"
              w="100%"
              py="1"
              px="2"
              InputLeftElement={
                <Icon
                  ml="2"
                  size="4"
                  color="gray.400"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          ),
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => (
            <IconButton
              onPress={() => router.push('/mensagens')}
              icon={<Icon as={Feather} name="message-square" />}
              _icon={{
                color: 'black',
                size: 'md'
              }}
              _ios={{
                _icon: {
                  size: 'xl'
                }
              }}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              <Avatar
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                }}
              />
            </TouchableOpacity>
          )
        }}
      >
        <Tabs.Screen
          name="(dashboard)"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialIcons name="home" size={24} color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="calendario"
          options={{
            tabBarLabel: 'Calendario',
            tabBarIcon: () => (
              <MaterialIcons name="calendar-today" size={24} color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="badges"
          options={{
            tabBarLabel: 'Badges',
            tabBarIcon: () => (
              <Ionicons name="ios-trophy" size={24} color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="arquivos"
          options={{
            tabBarLabel: 'Arquivos',
            tabBarIcon: () => (
              <MaterialIcons name="folder" size={24} color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="notificacoes"
          options={{
            tabBarLabel: 'Notificações',
            tabBarIcon: () => (
              <MaterialIcons name="notifications" size={24} color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="mensagens"
          options={{
            href: null
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  )
}
