import React, { useState } from 'react';
import { Container, Grid, Image } from '@mantine/core';
import { Images } from '../../public/index';
import { createStyle } from './SignUp.style';
import { EmailOtp } from '../../components/modules/SignupFragment/EmailOtp/EmailOtp';
import { AddNumber } from '../../components/modules/SignupFragment/AddNumber/AddNumber';
import { PhoneNumberOtp } from '../../components/modules/SignupFragment/PhoneNumberOtp/PhoneNumberOtp';
import { SignupForm} from '../../components/modules/SignupFragment/SignUpForm/SignupForm';

interface signUpProps {
  img?: string;
}

export const SignUp = (props: signUpProps) => {
  const useStyles = createStyle();
  const { classes } = useStyles();
  const MAX_TIMELINE_STEP = 3;
  const MIN_TIMELINE_STEP = 0;
  const [timelineStep, setTimelinestep] = useState(MIN_TIMELINE_STEP);

  const incrementTimelineStep = () => {
    setTimelinestep((prev: any) => {
      if (prev < MAX_TIMELINE_STEP) {
        return prev + 1;
      } else prev;
    });
  };

  const timelinePages = [
    // Signup Fragment
    <SignupForm incrementTimelineStep={incrementTimelineStep} />,

    //  Email Otp Fragment
    <EmailOtp incrementTimelineStep={incrementTimelineStep} />,

    // Add number Fragment
    <AddNumber incrementTimelineStep={incrementTimelineStep} />,

    // Number Otp Fragment
    <PhoneNumberOtp />,
  ];

  return (
    <Container maw={'1400px'}>
      <Grid className={classes.container} gutter="100px" m={0}>
        <Grid.Col sm={12} xs={12} md={8} lg={7} xl={7}>
          <Image w={'100%'} src={props.img ? props.img : Images.login_icon} alt="login_icon" />
        </Grid.Col>
        <Grid.Col sm={12} xs={12} md={4} lg={5} xl={5}>
          {/* Signup Fragment and Email Otp Fragment and Add number Fragment and Number Otp Fragment */}
          {timelinePages[timelineStep]}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SignUp;
