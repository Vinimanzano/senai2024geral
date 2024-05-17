import React, {useRefEffect, useState} from 'React';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { getCharacters } from '../marvel-app/api/marvelApi';


const CharcarterList = () => {
    const [characters, setCharacters] = useState([]);
    
    useRefEffect(() => {
        const fetchcharacters = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };
        fetchcharacters();
    }, []);
    const renderItem = ({item}) => {
        <View Style={StyleSheet.item}> 
            <Image 
            source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
            style={style.image}
            />
            <Text Style={styles.name}>{item.name}</Text>
        </View>
    };
    return (
        <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        />
    );
};

const style = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBotton: '10',
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    name: {
        fontSize: 20,
    },
})