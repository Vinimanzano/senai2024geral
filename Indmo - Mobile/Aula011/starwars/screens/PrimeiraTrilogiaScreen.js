import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PrimeiraTrilogiaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        A Ameaça Fantasma
      </Text>
      {'\n'}
      {'\n'}
      <Text style={styles.text}>
        É neste momento que o primeiro filme da série começa, com o Jedi Qui-Gon Jinn e o Padawan Obi-Wan Kenobi indo a Naboo avaliar a situação e resgatar a princesa Padmé Amidala das forças da Federação. É em meio a essa missão que o grupo acaba tendo de fazer uma parada forçada em Tatooine, um planeta desértico, mas que parece atrair todas as naves à deriva do espaço, como veremos futuramente.{'\n'}
        {'\n'}Em Tatooine, Qui-Gon e Obi-Wan conhecem o pequeno Anakin Skywalker, um escravo humano que vive com a sua mãe naquele mar de areia. Além de ser um excelente piloto de podracer e um terrível ator, o menino ainda carrega uma poderosa ligação com a Força. Segundo sua mãe, ele nasceu da divina providência dessa energia mística do universo, não tendo um pai. A partir dessa descoberta, os Jedi decidem levar o garoto até o Templo dos Jedi para iniciá-lo no caminho da Ordem. Enquanto isso, o clima começa a esquentar ainda mais em Naboo, principalmente quando a Federação do Comércio libera um exército de droides sobre o planeta. Tem início a batalha de Naboo, na qual as forças de segurança local em conjunto com as tropas Gungan conseguem derrotar os robôs invasores.{'\n'}
        {'\n'}Já nas esferas místicas da Força, os Jedi descobrem da existência de um Sith vivo — Darth Maul —, que acaba matando Qui-Gon em batalha. E apesar de ter um visual bacana, uma arma imponente e dar muitas cambalhotas durante as lutas, ele acaba sendo derrotado por Obi-Wan.{'\n'}
        {'\n'}Porém, a Ordem dos Jedi sabe que isso é apenas o começo, pois sempre existem dois Sith — nunca a mais, nunca a menos. Para isso, eles acabam elevando Obi-Wan à categoria de cavaleiro e permitem que ele aceite Anakin como um Padawan.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff', 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#fff', 
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default PrimeiraTrilogiaScreen;
