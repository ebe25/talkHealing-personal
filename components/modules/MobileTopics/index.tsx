import { Box, Button, Container } from '@mantine/core';
import { createStyle } from './Mobiletopics.styles';

interface MobiletopicsProps {
  topicsData: Array<String>;
}
export default function Mobiletopics({ topicsData }: MobiletopicsProps) {
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Box>
        {topicsData.map((topic, index) => (
          <Button
            key={index}
            variant="default"
            className={classes.btn}
          >
            {topic}
          </Button>
        ))}
      </Box>
    </Container>
  );
}
