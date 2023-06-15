import { Tabs, useNavigation, useRouter } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Icons from '@expo/vector-icons/MaterialIcons'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext'
import Constants from 'expo-constants'
import { getUsuarioByUsuarioId } from '../../core/services/UsuarioService'
import { StyleSheet } from 'react-native'
import { fetchSenacCoin } from '../../core/services/api'
import { SenacCoin } from '../../models/SenacCoin'

const MenuInferior = () => {
  const router = useRouter();
  const nav = useNavigation();
  const headerHeight = Constants.statusBarHeight * 1.5
  const idUsuario = useContext(AuthContext)
  const { usuario } = getUsuarioByUsuarioId(idUsuario)
  const [senacCoin, setSenacCoin] = useState<SenacCoin>();

  useEffect(() => {
    const fetchData = async () => {

      setSenacCoin(await fetchSenacCoin(idUsuario));

    };

    fetchData();
  }, []);

  return (

    <Tabs

      initialRouteName="(dashboard)"
      screenOptions={{
        header: () => ((usuario && senacCoin)
            ? (
              <View style={styles.header}>
                <TouchableOpacity onPress={() => {nav.openDrawer()}}>
                  <Image
                    style={styles.avatar}
                    source={{ uri: 'data:image/png;base64,' + usuario.foto }}
                  />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{usuario.nomeCompleto}</Text>
                  <Text style={styles.infoText}>
                    Senac Coins: <Text style={styles.infoValue}>{senacCoin.saldo}</Text>
                  </Text>
                  <Text style={styles.infoText}>
                    Nível: <Text style={styles.infoValue}>{usuario.status}</Text>
                  </Text>
                </View>
                <View style={styles.notificationIcon}>
                  <TouchableOpacity
                    onPress={() => router.push("/Notificacoes")}
                    style={{ width: 60, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'lightgray', borderWidth: 1 }}>
                    <Icons name='notifications' size={24} color={'white'} />
                  </TouchableOpacity>
                </View>
            </View>
              )
           : <Text>Carregando</Text>),
        //   tabBarStyle: {
        //     position: 'absolute',
        //   },
        //   tabBarBackground: () => (
        //     <BlurView tint="light" intensity={90} style={{flex: 1,justifyContent: 'center'}}/>
        //   ),
        //   // tabBarItemStyle: {
        //   //   flex: 1,
        //   //   justifyContent: 'center',
        //   //   alignItems: 'center'
        //   // },
        tabBarShowLabel: false,
        //   tabBarLabelStyle: {fontSize: 11},
        //   tabBarInactiveTintColor: '#828282',
        //   tabBarActiveTintColor:'#F47402',
        headerStatusBarHeight: headerHeight,
        //   headerTitleAlign: 'center',
        headerTitleContainerStyle: { paddingBottom: 15 },
        headerTitle: () => (
          <>
            {usuario && <View>
              <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: '600' }}>Olá, {usuario.nomeCompleto} 👋</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                <Icons name='attach-money' size={20} color={'orange'} />
                <Text style={{ fontSize: 13 }}>{/*{usuario.senacCoin.saldo}*/}</Text>
              </View>
            </View>}
          </>

        ),
        headerRightContainerStyle: { paddingRight: 15, paddingBottom: 15 },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push("/Notificacoes")}
            style={{ width: 50, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'lightgray', borderWidth: 1 }}>
            <Icons name='notifications' size={24} color={'black'} />

            {/* <Feather
                onPress={() => router.push('/Mensagens')}
                name='message-square'
                size={35}
                color="black"
                borderRadius={50}
              /> */}
          </TouchableOpacity>

        ),
        headerLeftContainerStyle: { paddingLeft: 15, paddingBottom: 15 },
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => nav.openDrawer()}>
        //     {usuario && <Image
        //       alt='profilePic'
        //       style={{ width: 50, aspectRatio: 1, borderRadius: 50, borderWidth: 1, borderColor: 'gray' }}
        //       source={{ uri: `data:image/png;base64,${usuario.foto}` }}
        //     />}

        //   </TouchableOpacity>
        // )

      }}
    >
      <Tabs.Screen
        name="(dashboard)"
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="Calendario"
        options={{
          //tabBarLabel: 'Calendario',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="badges"
        options={{
          //tabBarLabel: 'Badges',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-trophy" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="(arquivos)/index"
        options={{
          //tabBarLabel: 'Arquivos',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="folder" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Notificacoes"
        options={{
          href: null,
          tabBarBadge: 3,
          //tabBarLabel: 'Notificações',

          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Mensagens"
        options={{
          href: null
        }}
      />
    </Tabs>
  )
}

export default MenuInferior

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00408D',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004A8D',
    borderRadius: 18
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  userInfo: {
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  infoText: {
    color: 'white',
  },
  infoValue: {
    fontWeight: '700',
    color: '#F7941D'
  },
  notificationIcon: {
    alignSelf: 'flex-start'
  }
})