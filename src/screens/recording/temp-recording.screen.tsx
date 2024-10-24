import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  PermissionsAndroid,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";
import RNFetchBlob from "rn-fetch-blob";

const screenWidth = Dimensions.get("screen").width;

// TypeScript interface for state
interface AudioPathState {
  playPath: string[];
}

// TypeScript Component
const AudioRecorder: React.FC = () => {
  const [recordTime, setRecordTime] = useState<number>(0);
  const [playTime, setPlayTime] = useState<string>("00:00:00");
  const [duration, setDuration] = useState<string>("00:00:00");
  const [playPath, setPlayPath] = useState<AudioPathState["playPath"]>([]);

  const recordInterval = useRef<NodeJS.Timeout | null>(null);
  const startPlayer = useRef<string | null>(null);

  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const dirs = RNFetchBlob.fs.dirs;

  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  // Handle permissions for Android and iOS
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);

      if (
        granted["android.permission.RECORD_AUDIO"] !==
          PermissionsAndroid.RESULTS.GRANTED ||
        granted["android.permission.WRITE_EXTERNAL_STORAGE"] !==
          PermissionsAndroid.RESULTS.GRANTED ||
        granted["android.permission.READ_EXTERNAL_STORAGE"] !==
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Permissions not granted");
        return false;
      }
    } else if (Platform.OS === "ios") {
      const audioPermission = await request(PERMISSIONS.IOS.MICROPHONE);
      if (audioPermission !== RESULTS.GRANTED) {
        console.log("Microphone permission not granted");
        return false;
      }

      const resultMicrophone = await request(
        Platform.OS === "ios"
          ? PERMISSIONS.IOS.MICROPHONE
          : PERMISSIONS.ANDROID.RECORD_AUDIO,
      );

      const resultStorage = await request(
        Platform.OS === "ios"
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );

      if (
        resultMicrophone === RESULTS.GRANTED &&
        resultStorage === RESULTS.GRANTED
      ) {
        console.log("Permissions granted");
      } else {
        console.log("Permissions denied");
      }
    }
    return true;
  };

  const startChunkRecording = async () => {
    const path = `${dirs.CacheDir}/chunk${new Date().getTime()}.aac`;
    await audioRecorderPlayer.startRecorder(path);
  };

  const createChunkRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setPlayPath((prev) => [...prev, result]);
    await startChunkRecording();
  };

  const setRecordInterval = (isStart: boolean) => {
    if (isStart) {
      timerInterval.current = setInterval(() => {
        setRecordTime((prev) => prev + 1);
      }, 1000);
    } else if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const onStartRecord = async () => {
    const permissionGranted = await requestPermissions();
    if (!permissionGranted) return;

    const audioSet = {
      AudioEncoderAndroid: "aac",
      AudioSourceAndroid: "mic",
      AVEncoderAudioQualityKeyIOS: "high",
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: "aac",
      OutputFormatAndroid: "aac_adts",
    };

    startChunkRecording();
    setRecordInterval(true);

    // Record in chunks of 20 seconds
    recordInterval.current = setInterval(() => {
      createChunkRecord();
    }, 20000);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setPlayPath((prev) => [...prev, result]);

    if (recordInterval.current) {
      clearInterval(recordInterval.current);
      recordInterval.current = null;
    }
    setRecordInterval(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleTxt}>Audio Recorder Player</Text>
      <Text style={styles.txtRecordCounter}>{recordTime}</Text>
      <View style={styles.viewRecorder}>
        <View style={styles.recordBtnWrapper}>
          <Pressable style={styles.btn} onPress={onStartRecord}>
            <Text style={styles.txt}>Record</Text>
          </Pressable>
          <Pressable
            style={[styles.btn, { marginLeft: 12 }]}
            onPress={onStopRecord}
          >
            <Text style={styles.txt}>Stop</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={playPath}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.viewPlayer}>
            <TouchableOpacity style={styles.viewBarWrapper}>
              <View style={styles.viewBar}>
                <View style={styles.viewBarPlay} />
              </View>
            </TouchableOpacity>
            <Text style={styles.txtCounter}>
              {playTime} / {duration}
            </Text>
            <View style={styles.playBtnWrapper}>
              <Pressable
                style={styles.btn}
                onPress={async () => {
                  if (startPlayer.current) {
                    await audioRecorderPlayer.stopPlayer(startPlayer.current);
                  }
                  audioRecorderPlayer.addPlayBackListener((e) => {
                    if (e.currentPosition === e.duration) {
                      audioRecorderPlayer.stopPlayer(startPlayer.current);
                    }
                    setPlayTime(
                      audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
                    );
                  });
                  startPlayer.current =
                    await audioRecorderPlayer.startPlayer(item);
                }}
              >
                <Text style={styles.txt}>Play</Text>
              </Pressable>
              <Pressable
                style={[styles.btn, { marginLeft: 12 }]}
                onPress={async () => {
                  await audioRecorderPlayer.stopPlayer();
                  audioRecorderPlayer.removePlayBackListener();
                }}
              >
                <Text style={styles.txt}>Stop</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455A64",
    flexDirection: "column",
    alignItems: "center",
  },
  titleTxt: {
    marginTop: 100,
    color: "white",
    fontSize: 28,
  },
  viewRecorder: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  recordBtnWrapper: {
    flexDirection: "row",
  },
  viewPlayer: {
    marginTop: 60,
    alignSelf: "stretch",
    alignItems: "center",
  },
  viewBarWrapper: {
    marginTop: 28,
    marginHorizontal: 28,
    alignSelf: "stretch",
  },
  viewBar: {
    backgroundColor: "#ccc",
    height: 4,
    alignSelf: "stretch",
  },
  viewBarPlay: {
    backgroundColor: "white",
    height: 4,
    width: 0,
  },
  txtRecordCounter: {
    marginTop: 32,
    color: "white",
    fontSize: 20,
    textAlignVertical: "center",
    fontWeight: "200",
    letterSpacing: 3,
  },
  txtCounter: {
    marginTop: 12,
    color: "white",
    fontSize: 20,
    textAlignVertical: "center",
    fontWeight: "200",
    letterSpacing: 3,
  },
  playBtnWrapper: {
    flexDirection: "row",
    marginTop: 40,
  },
  btn: {
    borderColor: "white",
    borderWidth: 1,
  },
  txt: {
    color: "white",
    fontSize: 14,
    marginHorizontal: 8,
    marginVertical: 4,
  },
});

export default AudioRecorder;
