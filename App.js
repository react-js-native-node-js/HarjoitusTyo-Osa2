import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import Etusivu from './pages/Etusivu';

 //haetaan Sää tiedostot
import EnglantiSaa from './Saat/EnglantiSaa';
import ItaliaSaa from './Saat/ItaliaSaa';
import NorjaSaa from './Saat/NorjaSaa';
import RuotsiSaa from './Saat/RuotsiSaa';
import SuomiSaa from './Saat/SuomiSaa';

//haetaan Matkalomake tiedostoa
import Matkalomake from './Matkalomake/Matkalomake';

//haetaan InfoSivut tiedostoa
import EnglantiInfo from './KohdeInfo/EnglantiInfo';
import ItaliaInfo from './KohdeInfo/ItaliaInfo';
import NorjaInfo from './KohdeInfo/NorjaInfo';
import RuotsiInfo from './KohdeInfo/RuotsiInfo';
import SuomiInfo from './KohdeInfo/SuomiInfo';


const englantiInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Lontoo',
    valuutta: 'Valuutta: Punta',
    pintAala: 'Pinta-ala: 130 395 km²',
    hallitsija: 'Hallitsija: Elisabeth II',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Big Ben Kello',
    valuutta: 'Buckinghamin palatsi',
    pintAala: 'London Eye',
    hallitsija: 'Tower Bridge',
  },
  ];  

const italiaInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Rooma',
    valuutta: 'Valuutta: euro',
    pintAala: 'Pinta-ala: 301 338 km²',
    hallitsija: 'Presidentti:	Sergio Mattarella',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Colosseum',
    valuutta: 'Pisan Torni',
    pintAala: 'Pantheon',
    hallitsija: 'Duomo di Milano',
  },
  ];  

const norjaInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Oslo',
    valuutta: 'Valuutta: Norjan kruunu ',
    pintAala: 'Pinta-ala: 323 787 km²',
    hallitsija: 'Kuningas: Harald V',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Preikestolen',
    valuutta: 'Viikinkilaivamuseo',
    pintAala: 'Akershusin linna',
    hallitsija: 'Oslon kuninkaallinen linna',
  },
  ];  

  const suomiInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: 	Helsinki',
    valuutta: 'Valuutta: Euro',
    pintAala: 'Pinta-ala: 338 448,72 km²',
    hallitsija: 'Presidentti:	Sauli Niinistö',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Suomenlinna',
    valuutta: 'Joulupukin Pajakylä',
    pintAala: 'Kauppatori',
    hallitsija: 'Senaatintori',
  },
  ];  

  const ruotsiInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Tukholma',
    valuutta: 'Valuutta: ruotsin kruunu ',
    pintAala: 'Pinta-ala: 450 295 km²',
    hallitsija: 'Kuningas: Kaarle XVI Kustaa',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Tukholman vanhakaupunki',
    valuutta: 'Kuninkaallinen linna',
    pintAala: 'Drottningholmin linna',
    hallitsija: 'ABBA-museo',
  },
  ];  


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Etusivu screenProps={ruotsiInfo}/> 
       
      </View> 
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default App;
