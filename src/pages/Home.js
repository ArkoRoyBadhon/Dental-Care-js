import Banner from "../components/Home/Banner";
import { Box } from "@mui/material";
import ShowCase from "../components/Home/ShowCase";
import WelcomeCom from "../components/Home/WelcomeCom";

import SliderCustomer from "../components/Home/SliderCustomer";

const Home = () => {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.persisted.auth);
  // const { data: userData, isSuccess } = useGetUserQuery({
  //   skip: token !== null ? true : false,
  // });
  // const MM = useSelector((state) => state.persisted.user.user);

  // console.log("USEREMAIL", MM);

  // useEffect(() => {
  //   if (isSuccess && userData?.length > 0) {
  //     console.log("LOgout", token);
  //     dispatch(setUser(userData));
  //   }
  // }, [isSuccess, userData, dispatch, token]);
  return (
    <Box>
      <Banner />
      <ShowCase />
      <WelcomeCom />
      <SliderCustomer />
      {/* <PatientsSay /> */}
    </Box>
  );
};

export default Home;
