// react and nextb import
import React, { useState } from 'react';
// mantine component
import { Flex, useMantineTheme } from '@mantine/core';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
import I18nFlex from '@/components/elements/I18nFlex/I18nFlex';

export const RemoveFavoriteItem = (props: {
    opened?: any;
    onClose?: any;
    id?: string;
}) => {
    const { i18nStore, userStore } = useStores();
    const theme = useMantineTheme();

    return (
        <>
            <BaseModal
                size={'sm'}
                padding={'30px'}
                radius={'xl'}
                opened={props.opened}
                onClose={() => {
                    props.onClose();
                }}
                withCloseButton={false}
            >
                <BaseText
                    txtkey="favoriteItems.RemoveModal.heading"
                    ta={'center'}
                    style={typography.label[i18nStore.getCurrentLanguage()].l4}
                    color={theme.colors.dark[8]}
                />
                <BaseText
                    mt={'10px'}
                    txtkey="favoriteItems.RemoveModal.subHeading"
                    ta={'center'}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p4}
                    color={theme.colors.gray[7]}
                />
                <I18nFlex justify={'space-between'} align={'center'} mt={'40px'}>
                    <BaseButton
                        w={'48%'}
                        style_variant={'filled'}
                        color_variant={'red'}
                        onClick={() => {
                            props.onClose();
                        }}
                    >
                        <BaseText txtkey="global.button.yes" />
                    </BaseButton>
                    <BaseButton
                        w={'48%'}
                        style_variant={'outline'}
                        color_variant={'blue'}
                        onClick={props.onClose}
                    >
                        <BaseText txtkey="global.button.no" color={theme.colors.blue[5]} />
                    </BaseButton>
                </I18nFlex>
            </BaseModal>
        </>
    );
};
