import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
// ユーザー登録の実装
import { signup } from "./src/components/firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {},
  title: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 24,
  },
  textInput: {
    // flex: 0.8,
    // backgroundColor: "#ddd",
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "60%",
    alignSelf: "center",
  },
  buttonTitle: {
    fontSize: 18,
    color: "#fff",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  //ユーザ登録メソッド
  signUp = () => {
    const { email, password } = this.state;
    signup(email, password);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>新規登録</Text>
        <View>
          <Text>メールアドレス</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            autoCapitalize="none"
            // placeholder="メールアドレスを入力してください"
            // placeholderTextColor="#777"
          />
        </View>
        <View>
          <Text>パスワード</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.email}
            placeholder="パスワードを入力してください"
            placeholderTextColor="#777"
          />
        </View>
        <View>
          <Text>パスワード</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder="パスワードを入力してください"
            placeholderTextColor="#777"
          />
        </View>

        <View style={{ paddingTop: 32 }}>
          <Button
            style={styles.button}
            title="送信"
            onPress={() => this.signUp()} // ユーザー登録メソッドを実行
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
