import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { colors } from "../../constants/theme";

const tabs = [
  { name: "index", label: "Inicio", icon: "home" as const },
  { name: "historia", label: "Historia", icon: "time" as const },
  { name: "verdades", label: "Verdades", icon: "book" as const },
  { name: "logros", label: "Logros", icon: "heart" as const },
  { name: "tecnologia", label: "Tecnología", icon: "rocket" as const },
  { name: "quiz", label: "Quiz", icon: "game-controller" as const },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.deep,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: Platform.OS === "ios" ? 88 : 64,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
        },
        sceneStyle: { backgroundColor: colors.bg },
      }}
    >
      {tabs.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.label,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? t.icon : `${t.icon}-outline`}
                size={24}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
