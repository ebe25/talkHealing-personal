import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import useStyles from "./../ProductPage.style";
function ProductImageCarousel(props: {
  images?: any;
  setSelectedItemImage?: any;
}) {
    const {classes} = useStyles();
  return (
    <Carousel
      height={200}
      slideSize="25%"
      slideGap="xl"
      withControls={false}
      slidesToScroll={3}
      align="start"
    >
      {props.images.map((item: string | null | undefined, id: any) => {
        return (
          <Carousel.Slide>
            <Image
              sx={{ cursor: "pointer" }}
              onClick={() => props.setSelectedItemImage(id)}
              mt={"24px"}
              width={"100%"}
              maw={"100px"}
              src={item}
              alt="product_image"
            />
          </Carousel.Slide>
        );
      })}

      {/* ...other slides */}
    </Carousel>
  );
}

export default ProductImageCarousel;
