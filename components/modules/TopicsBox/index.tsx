/* eslint-disable import/extensions */
import { Button, Collapse, Container, Flex, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import { createStyle } from './TopicsBox.styles';

const commonDiseases = [
  'Hypertension (High Blood Pressure)',
  'Diabetes',
  'Coronary Artery Disease ',
  'Stroke',
  'Cancer',
  'Asthma',
  'Chronic Obstructive Pulmonary Disease ',
  "Alzheimer's Disease",
  'Arthritis',
  'Influenza (Flu)',
];
export default function TopicsBox() {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const responsiveTab = useMediaQuery('(max-width: 74.25em)');
  return (
    <>
      {responsiveTab ? (
        <Container className={classes.topicsLayout}>
          {/**Title */}
          <Title order={2}>
            <BaseText fontWeight_variant={700} size_variant="md" onClick={toggle}>
              Topics
            </BaseText>
          </Title>
          {/**Diseases */}
          <Collapse in={opened} transitionDuration={800} transitionTimingFunction="linear">
            <Flex direction="column" mt={27} gap="10px">
              {commonDiseases.map((disease, index) => (
                <BaseText
                  key={index}
                  size_variant="sm"
                  style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i1}
                  className={classes.topicsText}
                >
                  {disease}
                </BaseText>
              ))}
            </Flex>
          </Collapse>
        </Container>
      ) : (
        <Container className={classes.topicsLayout}>
          {/**Title */}
          <Title order={2}>
            <BaseText fontWeight_variant={600} size_variant="md">
              Topics
            </BaseText>
          </Title>
          {/**Diseases */}
          <Flex direction="column" mt={27} gap="10px">
            {commonDiseases.map((disease, index) => (
              <BaseText
                key={index}
                size_variant="sm"
                style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i1}
                className={classes.topicsText}
              >
                {disease}
              </BaseText>
            ))}
          </Flex>
        </Container>
      )}
    </>
  );
}
