import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { getRandom } from "../utils";

const getNewPrice = () => getRandom(100, 500);
const getTime = () => getRandom(1, 59);

const getRideDetails = () => ({
  price: getNewPrice(),
  availableSeats: Math.floor(Math.random() * 2) + 1,
  time: getTime(),
});

const carTypes = [
  { id: 1, name: "Honda City", img: require("../assets/cars/city.jpeg") },
  {
    id: 2,
    name: "Toyota Yaris",
    img: require("../assets/cars/yaris.jpeg"),
  },
  {
    id: 3,
    name: "Suzuki Swift",
    img: require("../assets/cars/swift.jpeg"),
  },
  {
    id: 4,
    name: "Toyota Corolla",
    img: require("../assets/cars/corolla.jpeg"),
  },
  {
    id: 5,
    name: "Toyota Vitz",
    img: require("../assets/cars/vitz.jpeg"),
  },
  {
    id: 6,
    name: "Honda Civic",
    img: require("../assets/cars/civic.jpeg"),
  },
  { id: 7, name: "MG 6", img: require("../assets/cars/mg6.png") },
  ,
];

const SuggestedRidesScreen = ({}) => {
  const suggestedRides = [
    {
      id: "1",
      name: "Earnest Green",
      img: require("../assets/driver-pictures/1.jpeg"),
      carId: 3,
      ...getRideDetails(),
    },
    {
      id: "2",
      name: "Winston Orn",
      img: require("../assets/driver-pictures/2.jpeg"),
      carId: 5,
      ...getRideDetails(),
    },
    {
      id: "3",
      name: "Carlton Collins",
      img: require("../assets/driver-pictures/3.jpeg"),
      carId: 1,
      ...getRideDetails(),
    },
    {
      id: "4",
      name: "Malcolm Labadie",
      img: require("../assets/driver-pictures/1.jpeg"),
      carId: 2,
      ...getRideDetails(),
    },
    {
      id: "5",
      name: "Michelle Dare",
      img: require("../assets/driver-pictures/2.jpeg"),
      carId: 6,
      ...getRideDetails(),
    },
    {
      id: "6",
      name: "Carlton Zieme",
      img: require("../assets/driver-pictures/3.jpeg"),
      carId: 7,
      ...getRideDetails(),
    },
    {
      id: "7",
      name: "Jessie Dickinson",
      img: require("../assets/driver-pictures/2.jpeg"),
      carId: 2,
      ...getRideDetails(),
    },
    {
      id: "8",
      name: "Julian Gulgowski",
      img: require("../assets/driver-pictures/1.jpeg"),
      carId: 3,
      ...getRideDetails(),
    },
    {
      id: "9",
      name: "Ellen Veum",
      img: require("../assets/driver-pictures/3.jpeg"),
      carId: 4,
      ...getRideDetails(),
    },
    {
      id: "10",
      name: "Lorena Rice",
      img: require("../assets/driver-pictures/1.jpeg"),
      carId: 2,
      ...getRideDetails(),
    },
    {
      id: "11",
      name: "Carlton Zieme",
      img: require("../assets/driver-pictures/2.jpeg"),
      carId: 5,
      ...getRideDetails(),
    },
    {
      id: "12",
      name: "Jessie Dickinson",
      img: require("../assets/driver-pictures/3.jpeg"),
      carId: 6,
      ...getRideDetails(),
    },
    {
      id: "13",
      name: "Julian Gulgowski",
      img: require("../assets/driver-pictures/1.jpeg"),
      carId: 5,
      ...getRideDetails(),
    },
    {
      id: "14",
      name: "Ellen Veum",
      img: require("../assets/driver-pictures/2.jpeg"),
      carId: 7,
      ...getRideDetails(),
    },
    {
      id: "15",
      name: "Lorena Rice",
      img: require("../assets/driver-pictures/1.jpeg"),
      carId: 2,
      ...getRideDetails(),
    },
  ];

  const bestPriceRide =
    (suggestedRides.length &&
      suggestedRides.reduce((prev, curr) => {
        return prev.price < curr.price ? prev : curr;
      })) ||
    null;

  console.log(bestPriceRide);

  const rowSeparator = () => <View style={styles.rowSeparator} />;

  const emptyListPlaceholder = () => (
    <View>
      <Text style={styles.emptyListPlaceholderText}>No rides found</Text>
    </View>
  );

  const renderItem = ({ item, index }) => {
    const car = carTypes.find(
      (item) => suggestedRides[index].carId === item.id
    );

    const ride = suggestedRides[index];

    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="#f5f6f8"
        onPress={() => console.log("index", index)}
      >
        <View style={styles.row}>
          <Image
            source={car.img || require("../assets/cars/car-placeholder.png")}
            style={styles.image}
          />
          <View style={styles.carDetailsSection}>
            <Text style={styles.carName}>{car.name}</Text>
            <Text>{ride.name}</Text>
            <View style={styles.timeView}>
              <Image
                source={require("../assets/time.png")}
                style={styles.timeIcon}
              />
              <Text style={styles.time}>
                In {ride.time} {ride.time === 1 ? "min" : "mins"}
              </Text>
            </View>
          </View>
          <View style={styles.rideDetailsSection}>
            <View style={styles.lowestPriceView}>
              <Text style={styles.price}>PKR {ride.price}</Text>
              {bestPriceRide.id === ride.id && (
                <Image
                  source={require("../assets/low-price.png")}
                  style={styles.lowestPriceIcon}
                />
              )}
            </View>
            <Text style={styles.availableSeats}>
              {ride.availableSeats}
              {ride.availableSeats === 1 ? " seat" : " seats"} available
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={suggestedRides}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={rowSeparator}
          ListEmptyComponent={emptyListPlaceholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 60,
    resizeMode: "contain",
    height: 60,
    borderRadius: 60 / 2,
  },
  listContainer: { paddingTop: 10 },
  row: {
    flexDirection: "row",
    padding: 10,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  carName: { fontWeight: "bold", textAlign: "left" },
  price: { fontWeight: "bold", color: "#28bc4e", textAlign: "right" },
  carDetailsSection: {
    alignSelf: "center",
    width: 120,
  },
  rideDetailsSection: {
    alignSelf: "center",
    width: 108,
  },
  rowSeparator: { height: 1, backgroundColor: "#f5f6f8", marginHorizontal: 10 },
  emptyListPlaceholderText: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#f5f6f8",
    color: "#434443",
    width: "100%",
    textAlign: "center",
  },
  lowestPriceView: {
    justifyContent: "space-between",
    // backgroundColor: "gold",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  availableSeats: {
    // backgroundColor: "blue",
    // paddingLeft: 2,
    // flex: 1,
  },
  lowestPriceIcon: { width: 20, height: 20, tintColor: "gold" },
  lowestPriceText: { fontSize: 8, fontWeight: "bold", color: "white" },
  timeIcon: { width: 12, height: 12, tintColor: "black" },
  timeView: {
    // backgroundColor: "gold",
    alignItems: "center",
    flexDirection: "row",
  },
  time: {
    fontWeight: "bold",
    paddingLeft: 4,
  },
});

export default SuggestedRidesScreen;
