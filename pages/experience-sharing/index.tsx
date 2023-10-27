/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Button, Container, Flex, Box, Card, Group, Image } from '@mantine/core';
import { Icon } from '@iconify/react';
import { useDisclosure } from '@mantine/hooks';

import { observer } from 'mobx-react-lite';
import Header from '@/components/modules/Header/Header';
import { createStyle } from './experience-sharing.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import PageSearchBox from '@/components/modules/PageSearchbox';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import FollowBtn from '@/components/modules/FollowBtn';
import AddNewExp from '@/components/modules/Modals/ExperienceModal/addNewExp';
import NoDataFound from '@/components/modules/NoDataFound/NoDataFound';

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  datePosted: string;
  likes: number;
  comments: number;
  userImg: string;
  userName: string;
  userHandle: string;
}

// const experienceCards: ExperienceCard[] = [
//   {
//     id: 1,
//     title: 'Overcoming Diabetes with a Healthy Lifestyle',
//     description:
//       'I successfully managed my diabetes by adopting a healthier diet and regular exercise.',
//     datePosted: 'Oct 23',
//     likes: 25,
//     comments: 10000, // Changed to a number
//     userImg:
//       'https://img.freepik.com/premium-vector/man-avatar-portrait-man-minimalist-flat-illustration_186332-435.jpg?w=740',
//     userName: 'Alice',
//     userHandle: '@aliceInWonderland',
//   },
//   {
//     id: 2,
//     title: 'Beating Cancer with Determination',
//     description:
//       'My journey to defeating cancer was tough, but with determination and a strong support system, I emerged victorious.',
//     datePosted: 'Sept 23',
//     likes: 42,
//     comments: 15,
//     userImg:
//       'https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1698037819~exp=1698041419~hmac=b518e7c1693e7ad21cf6154609c8b14ad7ea2338f626e573efa05b3e68d0a2fc&w=740',
//     userName: 'Bob',
//     userHandle: '@bobTheSurvivor',
//   },
//   {
//     id: 3,
//     title: 'Managing Stress for Better Mental Health',
//     description:
//       'Learn how I improved my mental health by reducing stress and practicing mindfulness.',
//     datePosted: 'Aug 23',
//     likes: 30000, // Changed to a number
//     comments: 5,
//     userImg: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png',
//     userName: 'Charlie',
//     userHandle: '@ChillCharlie',
//   },
//   {
//     id: 4,
//     title: 'Post Covid-19 Symptoms',
//     description: 'Last quarter I had a lot of symptoms, but I managed to get through them.',
//     datePosted: 'June 2020',
//     likes: 45000, // Changed to a number
//     comments: 100,
//     userImg:
//       'https://img.freepik.com/premium-photo/man-with-glasses-black-shirt-is-circle_745528-3013.jpg?w=740',
//     userName: 'John Doe',
//     userHandle: '@TheCovidSurvivor',
//   },
//   // Add more experience cards as needed
// ];

const FORUM_ICONS = [
  { id: 1, icon: 'zondicons:calendar', key: 'datePosted' },
  { id: 2, icon: 'mdi:eye', key: 'likes' },
  { id: 3, icon: 'mdi:insert-comment', key: 'comments' },
];

