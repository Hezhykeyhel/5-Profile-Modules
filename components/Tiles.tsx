import Icon, { IconName } from "@/assets/icons/Icon";
import { Pressable, Text } from "@/components/Restyle";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

type TileProps = {
  text: string;
  icon?: IconName;
  onProceed: () => void;
};

const Tiles = (props: TileProps) => {
  const { icon, text, onProceed } = props;
  return (
    <Pressable
      backgroundColor="white"
      borderRadius={8}
      borderWidth={1}
      flexDirection="row"
      justifyContent="space-between"
      borderColor="lightGrey"
      onPress={onProceed}
      padding="md"
    >
      <Text variant="medium14">{text}</Text>
      {icon ? (
        <Icon name={icon} size={14} />
      ) : (
        <FontAwesome name="chevron-right" size={14} color="grey" />
      )}
    </Pressable>
  );
};

export default Tiles;
