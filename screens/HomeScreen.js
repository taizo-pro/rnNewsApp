import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import axios from "axios";

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // box: {
  //   height: 100,
  //   width: "100%",
  //   borderColor: "gray",
  //   borderWidth: 1,
  //   flexDirection: "row",
  // },
  // leftContainer: {
  //   backgroundColor: "red",
  //   width: 100,
  // },
  // rightContainer: {
  //   //描画可能エリアを目一杯使う
  //   flex: 1,
  //   padding: 10,
  //   justifyContent: "space-between",
  // },
  // text: {
  //   fontSize: 16,
  // },
  // subText: {
  //   fontSize: 12,
  //   color: "gray",
  // },
});

export default function HomeScreen() {
  //記事の配列をstateで保持する
  //stateの初期値にdummyArticlesを設定する
  const [articles, setArticles] = useState([]);

  //第1引数がメソッドのuseEffectを定義する
  //コンポーネントのマウント時にuseEffectを実行する
  useEffect(() => {
    fetchArticles();
  }, []);

  //JSXの配列を新しく作成する
  //JSON配列のarticlesを、map関数でListItemsにそれぞれ値を入れる
  // const items = articles.map((article, index) => {
  //   return (
  //     //JSX
  //     <ListItem
  //       imageUrl={article.urlToImage}
  //       title={article.title}
  //       auther={article.author}
  //       key={index}
  //     />
  //   );
  // });

  //APIを叩いて、ニュースを取得するメソッド
  //非同期の場合はasyncを用いる
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //変数stylesのcontainerを呼び出している
    <SafeAreaView style={styles.container}>
      <FlatList
        //FlatListで表示したいデータ
        data={articles}
        //itemにはdummyArticlesの１項目のarticleが入ってくる
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            auther={item.author}
            onPress={() => alert("tap")}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
