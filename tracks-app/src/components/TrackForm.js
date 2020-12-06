import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  //console.log(Object.keys(locations).lenght);

  return (
    <>
      <Spacer>
        <Input
          onChangeText={changeName}
          value={name}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && Object.keys(locations).length ? (
          <Button title="Save Recording" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;