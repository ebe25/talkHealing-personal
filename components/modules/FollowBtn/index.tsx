import { IconCheck } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';

export default function FollowBtn() {
  const theme = useMantineTheme();
  const handleNotification = () => {
    notifications.show({
      loading: false,
      message: 'User profile followed',
      autoClose: 2000,
      withCloseButton: true,
      icon: <IconCheck size={60} strokeWidth={5} color={theme.colors.green[0]} />,
      style: {backgroundColor: theme.colors.cyan[2], borderRadius: 15, fontSize: '110px', fontWeight: 700}
    });
  };
  return (
    <BaseButton
      style_variant="filled"
      color_variant="lime"
      radius={15}
      onClick={handleNotification}
    >
      <BaseText>Follow</BaseText>
    </BaseButton>
  );
}
