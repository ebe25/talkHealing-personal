import React, { useState } from 'react'
import { Flex, Image, Box, Popover } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from "./Header.style";
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import { translate } from '../../../i18n';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group } from '@mantine/core';
import Categories from '../Categories/Categories';


function Header(props: { handleSearchText: any }) {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
    const [active, setActive] = useState(false);

    return (
        <Box className={classes.containerBox}>
            <Flex className={classes.container}>
                <Image src={Images.logo} width={86} height={22} />
                <Popover
                    onOpen={() => setActive(true)}
                    onClose={() => setActive(false)}
                    radius={30}
                    position="bottom" shadow="md">
                    <Popover.Target>
                        <Flex className={classes.categories}>
                            <BaseText style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} c={"white"} txtkey={"header.allCategories"} />
                            <Image src={Images.down_arrow} style={active ? { transform: "rotate(180deg)" } : {}} width={10} height={6} />
                        </Flex>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Categories />
                    </Popover.Dropdown>
                </Popover>
                <SearchInput w={440}
                    onChange={(e) => props.handleSearchText(e.target.value)}
                    placeholder={`${translate("frequentlyAskedQuestions.search")}`} />
                <Image className={classes.cursor} src={Images.shop_icon} width={20} height={20} />
                <Image className={classes.cursor} src={Images.chat} width={20} height={20} />
                <Image className={classes.cursor} src={Images.tiptop} width={14} height={17} />
                <Flex className={classes.notification}>
                    <Image src={Images.notification_icon} width={19} height={19} />
                </Flex>
                <Image src={Images.pic} width={34} height={34} />
                <Box>
                    <BaseText c={theme.colors.blue[0]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p7} txtkey={"header.yourAccount"} />
                    <Flex className={classes.picBox}>
                        <BaseText c={theme.white} style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} txtkey={"header.name"} />
                        <Image mt={8} src={Images.down_arrow} width={10} height={6} />
                    </Flex>
                </Box>
            </Flex>
            <Flex className={classes.mobileMenu}>
                <Group position="center">
                    <Image onClick={open} src={Images.menu_icon} width={25} height={25} />
                </Group>
                <Image src={Images.logo} width={86} height={22} />
                <SearchInput width={240} placeholder={`${translate("frequentlyAskedQuestions.search")}`} />
                <Drawer opened={opened} color={theme.colors.blue[6]} onClose={close} title="LOGO">
                    <Image src={Images.pic} width={34} height={34} />
                    <Box>
                        <BaseText c={theme.colors.blue[0]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p7} txtkey={"header.yourAccount"} />
                        <Flex className={classes.picBox}>
                            <BaseText c={theme.white} style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} txtkey={"header.name"} />
                            <Image mt={8} src={Images.down_arrow} width={10} height={6} />
                        </Flex>
                    </Box>
                </Drawer>
            </Flex>
        </Box >
    )
}

export default Header