const Experience = observer(() => {
  const useStyles = createStyle();
  const { classes } = useStyles();
  const { i18nStore, experienceStore } = useStores();
  const { experienceCardData } = experienceStore;
  const [opened, { open, close }] = useDisclosure(false);
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  const CardExp = (props: { item: any }) => (
    <Card className={classes.cardContainer} key={props.item.id} padding="34px" shadow="lg">
      {/* cardHead */}
      <Box className={classes.cardHead}>
        <Group>
          <Image
            src={props.item.userImg}
            width={55}
            height={55}
            radius="xl"
            style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          />
          <Flex direction="column" align="flex-start" justify="center" gap={0}>
            <BaseText fontWeight_variant={600}>{props.item.userName}</BaseText>
            <BaseText c="gray" size={14}>
              {props.item.userHandle}
            </BaseText>
          </Flex>
        </Group>
        <FollowBtn />
      </Box>
      {/* cardContent */}
      <Box className={classes.cardContent}>
        <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h10}>
          {props.item.title}
        </BaseText>
        <BaseText
          className={classes.content}
          style={{
            ...typography.paragraph[i18nStore.getCurrentLanguage()]['p1.5'],
            opacity: 0.7,
            marginTop: '6px',
          }}
        >
          {props.item.description}
        </BaseText>
        {/* icons */}
        <Box className={classes.Icons}>
          {FORUM_ICONS.map((forum) => (
            <Box className={classes.forumIcons} key={forum.id}>
              <Icon icon={forum.icon} />
              <BaseText size_variant="sm" fontWeight_variant={400}>
                {props.item[forum.key as keyof ExperienceCard]}
              </BaseText>
            </Box>
          ))}
          <Icon icon="ic:sharp-share" />
        </Box>
      </Box>
    </Card>
  );

  const getFilteredData = async () => {
    try {
      const res = await experienceStore.getFilteredExperienceCard(searchText);
      console.log(res);
      return res;
    } catch (error) {
      console.log('Error', error);
    }
    return [];
  };
  const AsyncFilteredComponent = () => {
    const [resolvedFilterData, SetResolvedFilterData] = useState<any>(null);
    const fetchData = async () => {
      try {
        const data = await getFilteredData();
        if (data.length === 0) {
          SetResolvedFilterData(<NoDataFound />);
        } else {
          data.map((item) => <CardExp item={item} />);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
    return resolvedFilterData;
  };

  // interface filterDataProps {
  //   item: any;
  //   Text: any;
  // }
  // const filterData  = (item, Text) =>{
  //   const cardString = [item.title, item.description, item.]
  // }
  // filterData(experienceCardData, searchText);

  // const filterData = ((experienceCardData) => (
  //   experienceCardData.filter((item) =>[item.description])
  // ))
  // const filteredData = ({ item, searchtext }: filterDataProps) => {})

  // const data = () => {
  //   const ans = experienceCardData.filter((item) =>
  //     [item.datePosted, item.description, item.title].join(' ')
  //   );
  //   return ans;
  // };
  // console.log(typeof data());
  // const ans = experienceCardData.filter((item) =>
  //   [item.datePosted, item.description, item.title].join(' ')
  // );
  // console.log(ans.keys());
  return (
    <>
      <Header />
      <Container maw={1250}>
        <Box className={classes.container}>
          {/**Page heading */}
          <Flex justify="space-between" align="center" className={classes.headingFlex}>
            <BaseText color="black" fontWeight_variant={700}>
              Experience sharing
            </BaseText>
            {/**Add new button */}
            <AddNewExp opened={opened} onClose={close} />
            <Button variant="default" color="gray" radius={11} onClick={open}>
              Add new
            </Button>
          </Flex>

          {/** PageSearchbar */}
          <Box className={classes.pgeSearchBox}>
            <PageSearchBox
              num={200}
              type="experiences"
              searchText={searchText}
              onSearchChange={handleSearchChange}
            />
          </Box>

          {/**main container */}
          <Flex direction="column" gap={16} align="center" justify="center">
            {/* {searchText ? (
               getFilteredData().then((data) => (
                data.map((item) => (<CardExp item ={item}))
               )))
            ) : getFilteredData().then((data) => (return data.length===0)) ? (
              <NoDataFound />
            ) : (
              <CardExp item={experienceCardData} />
            )} */}

            {searchText ? (
              <AsyncFilteredComponent />
            ) : (
              experienceCardData.map((item) => <CardExp item={item} />)
            )}
          </Flex>
        </Box>
      </Container>
    </>
  );
});
export default Experience;
