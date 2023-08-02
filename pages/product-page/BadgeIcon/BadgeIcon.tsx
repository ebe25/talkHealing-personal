import { useStores } from "@/models";
import { COLORS } from "@/themes/Mantine/colors";
import {
    Box, Image
} from "@mantine/core";

function BadgeIcon(props: {
  logo: string;
  title: string;
  w: string;
  h: string;
}) {
  const { i18nStore } = useStores();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "34px",
        backgroundColor: "white",
        color: "black",
        width: "84px",
        borderRadius: "26px",
        border: `solid 1px ${COLORS.gray[2]}`
      }}
      // variant="outline"
    >
      <Image src={props.logo} width={props.w} height={props.h} />
      {props.title}
    </Box>
  );
}

export default BadgeIcon;