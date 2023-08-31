import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Autoplay } from "swiper/modules";


const PatientsSay = () => {
  return (
    <Box
      sx={{
        paddingX: {
          xs: "20px",
          sm: "20px",
          md: "60px",
        },
        paddingY: {
          xs: "40px",
          sm: "40px",
          md: "60px",
        },
      }}
    >
      <Typography sx={{marginBottom: "20px"}} fontWeight="600" fontSize="28px" textAlign="center">Our Patients Say</Typography>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              height: {
                xs: "250px",
                md: "200px",
              },
              margin: {
                xs: "0px 20px",
                md: "0px 80px",
              },
            }}
          >
            <div className="title" data-swiper-parallax="-300">
              Sharoda Rani
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
            sx={{
              height: {
                xs: "250px",
                md: "200px",
              },
              margin: {
                xs: "0px 20px",
                md: "0px 80px",
              },
            }}
          >
            <div className="title" data-swiper-parallax="-300">
              Sharoda Rani
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
            sx={{
              height: {
                xs: "250px",
                md: "200px",
              },
              margin: {
                xs: "0px 20px",
                md: "0px 80px",
              },
            }}
          >
            <div className="title" data-swiper-parallax="-300">
              Sharoda Rani
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PatientsSay;
