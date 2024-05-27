import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>Sign In</Text>
      <View style={{ gap: 20, marginTop: 30 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C4C4C4",
            width: 350,
            paddingVertical: 15,
          }}
        >
          <TextInput
            style={{ fontWeight: "300", paddingLeft: 15 }}
            placeholder="Email or Phone Number"
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C4C4C4",
            width: 350,
            paddingVertical: 15,
          }}
        >
          <TextInput
            style={{ fontWeight: "300", paddingLeft: 15 }}
            placeholder="Password"
          />
        </View>
        
        <TouchableOpacity>
          <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: "#1A120B", borderRadius: 5 }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              paddingVertical: 17,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <Text style={{ fontSize: 14 }}>Don’t have an account?</Text>
        <Pressable>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}
