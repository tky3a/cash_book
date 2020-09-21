import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useContext } from "react";
import SegmentedControl from "@react-native-community/segmented-control";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

/**
 * カレンダー
 * @param DateTimePickerModal
 * @param moment
 */
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const onPress = () => {};

const categoryPlaceholder = {
  label: "カテゴリー",
  value: null,
  color: "#9EA0A4",
};

export const HomeScreen = () => {
  const [index, setSelectedIndex] = useState(0);
  console.log("セグメントIndex", index);
  let items;
  if (index == 0) {
    items = [
      { label: "食費", value: "食費" },
      { label: "外食費", value: "外食費" },
      { label: "日用品", value: "日用品" },
      { label: "交通費", value: "交通費" },
      { label: "衣服", value: "衣服" },
      { label: "交際費", value: "交際費" },
      { label: "趣味", value: "趣味" },
      { label: "その他", value: "その他" },
    ];
  } else if (index == 1) {
    items = [
      { label: "給料", value: "給料" },
      { label: "その他", value: "その他" },
    ];
  }

  // ---- カレンダー ---- //
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  //  キャンセルした時に実行される
  const hideDatePicker = () => {
    setDatePickerVisibility(false); //
  };

  // 日付または時刻を選択した時に呼び出される
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    console.log("選択した日付", moment(date).format("YYYY/MM/DD"));
    hideDatePicker();
  };
  // ---- カレンダー ---- //

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={["支出", "収入"]}
        index={index}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text>Home Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {}}
        value={""}
        multiline={true}
        placeholder="金額"
      />
      {/* カテゴリー */}
      <Text>カテゴリー</Text>
      <RNPickerSelect
        style={styles.select}
        onValueChange={(value) => console.log(value)}
        placeholder={categoryPlaceholder}
        items={items}
      />
      {/* メモ */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => {}}
        value={""}
        multiline={true}
        placeholder="メモ"
      />
      {/* 日付 */}
      {/* これで実装: https://qiita.com/mildsummer/items/aba2a4434bb99697b8fa#%E6%97%A5%E4%BB%98%E9%81%B8%E6%8A%9E%E3%82%92%E4%BD%9C%E6%88%90 */}
      <View style={styles.input}>
        <Text onPress={showDatePicker}>日付</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          cancelTextIOS="キャンセル"
          confirmTextIOS="OK"
          headerTextIOS={"日付を選択"}
          locale="ja"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>保存</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#000",
    height: 40,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    height: 30,
    borderColor: "#999",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 18,
  },
  label: {
    fontWeight: "bold",
    color: "#999",
  },
  select: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
