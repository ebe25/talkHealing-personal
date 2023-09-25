import React, { useState } from 'react'
import { Flex, Image, Box, Popover, Stack } from '@mantine/core';
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
import { IconChevronDown, IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';

function Header() {
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
                            <BaseText style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} c={theme.white} txtkey={"header.allCategories"} />
                            <IconChevronDown size={18}
                                strokeWidth={3} style={active ? { transform: "rotate(180deg)" } : {}}
                                color={theme.white} />
                        </Flex>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Categories />
                    </Popover.Dropdown>
                </Popover>
                <SearchInput w={440}
                    placeholder={`${translate("frequentlyAskedQuestions.search")}`} />
                <Image className={classes.cursor} src={Images.shop_icon} width={20} height={20} />
                <Image className={classes.cursor} src={Images.chat} width={20} height={20} />
                <Link href={'./favorite-items'}>
                    <Image className={classes.cursor} src={Images.tiptop} width={14} height={17} />
                </Link>
                <Flex className={classes.notification}>
                    <Image src={Images.notification_icon} width={19} height={19} />
                </Flex>
                <Image src={Images.pic} width={34} height={34} />
                <Box>
                    <BaseText c={theme.colors.blue[0]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p7} txtkey={"header.yourAccount"} />
                    <Flex className={classes.picBox}>
                        <BaseText c={theme.white} style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} txtkey={"header.name"} />
                        <IconChevronDown size={18}
                            strokeWidth={3}
                            color={theme.white} />
                    </Flex>
                </Box>
            </Flex>
            <Flex className={classes.mobileMenu}>
                <Group position="center">
                    <IconMenu2 onClick={open} color={theme.white} />
                </Group>
                <Image src={Images.logo} width={86} height={22} />
                <SearchInput width={240} placeholder={`${translate("frequentlyAskedQuestions.search")}`} />
                <Drawer zIndex={100000} opened={opened} color={theme.colors.blue[6]} onClose={close} title="LOGO">
                    <Flex gap={10} h={300}>
                        <Image src={Images.pic} width={40} height={40} />
                        <Box>
                            <BaseText c={theme.colors.blue[0]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p7} txtkey={"header.yourAccount"} />
                            <Flex className={classes.picBox}>
                                <BaseText c={theme.black} style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} txtkey={"header.name"} />
                                <IconChevronDown size={18}
                                    strokeWidth={3}
                                />
                            </Flex>
                        </Box>
                    </Flex>
                </Drawer>
            </Flex>
        </Box >
    )
}

export default Header