import { View, Text, StyleSheet, ScrollView } from 'react-native';


import HeaderUc from '../../../../components/Header/HeaderUc';

import CircularProgress from 'react-native-circular-progress-indicator';
import * as Progress from 'react-native-progress';
import TopTabsUc from '../../../../pages/Aprendizagem/TopTabsUc';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getGrupo } from '../../../../core/services/GrupoService';

export default function UcDetails() {

    type ucParam = {
        id: string
      }

    const idEstudante = 1;
    const router = useRouter();
    const {id} = useLocalSearchParams<ucParam>()
    // const { encontros } = getEnconstrosByGrupoIdByEstudanteId(id, idEstudante)
    const { grupo } = getGrupo(id)


    return (
        <>
            <HeaderUc data={grupo?.unidadeCurricular.nome} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.sectionProgressBar}>
                        <View style={styles.progressBar}>
                            <Text style={styles.progressBarTitle}>Meu progresso: </Text>
                            <Progress.Bar
                                progress={0.3}
                                width={370}
                                height={12}
                                style={{backgroundColor: '#D9D9D9'}}
                            />
                        </View>
                        <View style={styles.progressBar}>
                            <Text style={styles.progressBarTitle}>Progresso da uc: </Text>
                            <Progress.Bar
                                progress={0.5}
                                width={370}
                                height={12}
                                color={'green'}
                                style={{backgroundColor: '#D9D9D9'}}
                            />
                        </View>
                    </View>
                    {/* <View style={styles.sectionProgress}>
                        <View style={styles.progressCircle}>
                            <Text style={styles.progressTitle}>Atividades</Text>
                            <CircularProgress
                                radius={40}
                                value={50}
                                titleColor='#FFF'
                                titleFontSize={20}
                                valueSuffix={'%'}
                                inActiveStrokeColor={'#FFF'}
                                activeStrokeColor={'#EF8F2F'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#FFF'}
                                // style={{elevation: 10}}
                            />
                        </View>

                        <View style={styles.progressCircle}>
                            <Text style={styles.progressTitle}>Avaliações</Text>
                            <CircularProgress
                                radius={40}
                                value={25}
                                titleColor='blue'
                                titleFontSize={20}
                                valueSuffix={'%'}
                                inActiveStrokeColor={'#FFF'}
                                activeStrokeColor={'#EF8F2F'}
                                // activeStrokeWidth={10}
                                // inActiveStrokeWidth={14}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#FFF'}
                                // style={{elevation: 10}}
                            />
                        </View>

                        <View style={styles.progressCircle}>
                            <Text style={styles.progressTitle}>Desafios</Text>
                            <CircularProgress
                                radius={40}
                                value={25}
                                titleColor='blue'
                                titleFontSize={20}
                                valueSuffix={'%'}
                                inActiveStrokeColor={'#FFF'}
                                activeStrokeColor={'#EF8F2F'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#FFF'}
                                // style={{elevation: 10}}
                            />
                        </View>
                    </View> */}
                </ScrollView>
            </View>
            <TopTabsUc grupoId={id} unidadeCurricularId={grupo?.unidadeCurricularId}/>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#205395',
    },
    sectionProgress: {
        // backgroundColor: '#205395',
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    progressCircle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFF'
    },
    progressStyle: {
        fontWeight: '100',
        color: 'blue'
    },
    sectionProgressBar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    progressBar: {
        alignitems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    progressBarTitle: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF'
    }
})