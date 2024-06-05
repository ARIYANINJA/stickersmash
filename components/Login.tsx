import * as React from "react";
import {
  ActivityIndicator,
  HelperText,
  TextInput as TextInputPaper,
} from "react-native-paper";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "./Buttons";
import Container from "./Container";
import TextInput from "./TextInput";
import { sizes } from "../styles";

const background = require("../assets/images/headerbg.jpg");
const logo = require("../assets/images/logo.png");
const pattern = require("../assets/images/pattern.png");

type FormData = {
  username: string;
  password: string;
};

const FieldRule = {
  required: { value: true, message: "Заавал бөглөнө үү" },
  minLength: { value: 4, message: "Багадаа 4 тэмдэгт" },
};

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [hidePassword, setHidePassword] = React.useState(true);

  const behavior = Platform.OS === "ios" ? "padding" : "height";
  function onSubmit(data) {
    setLoading(true);
    console.log(data);
    // login(data.username, data.password).catch((e) => {
    //   Alert.alert("Алдаа", e.message);
    //   setLoading(false);
    // });
  }
  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.flex}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <ImageBackground
              source={background}
              style={[styles.background, styles.image]}
            >
              <Image source={logo} />
            </ImageBackground>
            <Container>
              {errors?.username && (
                <HelperText type="error">{errors.username.message}</HelperText>
              )}
              <Controller
                control={control}
                rules={FieldRule}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    autoCapitalize="none"
                    disabled={loading}
                    label="Нэвтрэх нэр"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    style={styles.input}
                  />
                )}
              />
              {errors?.password && (
                <HelperText type="error">{errors.password.message}</HelperText>
              )}
              <Controller
                control={control}
                rules={FieldRule}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    autoCapitalize="none"
                    disabled={loading}
                    label="Нууц үг"
                    value={value}
                    onBlur={onBlur}
                    secureTextEntry={hidePassword}
                    right={
                      <TextInputPaper.Icon
                        icon="eye"
                        onPress={() => setHidePassword(!hidePassword)}
                      />
                    }
                    onChangeText={onChange}
                    style={styles.input}
                  />
                )}
              />
              {loading && (
                <ActivityIndicator animating style={styles.loading} />
              )}
              <Button disabled={loading} onPress={handleSubmit(onSubmit)}>
                Нэвтрэх
              </Button>
            </Container>
          </View>
          <Image source={pattern} style={styles.image} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    aspectRatio: 1.25,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flex: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
  loading: { marginBottom: sizes.margin },
  input: {
    marginBottom: 20,
  },
});
