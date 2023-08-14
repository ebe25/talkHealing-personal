// react and nextb import
import React, { useState } from "react";
// mantine component
// import { useForm } from '@mantine/form';
import { Flex, Image, Stack, useMantineTheme } from "@mantine/core";
//  styles component
import { createStyle } from "./ChangePasswordModal.styles";
// internals components
import { BasePasswordInput } from "@/components/elements/PasswordInput/PasswordInput";
import { BaseButton } from "@/components/elements/BaseButton/BaseButton";
import { BaseModal } from "@/components/elements/BaseModal/BaseModal";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { typography } from "../../../../../themes/Mantine/typography";
// stores import
import { useStores } from "@/models";
// others import
import { Images } from "@/public";
import { translate } from "@/i18n";
import { useDisclosure } from "@mantine/hooks";
import { SuccessfulModal } from "../SuccessfulModal/SuccessfulModal";
import { boilerPlateStyles } from "@/utils/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { error } from "console";

const changePasswordSchema = yup.object({
  currentPassword: yup.string().required("Required Field"),
  newPassword: yup
    .string()
    .required("Required Field")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum 8 characters with at least 1 lowercase, 1 uppercase, 1 number, and 1 special character."
    ),
  confirmNewPassword: yup
    .string()
    .required("Required Field")
    .oneOf([yup.ref("newPassword"), ""], "Passwords must match")
});
export const ChangePassword = (props: { opened?: any; onClose?: any }) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const [passwordFields, setPasswordFields] = useState({});
  


  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    watch,

    formState: { errors, isValid}
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    },
    resolver: yupResolver(changePasswordSchema)
  });

  const theme = useMantineTheme();

  const handlePasswordChange = (values: any) => { 
    setPasswordFields(values);
    props.onClose();
    reset();
    open();
    
  };
  return (
    <>
      <BaseModal
        size={"sm"}
        padding={"30px"}
        radius={"xl"}
        opened={props.opened}
        onClose={() => {
          props.onClose();
          reset();
        }}
        withCloseButton={false}
      >
        <Flex
          direction={i18nStore.isRTL ? "row-reverse" : "row"}
          justify={"space-between"}
          align={"center"}
        >
          <BaseText
            txtkey="profile.modal.changePasswordHeading"
            style={typography.headings[i18nStore.getCurrentLanguage()].h6}
            color={theme.colors.dark[8]}
          />

          <Image
            onClick={() => {
              props.onClose();
              reset();
            }}
            style={boilerPlateStyles.cursor}
            src={Images.close_modal_icon}
            alt="close_modal_icon"
            width={"14px"}
            height={"14px"}
          />
        </Flex>
        <form onSubmit={handleSubmit(handlePasswordChange)}>
          <Stack mt={"34px"}>
            <BaseText
              txtkey="profile.modal.currentPassword"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <BasePasswordInput
              placeholder={`${translate("profile.modal.currentPassword")}`}
              inputvalue={register("currentPassword",{onChange: () => clearErrors()})}
              autoComplete="on"
              error={errors.currentPassword?.message}
            />
          </Stack>
          <Stack my={"24px"}>
            <BaseText
              txtkey="profile.modal.newPassword"
              color={theme.colors.gray[6]}
              
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <BasePasswordInput
              placeholder={`${translate("profile.modal.newPassword")}`}
              inputvalue={register("newPassword",{onChange: () => clearErrors()})}
              autoComplete="on"
              error={errors.newPassword?.message}
            />
          </Stack>
          <Stack>
            <BaseText
              txtkey="profile.modal.confirmPassword"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <BasePasswordInput
                placeholder={`${translate("profile.modal.confirmPassword")}`}
                inputvalue={register("confirmNewPassword",{onChange: () => clearErrors()})}
              error={errors.confirmNewPassword?.message}
              autoComplete="on"
            />
          </Stack>
       
          <BaseButton
            mt={"30px"}
            w={"100%"}
            h={"40px"}
            type="submit"
            style_variant={!isValid ? "disabled" : "filled"}
            color_variant={!isValid ? "gray" : "blue"}
          >
            <BaseText txtkey="global.button.save" />
          </BaseButton>
        </form>
      </BaseModal>
      <SuccessfulModal
        opened={opened}
        onClose={close}
        para="profile.modal.passwordSuccessful"
      />
    </>
  );
};
