import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
  const { i18nStore } = useStores();

  return createStyles((theme) => ({
    container: {
      maxWidth: '100%',
      padding: 0,
    },
    leftSide: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '17px',
      
      [theme.fn.smallerThan('sm')]: {
        padding: '50px',
      },
      [theme.fn.smallerThan('xs')]: {
        padding: '30px',
      },
    },
    rightSide: {
      justifyContent:'center',
      alignItems:'center',
      [theme.fn.smallerThan('sm')]: {
        padding: '50px',
      },
      [theme.fn.smallerThan('xs')]: {
        padding: '30px',
      },
    },
    productSectionsCard: {
      marginTop: '20px',
      gap: '20px',
      flexWrap: 'wrap',
      [theme.fn.smallerThan('lg')]: {
        gap: '10px',
      },
      [theme.fn.smallerThan('md')]: {
        justifyContent: 'center',
      },
    },
    filterSectionsCard: {
      marginTop: '20px',
      gap: '10px',
      flexWrap: 'wrap',
      [theme.fn.smallerThan('xs')]: {
        justifyContent: 'center',
      },
    },
    cursor: {
      cursor: 'pointer',
    },
    control: {
      width: '10px',
      height: '10px',
      margin: '-5px -50px 0px -30px',
      [theme.fn.smallerThan('xs')]: {
        margin: '-5px -30px 0px -30px',
      },
    },
    crouselSlide: {
      display: 'flex',
      justifyContent: 'center',
    },
    slideBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2px',
      cursor: 'pointer',
      width: '150px',
    },
    galleryItemBox: {
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
    galleryItemBoxForMobile: {
      [theme.fn.largerThan('xs')]: {
        display: 'none',
      },
    },
  }));
};
export default createStyle;