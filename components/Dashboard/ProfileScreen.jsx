import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import UserCard from './UserCard';
import Ultimas3Badges from './Ultimas3Badges';
import UCList from './UCList';
import { fetchUsuario, fetchSenacCoin, fetchBadge, fetchEstudante, fetchUnidadesCurriculares } from '../../core/services/api';
import { ObterGruposByPeriodoAtivoByEstudanteId, getGruposByEstudanteIdByPeriodoId } from '../../core/services/GrupoService';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProfileScreen = () => {
  const userId = '3b700ecc-cec9-4be4-8c00-48bced543861'; // Substitua pelo ID do usuário

  const [user, setUser] = useState([]);
  const [senacCoin, setSenacCoin] = useState([]);
  const [badges, setBadges] = useState([]);
  const [estudante, setEstudante] = useState([]);
  const { grupos : unidadesCurriculares } = ObterGruposByPeriodoAtivoByEstudanteId(1)
  //

  useEffect(() => {
    const fetchData = async () => {
      setUser(await fetchUsuario(userId));

      setSenacCoin(await fetchSenacCoin(userId));

      var bds = await fetchBadge();
      setBadges(bds.slice(0, 3));

      setEstudante(await fetchEstudante(userId));

    };

    fetchData();
  }, []);

  return (
    <View>
      <Ultimas3Badges badges={badges}/>

    </View>
  );
};

export default ProfileScreen;
