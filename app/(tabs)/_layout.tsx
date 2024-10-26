import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="SixMonthCourses" />
      <Tabs.Screen name="SixWeekCourses" />
      <Tabs.Screen name="CalculateFees" />
      <Tabs.Screen name="ContactUs" />
      <Tabs.Screen name="CourseDetails" />
    </Tabs>
  );
}
