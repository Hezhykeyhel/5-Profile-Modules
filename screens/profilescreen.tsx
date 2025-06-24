import { Box } from "@/components/Restyle";
import React from "react";
import { Tiles } from "../components";

const ProfileScreen = () => {
  const profile = [
    {
      name: "Edit Profile",
      subtitle: "Update your personal information",
    },
    {
      name: "Change Password",
      subtitle: "Secure your account with a new password",
    },
    {
      name: "Notification Settings",
      subtitle: "Manage your notification preferences",
    },
    {
      name: "Privacy Settings",
      subtitle: "Control your privacy options",
    },
    {
      name: "Account Information",
      subtitle: "View your account details",
    },
    {
      name: "Logout",
      subtitle: "Sign out of your account",
    },
  ];
  return (
    <Box marginTop="Ml">
      {profile.map((item) => (
        <Box marginHorizontal="sm" marginBottom="sm" key={item.name}>
          <Tiles
            key={item.name}
            text={item.name}
            onProceed={() => console.log(`${item.name} pressed`)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProfileScreen;
