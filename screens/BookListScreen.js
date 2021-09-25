import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { ListItem } from "react-native-elements";
import MyHeader from "../components/MyHeader";

export default class Class1 extends Component {



 render(){
  return(
         <View style={styles.container}>
          <MyHeader title="Book List" navigation={this.props.navigation} />
    <ScrollView>
  <TouchableOpacity style={{backgroundColor:'#63caf9',marginTop:70 }} >
              
 <Text style={{ marginTop:20,marginLeft:100}}>class 1 Book</Text>
 </TouchableOpacity>
  <Text style={{marginTop:20 , marginLeft:10}}>Rimjhim Bhag I </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>Marigold Book I</Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Math Magic Book I </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Ganit Ka Jadu Pustak I</Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Rain Drops Book I (Special Series )</Text>

 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 2 book</Text>
 </TouchableOpacity>
 <Text style={{marginTop:20 , marginLeft:10}}>	Rimjhim II </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Mari Gold II </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Math Magic II </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Ganit Ka Jadu II</Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Rain Drops Book II (Special Series ) </Text>

  <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 3 book</Text>
 </TouchableOpacity>
 <Text style={{marginTop:20 , marginLeft:10}}>	Rimjhim Bhag III </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Marigold Book III </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Math Magic Book III </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Ganit Ka Jadu Pustak III</Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Looking Around Book I </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Aaspass Pustak I </Text>
 
  <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 4 book</Text>
 </TouchableOpacity>
 <Text style={{marginTop:20 , marginLeft:10}}>	Rimjhim IV </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Marigold IV </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Math- Magic IV</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit Ka Jadu IV</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Looking Around </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Aaspass – EVS (Hindi)</Text>

 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 5 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Rimjhim V (Hindi) </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Marigold V (English)</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Looking Around</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Aaspass </Text>
 
 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 6 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Vasant Bhag I</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bal Ramkatha </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Durva (Second Lng.)</Text>  
<Text style={{marginTop:20 , marginLeft:10}}>	Honey Suckle </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	A Pact with the Sun</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ruchira – Prathamo Bhag</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Science </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vigyan </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Our past – History</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Hamara Atit – Itihas</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	The Earth Our Habitate – Geogrophy</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Prithvi Hamara Abhas – Bhugol </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Social and Political Life </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samajik Aur Rajniti Jeevan </Text>
 
 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 7 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Vasant II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bal Mahabharat Katha</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Durva – Second Lng. II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Honey Comb – English </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	 Alien Hand – Suppl.Eng</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ruchira II – Sanskrit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Science</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vigyan -</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Our Past II – History</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Hamara Atiti II – Itihas</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Our Environment – Geogrophy</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Hamara Paryavaran – Bhugol </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Social and Political Life II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samajik Aur Rajniti Jeevan II </Text>
 
 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 8 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Vasant – Hindi </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharat Ki Khoj – Suppl. Hindi</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Durva – Second Lng. Hindi </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Honey Dew – English  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	It So Happened – Suppl. English</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ruchira III – Sanskrit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Science </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vigyan </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Our Past III part I – History</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Hamare Aatit III Bhag I – Itihas</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Our Past III part II – History </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Hamare Aatit III Bhag II – Itihas</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Resourse & Development – Geogrophy </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhugol </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Social & Political Life  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samajik Aur Rajniti Jeevan </Text>
 

 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 9 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Kshitij  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Kritika – Hindi Suppl</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sparsh – 2nd Lang. Hindi</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sanchayan Suppl. Hindi ( 2nd Lang.)</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Beehive – English Text </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Moments – English Suppl. Rdr</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Shemusi – Sanskrit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Science </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vigyan </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	India & Comtemprary World – History </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharat Aur Samakalin Vishwa – Itihas </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Contemprary India – Geogrophy </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samakalin Bharat – Bhugol </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Economics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Arthshastra </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Democretic Politics</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Lokta0ik Rajniti </Text>
 
 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 10 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Khitij – Hindi </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Kritika – Hindi Suppl </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sparsh -2nd Lang. Hindi </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sanchayan – Suppl. Hindi ( 2nd Lang.) </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	First Flight – English Text </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Footprints without Feet – English Suppl. Rdr </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Shemusi II – Sanskrit  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Science </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Vigyan </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	India & Contemporary World II – History </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Bharat Aur Samakalin Vishwa II – Itihas </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Contempropry India – Geogrophy </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Samakalin Bharat – Bhugol </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Understanding Economic Development – Economic</Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Arthik Vikas Ki Samajh – Arthashastra </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Democratic Politics II  </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Loktaik Rajniti II </Text>

 <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 11 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Aroh – Hindi Core </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vitan – Suppl.Hindi I ( Core ) </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Antara – Hindi Lit. </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Antaral – Suppl. Hindi Lit. I</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Abhvyakti Aur Madhyam(Core & Lit Cl XI & XII)</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Hornbill – English Core </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Snapshot – Suppl. Eng Core</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Owoen words – English Lit. </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sanskrit – Bhaswati </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sanskrit – Shaswati </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Biology </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Jeev Vigyan</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Chemistry Part I</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Chemistry Part II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Rasayan Vigyan Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Rasayan Vigyan Bhag II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Physics Part I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Physics Part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhautik Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhautik Bhag II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Themes of World History</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vishva Itihas Ke Kuch Vishay</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Fundamental of Physical Geo. </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhautuk Bhugol Ke Mool Sidhant </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	India Phy. Environment </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharat Bhautik Paryavaran</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Prac.Work In Geogrophy </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhugol Mein Prayogatmak Karya </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Eco. Statistics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Arthashastra Mein Sankhiki</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Indian Eco. Development </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Arthvyavasta Ka Vikas</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Indian Constitution at Work </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya sanvidhan Ka Karya </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Pol. Theory part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Rajniti – Siddhant Bhag II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sociology Part I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samajshastra Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Understanding Society Part II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samaj Ka Bodh Bhag II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Business Studies </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vyavasaik Adhyayan </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Accts Part I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Lekhashatra Bhag I</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Accts Part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Lekhashatra Bhag II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Psychology </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Manovigyan Ka Parichaya </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Computers & Communication Technology Part I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Srijan I (Textbook in Creative Writing & Translation)</Text>  
<Text style={{marginTop:20 , marginLeft:10}}>	Living Craft Tradition of India (Textbook in Heritage) </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	The Story of Graphic Design  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Human Ecology & Family Science Part I</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Human Ecology & Family Science Part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Hastakala Ki Paramparayen </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Computers & Communication Technology Part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Exploring the Craft Tradition of India  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Graphic Design Ek Kahani Class XI  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Hastakala Paramparaon Ki Khoj</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Computer Aur Sanchar Pradyogiki Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	An Introduction to Indian Art</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Computer Aur Sanchar Pradyogiki Bhag II</Text>
 
  <TouchableOpacity style={{backgroundColor:'#63caf9'}} >
              
 <Text style={{ marginLeft:100}}>class 12 book</Text>
 </TouchableOpacity>
<Text style={{marginTop:20 , marginLeft:10}}>	Aaroh – Hindi Core </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vitan – Suppl.Hindi I ( Core ) </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Antara – Hindi Lit. </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Antaral – Suppl. Hindi Lit. I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Flemingo – English Core </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vistas – Suppl. Eng Core </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Keladaiscope – English Lit. </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sanskrit – Bhaswati II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Sanskrit – Shaswati II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics Part I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Mathematics Part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Ganit Bhag II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Biology </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Jeev Vigyan </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Chemistry I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Chemistry II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Rasayan Vigyan Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Rasayan Vigyan Bhag II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Physics I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Physics II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhautik I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhautik II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Thymes In Indian History Part I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Thymes In Indian History Part II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Thymes In Indian History Part III </Text>
 <Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Itihas Ke Kuch Ansh Bhag I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Itihas Ke Kuch Ansh Bhag II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Itihas Ke Kuch Ansh Bhag III </Text> 
<Text style={{marginTop:20 , marginLeft:10}}>	Fundamentals of Human Geogrophy </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Manav Bhugol Ke Mul Sidhant </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	India People and Economy </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharat – Log Aur Arthavyavastha </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Prac.Work In Geogrophy </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bhugol Mein Prayogatmak Karya </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Microeconomics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vyasthi Arthashastra  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Macroeconomics </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samashti Arthashastra </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Contemporary World Politics  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Samakalin Vishwa Rajniti </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Social Change in India </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharat Mein Samajik Parivartan </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Indian Society – Sociology </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Bharatiya Samaj – Samajshastra </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Business Studies I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Business Studies II </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vyavasaik Adhyayan I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Vyavasaik Adhyayan II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Accountancy I </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Accountancy II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Accountancy III</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Politics in India since Independence  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Lekhashatra I  </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Lekhashastra II</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Swata0a Bharat Mein Rajniti</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Psychology </Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Manovigyan Ka Parichaya</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Craft Tradition of India (Textbook in Heritage Craft )</Text>
<Text style={{marginTop:20 , marginLeft:10}}>	Towards a New Age of Graphic Design Class XII </Text>



 </ScrollView> 
 </View>  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})