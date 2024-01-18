import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetch from "../../utils/fetch";
import TodaysImages from "../../components/TodaysImages";
import { PostImage } from "../../types";
import { format,sub } from "date-fns";
import LastFiveDaysImg from "../../components/LastFiveDaysImg";

const Home = () => {
  const [TodayImg, setTodayImg] = useState<PostImage>({});
  const [last5DaysImg, setLast5DaysImg] = useState<PostImage[]>([]);

  useEffect(() => {

    const loadTodayImage = async () => {
     try {
      const response = await fetch();
      setTodayImg(response)
     } catch (error) {
        console.log(error)
     }
    };
    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgo = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const last5DaysResponse = await fetch(
          `&start_date=${fiveDaysAgo}&end_date=${todaysDate}`
        );
        setLast5DaysImg(last5DaysResponse);
      } catch (error) {
        console.log(error)
      }
    };
    loadTodayImage().catch(null)
    loadLast5DaysImages().catch(null)
  }, [])
  


  return (
    <View style={styles.container}>
      <Header />
      <TodaysImages {...TodayImg}/>
      <LastFiveDaysImg postImage={last5DaysImg}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingHorizontal:16,

  },
});


export default Home;