// react and nextb import
import React from "react";
// mantine component

import { Box, Flex, Image, Select, useMantineTheme } from "@mantine/core";
// styles components
import { createStyle } from "./AddressModal.styles";
// internals components
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
import { Input } from "@/components/elements/Input/Input";
//external
import { Country, State, City } from "country-state-city";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { boilerPlateStyles } from "@/utils/styles/styles";
import { useForm } from "react-hook-form";

const addressModalSchema = yup.object({
  addressOne: yup
    .string()
    .required(`${translate("profile.error.addressOneError")}`),
  addressTwo: yup
    .string()
    .required(`${translate("profile.error.addressTwoError")}`),
  country: yup.string().required(`${translate("profile.error.countryError")}`),
  state: yup.string().required(`${translate("profile.error.stateError")}`),
  district: yup
    .string()
    .required(`${translate("profile.error.districtError")}`),
  code: yup.string().required(`${translate("profile.error.postalCodeError")}`)
});

export const AddressModal = (props: {
  opened?: any;
  onClose?: any;
  modalHeading?: any;
  isEdit?: boolean;
}) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    getValues,

    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      addressOne: "",
      addressTwo: "",
      country: "",
      state: "",
      district: "",
      code: ""
    },
    resolver: yupResolver(addressModalSchema)
  });

  const handleAddressChange = () => {
    props.onClose();
    reset();
    open();
  };
  const handleEditAddress = () => {
    props.onClose();
    reset();
    open();
  };

  let countryLists: any = [];

  {
    Country.getAllCountries().map((key) => {
      countryLists.push({
        label: key.name,
        value: key.name
      });
    });
  }

  const countryCode = Country.getAllCountries()
    .filter((country) => {
      if (country.name === getValues("country")) return country.isoCode;
    })
    .map((country) => country.isoCode);

  let stateLists: any = [];
  {
    State.getStatesOfCountry(countryCode[0]).map((key) => {
      stateLists.push({
        label: key.name,
        value: key.name
      });
    });
  }

  const countryStateCode = State.getStatesOfCountry(countryCode[0])
    .filter((country) => {
      if (country.name === getValues("state")) return country.isoCode;
    })
    .map((code) => code.isoCode);

  let stateCityLists: any = [];
  {
    City.getCitiesOfState(countryCode[0], countryStateCode[0]).map((key) => {
      stateCityLists.push({
        label: key.name,
        value: key.name
      });
    });
  }

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
        <form onSubmit={handleSubmit(handleAddressChange)}>
          <Flex
            direction={i18nStore.isRTL ? "row-reverse" : "row"}
            justify={"space-between"}
            align={"center"}
          >
            <BaseText
              txtkey={props.modalHeading}
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

          <Box mt={"30px"} dir={i18nStore.isRTL ? "rtl" : "ltr"}>
            <BaseText
              className={classes.align}
              txtkey="profile.addressModal.country"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input
              }}
              mt={"xs"}
              // dir='rtl'
              searchable
              hoverOnSearchChange={false}
              placeholder={`${translate("profile.addressModal.country")}`}
              w={"100%"}
              variant="default"
              radius={"xl"}
              data={countryLists}
              {...register("country")}
              onChange={(event: any) => {
                clearErrors();
                setValue("country", event);
              }}
              error={errors.country?.message}
            />
          </Box>
          <Box mt={"20px"} dir={i18nStore.isRTL ? "rtl" : "ltr"}>
            <BaseText
              txtkey="profile.addressModal.state"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input
              }}
              mt={"xs"}
              searchable
              hoverOnSearchChange={false}
              placeholder={`${translate("profile.addressModal.state")}`}
              // style={boilerPlateStyles.input}
              w={"100%"}
              variant="default"
              radius={"xl"}
              // size="lg"
              data={stateLists}
              {...register("state")}
              onChange={(event: any) => {
                clearErrors();
                setValue("state", event);
              }}
              error={errors.state?.message}
            />
          </Box>
          <Box mt={"20px"} dir={i18nStore.isRTL ? "rtl" : "ltr"}>
            <BaseText
              txtkey="profile.addressModal.district"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input
              }}
              mt={"xs"}
              searchable
              hoverOnSearchChange={false}
              placeholder={`${translate("profile.addressModal.district")}`}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              w={"100%"}
              variant="default"
              radius={"xl"}
              // size="lg"
              data={stateCityLists}
              {...register("district")}
              onChange={(event: any) => {
                clearErrors();
                setValue("district", event);
              }}
              error={errors.district?.message}
            />
          </Box>
          <Box mt={"20px"} dir={i18nStore.isRTL ? "rtl" : "ltr"}>
            <BaseText
              txtkey="profile.addressModal.code"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input
              }}
              mt={"xs"}
              inputMode="numeric"
              placeholder={`${translate("profile.addressModal.code")}`}
              style_variant={"inputText2"}
              component={"input"}
              inputvalue={register("code", {
                onChange: () => clearErrors()
              })}
              error={errors.code?.message}
            />
          </Box>
          <Box mt={"20px"} dir={i18nStore.isRTL ? "rtl" : "ltr"}>
            <BaseText
              txtkey="profile.addressModal.label1"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input
              }}
              mt={"xs"}
              placeholder={`${translate("profile.addressModal.label1")}`}
              style_variant={"inputText2"}
              component={"input"}
              inputvalue={register("addressOne", {
                onChange: () => clearErrors()
              })}
              error={errors.addressOne?.message}
            />
          </Box>
          <Box mt={"20px"} dir={i18nStore.isRTL ? "rtl" : "ltr"}>
            <BaseText
              txtkey="profile.addressModal.label2"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input
              }}
              mt={"xs"}
              placeholder={`${translate("profile.addressModal.label2")}`}
              style_variant={"inputText2"}
              component={"input"}
              inputvalue={register("addressTwo", {
                onChange: () => clearErrors()
              })}
              error={errors.addressTwo?.message}
            />
          </Box>

          {!props.isEdit ? (
            <BaseButton
              mt={"30px"}
              w={"100%"}
              h={"40px"}
              type="submit"
              style_variant={!isValid ? "disabled" : "filled"}
              color_variant={!isValid ? "gray" : "blue"}
              // onClick={handleAddressChange}
            >
              <BaseText txtkey="global.button.save" />
            </BaseButton>
          ) : null}
          {props.isEdit ? (
            <Flex
              direction={i18nStore.isRTL ? "row-reverse" : "row"}
              justify={"space-between"}
              align={"center"}
              gap={"md"}
              mt={"30px"}
            >
              <BaseButton
                w={"100%"}
                h={"40px"}
                style_variant={!isValid ? "disabled" : "filled"}
                color_variant={!isValid ? "gray" : "blue"}
                onClick={handleEditAddress}
              >
                <BaseText txtkey="profile.addressModal.saveChanges" />
              </BaseButton>
              <BaseButton
                w={"100%"}
                h={"40px"}
                style_variant={"outline"}
                color_variant={"blue"}
                onClick={() => {
                  props.onClose();
                  reset();
                  // open();
                }}
              >
                <BaseText
                  txtkey="profile.addressModal.cancelEdit"
                  color={theme.colors.blue[5]}
                />
              </BaseButton>
            </Flex>
          ) : null}
        </form>
      </BaseModal>
      <SuccessfulModal
        opened={opened}
        onClose={close}
        para="profile.addressModal.addressChangeSucccessful"
      />
    </>
  );
};
