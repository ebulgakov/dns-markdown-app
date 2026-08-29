import { useSignIn } from "@clerk/expo";
import { Link, Redirect, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignInScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    const { error } = await signIn.password({ emailAddress, password });

    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize();

      return <Redirect href="/profile" />;
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Авторизация</Text>
      <TextInput
        value={emailAddress}
        onChangeText={setEmailAddress}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12
        }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        secureTextEntry
        style={{
          borderWidth: 1,
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12
        }}
      />
      {errors?.fields?.identifier && (
        <Text className="text-red-500 my-2">{errors.fields.identifier?.message}</Text>
      )}
      {errors?.fields?.password && (
        <Text className="text-red-500 my-2">{errors.fields.password?.message}</Text>
      )}
      <TouchableOpacity
        onPress={onSignIn}
        disabled={fetchStatus === "fetching"}
        style={{
          backgroundColor: "#6C47FF",
          padding: 14,
          borderRadius: 8,
          alignItems: "center",
          marginBottom: 16
        }}
      >
        <Text style={{ color: "black", fontWeight: "600" }}>Войти</Text>
      </TouchableOpacity>
      <Link href="/profile/sign-up" style={{ textAlign: "center", color: "#6C47FF" }}>
        Нет аккаунта? Зарегистрироваться
      </Link>
    </View>
  );
}
