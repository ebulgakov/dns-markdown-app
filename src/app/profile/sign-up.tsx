import { useSignUp } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import type { Href } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUp = async () => {
    const { error } = await signUp.password({ emailAddress, password });

    if (!error) {
      await signUp.verifications.sendEmailCode();
      setPendingVerification(true);
    }
  };

  const onVerify = async () => {
    await signUp.verifications.verifyEmailCode({ code });

    if (signUp.status === "complete") {
      await signUp.finalize();
    }
  };

  if (pendingVerification) {
    return (
      <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          Verify your email
        </Text>
        <TextInput
          value={code}
          onChangeText={setCode}
          placeholder="Enter verification code"
          keyboardType="number-pad"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 12,
            marginBottom: 16
          }}
        />
        {errors?.fields?.code && (
          <Text style={{ color: "red", marginBottom: 8 }}>{errors.fields.code[0]?.message}</Text>
        )}
        <TouchableOpacity
          onPress={onVerify}
          disabled={fetchStatus === "fetching"}
          style={{
            backgroundColor: "#6C47FF",
            padding: 14,
            borderRadius: 8,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Create an account</Text>
      <TextInput
        value={emailAddress}
        onChangeText={setEmailAddress}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12
        }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12
        }}
      />
      {errors?.fields?.emailAddress && (
        <Text style={{ color: "red", marginBottom: 8 }}>
          {errors.fields.emailAddress[0]?.message}
        </Text>
      )}
      {errors?.fields?.password && (
        <Text style={{ color: "red", marginBottom: 8 }}>{errors.fields.password[0]?.message}</Text>
      )}
      <TouchableOpacity
        onPress={onSignUp}
        disabled={fetchStatus === "fetching"}
        style={{
          backgroundColor: "#6C47FF",
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
          marginBottom: 16
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Sign up</Text>
      </TouchableOpacity>
      <Link href="/profile/sign-in" style={{ textAlign: "center", color: "#6C47FF" }}>
        Already have an account? Sign in
      </Link>
      <View nativeID="clerk-captcha" />
    </View>
  );
}
