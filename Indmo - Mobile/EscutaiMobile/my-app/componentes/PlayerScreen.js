import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; // Importar ícones do AntDesign

const songs = [
  { title: 'Kamisa10', file: require('../songs/kamisa10.mp3') },
  { title: 'Borges', file: require('../songs/Borges.mp3') },
  { title: 'Chitãozinho & Xororó - Galopeira', file: require('../songs/Galopeira.mp3') },
  { title: 'Luan Pereira - Estrada de Chão', file: require('../songs/EstradadeChao.mp3') },
  { title: 'Churrasquinho - Menos é Mais', file: require('../songs/MenoseMais.mp3') },
  { title: 'MC Paulin da Capital e Mc Daniel - Renasci das Cinzas', file: require('../songs/Renasci.mp3') },
  { title: 'Poesia Acústica #15', file: require('../songs/PoesiaAcustica15.mp3') },
  { title: 'Ana Castela - Ram Tchum', file: require('../songs/AnaCastela.mp3') },
];

export default function PlayerScreen() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  useEffect(() => {
    playSelectedSong();
  }, [selectedSongIndex]);

  const playSelectedSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      songs[selectedSongIndex].file
    );
    setSound(newSound);
    setIsPlaying(true);
    await newSound.playAsync();
  };

  const handleNextSong = () => {
    setSelectedSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSong = () => {
    setSelectedSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/logo.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Player de Música</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePreviousSong} style={styles.navigationButton}>
            <AntDesign name="stepbackward" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={isPlaying ? stopSound : playSelectedSong} style={styles.playButton}>
            <AntDesign name={isPlaying ? "pausecircle" : "playcircleo"} size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextSong} style={styles.navigationButton}>
            <AntDesign name="stepforward" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={songs}
          renderItem={({ item }) => <Text style={styles.songItem}>{item.title}</Text>}
          keyExtractor={(item) => item.title}
          style={styles.songList}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,    
  },
  navigationButton: {
    padding: 10,
  },
  playButton: {
    padding: 10,
  },
  songList: {
    flex: 1,
  },
  songItem: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
