import React from "react";
import { Stack } from "expo-router";

export default () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="[id]" options={{ title: "Atividade" }} />
    <Stack.Screen name="atividades" options={{ title: "Atividades" }} />
  </Stack>
);
