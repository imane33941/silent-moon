import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import '../../global.css';

export default function Layout() {
  return (
    <NativeTabs tintColor="#8E97FD">
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_home_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="sleep">
        <Label>Sleep</Label>
        <Icon sf="moon.fill" drawable="custom_sleep_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="meditate">
        <Label>Meditate</Label>
        <Icon sf="circle.fill" drawable="custom_meditate_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="music">
        <Label>Music</Label>
        <Icon sf="music.note" drawable="custom_music_drawable" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>Afsar</Label>
        <Icon sf="person.fill" drawable="custom_profile_drawable" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
