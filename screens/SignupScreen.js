import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function SignupScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>Sign Up</Text>
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
            placeholder="Full Name"
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
            placeholder="Full Name"
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
            placeholder="Full Name"
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
            placeholder="Full Name"
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
            placeholder="Full Name"
          />
        </View>
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
        <Text style={{ fontSize: 14 }}>Already have an account?</Text>
        <Pressable>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}
