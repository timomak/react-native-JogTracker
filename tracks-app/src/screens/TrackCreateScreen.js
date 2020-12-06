import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackFrom from "../components/TrackForm";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
//import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording, locations },
    addLocation,
  } = useContext(LocationContext);

  console.log("Count: ", Object.keys(locations).length);

  const callBack = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callBack);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackFrom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
