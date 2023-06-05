import { useContext, useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Platform,
  FlatList,
  StatusBar,
} from "react-native";
import { Text } from "react-native-paper";
import { globalColors } from "../theme/colors";
import { ThemeContext } from "../theme/ThemeProvider";
import Checkbox from "../components/CheckBox";
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";
import MyButton from "../components/MyButton";
import { register } from "../services/authService";
// import BirthDatePicker from "../components/BirthDatePicker";

const Register = ({ navigation }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [identityNumber, setIdentityNumber] = useState("");

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  const onPressHandler = () => {
    if (password == confirmPassword) {
      const userForRegister = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        // birthDate: dateOfBirth,
        birthDate: "1999-12-12T15:36:32.199Z",
        identityNumber: identityNumber,
      };
      console.log("====================================");
      console.log("userForRegister: ", userForRegister);
      console.log("====================================");
      if (password == confirmPassword) {
        register(userForRegister);
      }
    }
  };

  const renderScreen = () => {
    return (
      <>
        <View style={[styles.header]}>
          <Header style={{ marginTop: Platform.OS === "ios" ? 10 : 0 }}>
            Register
          </Header>
          <Header
            style={{ color: colors.text, textAlign: "center", fontSize: 24 }}
          >
            Save Your Life In A Few Steps
          </Header>
        </View>
        <StatusBar style="auto" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 24,
          }}
        >
          <View style={styles.innerContainer}>
            <View
              style={styles.rowContainer}
            >
              <InputContainer
                label="First Name"
                placeholder="First Name"
                onChangeText={(e) => setFirstName(e)}
              />
              <InputContainer
                label="Last Name"
                placeholder="Last Name"
                onChangeText={(e) => setLastName(e)}
              />
            </View>
            <InputContainer
              label="E-mail"
              placeholder="E-mail"
              onChangeText={(e) => setEmail(e)}
              keyboardType="email-address"
            />
            <InputContainer
              label="Password"
              placeholder="Password"
              onChangeText={(e) => setPassword(e)}
              isHidden={true}
            />
            <InputContainer
              label="Confirm Password"
              placeholder="Confirm Password"
              onChangeText={(e) => setConfirmPassword(e)}
              isHidden={true}
            />
            {/* 
            <InputContainer
              label="Date Of Birth"
              placeholder="Date Of Birth"
              onChangeText={(e) => setDateOfBirth(e)}
              keyboardType="date"
            /> 
             <BirthDatePicker /> */}
            <InputContainer
              label="Identity Number"
              placeholder="Identity Number"
              onChangeText={(e) => setIdentityNumber(e)}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.rowContainer}>
              <Checkbox />
              <Text style={{ color: colors.button, fontWeight: "700" }}>
                I accept{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    color: colors.button,
                    fontWeight: "700",
                  }}
                >
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <FlatList data={[1]} renderItem={() => renderScreen()} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  header: {
    gap: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 18,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    gap: 8,
    marginBottom: 36,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    gap: 12,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* <Checkbox />
            <Text style={{ color: colors.button, fontWeight: "700" }}>
              I accept{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: colors.button,
                  fontWeight: "700",
                }}
              >
                Privacy Policy
              </Text>
            </Text>
            <MyButton
              onPress={() => {
                onPressHandler();
              }}
            >
              Register
            </MyButton> 
            <View style={styles.checkbox}>
            <Text style={[styles.text, { color: colors.text }]}>
              Already Have An Account?{" "}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={([styles.button], { marginLeft: 5 })}
            >
              <Text style={[styles.text, { color: colors.button }]}>Login</Text>
            </Pressable>
          </View>
            */
}