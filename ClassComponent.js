// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//     };
//   }

//   async componentDidMount() {
//     this.fetchArticles(URL);
//   }

//   fetchArticles = async () => {
//     try {
//       const response = await axios.get(URL);
//       this.setState({ articles: response.data.articles });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   render() {
//     return(
//       <SafeAreaView style={styles.container}>
//       <FlatList
//         //FlatListで表示したいデータ
//         data={this.state.narticles}
//         //itemにはdummyArticlesの１項目のarticleが入ってくる
//         renderItem={({ item }) => (
//           <ListItem
//             imageUrl={item.urlToImage}
//             title={item.title}
//             auther={item.author}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </SafeAreaView>
//     )
//   }
// }
