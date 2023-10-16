import { Container, Flex, Title, useMantineTheme } from '@mantine/core';
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
  return (
    <>
      <Container className={classes.topicsLayout}>
        {/**Title */}
        <Title order={2}>
          <BaseText fontWeight_variant={600} size_variant="md">
            Topics
          </BaseText>
        </Title>
        {/**Diseases */}
        <Flex direction="column" columnGap="10px" mt={27} gap="10px">
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
    </>
  );
}
