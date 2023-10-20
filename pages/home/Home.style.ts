import { Center, createStyles } from '@mantine/core';

import { useStores } from '@/models';

export const createStyle = () => {
  const { i18nStore } = useStores();
  return createStyles((theme) => ({
    container: {
      maxWidth: '100%',
      padding: 0,
    },
    // leftSide: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between',
    //   alignItems: 'flex-start',
    //   gap: '17px',

    //   [theme.fn.smallerThan('sm')]: {
    //     padding: '50px',
    //   },
    //   [theme.fn.smallerThan('xs')]: {
    //     padding: '30px',
    //   },
    // },
    rightSide: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    cursor: {
      cursor: 'pointer',
    },
    // control: {
    //   width: '10px',
    //   height: '10px',
    //   margin: '-5px -50px 0px -30px',
    //   [theme.fn.smallerThan('xs')]: {
    //     margin: '-5px -30px 0px -30px',
    //   },
    // },
    innerCard: {
      borderRadius: '32px',
      background: theme.colors.green[1],
      height: '340px',
      width: '500px',
    },
    subMainText: {
      width: '522px',
    },
    responsiveSubMainText: {
      width: '400px',
      marginTop: '20px',
      [theme.fn.smallerThan('lg')]: {
        textAlign: 'center',
      },

    },
    responsiveSecondSubMainText: {
      opacity: 0.7,
      fontWeight: 400,
      fontSize: '20px',
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
    responsiveImgMain: {
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
    gridContainer: {
      padding: '80px 120px',
    },
    responsiveGridContainer: {
      padding: '40px 10px',
      margin: 'auto',
    },
    innerCardResponsive: {
      borderRadius: '32px',
      background: theme.colors.green[1],
      height: '340px',
      width: '270px',
      overflow: 'auto',
    },
    caraouselBox: {
      maxWidth: '100%',
      padding: '0px 120px',
      [theme.fn.smallerThan('lg')]:{
        textAlign: 'center',
        padding: '30px',
      },
    },
  }));
};
export default createStyle;
