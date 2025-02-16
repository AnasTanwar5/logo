//arthlete page 1



import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ArthleteLogo = () => {
  return (
    <View style={styles.container}>
      {/* Main logo container */}
      <View style={styles.logoContainer}>
        {/* Logo Image */}
        <Image
          source={{ uri :"https://i.postimg.cc/sxMGJhq8/ARTHLETE-2-removebg-preview-1.png"   }}
          style={styles.logoImage}
        />

        {/* "ARTHLETE" Text */}
        <Text style={styles.logoText}>
          {/* <Text style={styles.textAR}>AR</Text>
          <Text style={styles.textTHLETE}>THLETE</Text> */}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  logoText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  textAR: {
    color: "#FFFFFF",
  },
  textTHLETE: {
    color: "#00FFFF",
  },
});

export default ArthleteLogo;
