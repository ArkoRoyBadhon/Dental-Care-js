import { Box, Button, Typography } from "@mui/material";
import {
  useGetScheduleQuery,
  useUpdateScheduleMutation,
} from "../../app/features/schedule/schedule";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Phone = () => {
  //   const [updateId, setUpdateId] = useState("");
  const { data: scheduleData } = useGetScheduleQuery();
  const [updateSchedule, { isSuccess }] = useUpdateScheduleMutation();

  const { register, handleSubmit } = useForm();
  const onSubmitSchedule = async (data) => {
    const formData = new FormData();
    formData.append("phone", data.phone);

    const dataInfo = {
      phone: data?.phone,
      startDay: data?.startDay,
      endDay: data?.endDay,
      startTime: data?.startTime,
      endTime: data?.endTime,
    };

    updateSchedule({ data: dataInfo, id: data?.id });

    try {
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast("Schedule updated", {
        id: "schedule-update",
      });
    }
  }, [isSuccess]);

  return (
    <Box>
      <Typography fontWeight="600" fontSize="22px" marginBottom="10px">
        {" "}
        Update Phone Number and Time Schedule
      </Typography>
      {scheduleData &&
        scheduleData?.data.map((item) => {
          //   setUpdateId(item?._id);
          return (
            <form key={item?._id} onSubmit={handleSubmit(onSubmitSchedule)}>
              <input
                id="id"
                type="text"
                hidden
                defaultValue={item?._id}
                {...register("id", { required: true })}
              />
              <Box marginBottom="10px">
                <label htmlFor="img-office">
                  <Typography fontWeight="600">Phone Number</Typography>
                </label>
                <input
                  id="phone"
                  type="text"
                  defaultValue={item?.phone}
                  {...register("phone", { required: true })}
                />
              </Box>
              <Box marginBottom="10px">
                <label htmlFor="img-office">
                  <Typography fontWeight="600">Start Day</Typography>
                </label>
                <input
                  id="startDay"
                  type="text"
                  defaultValue={item?.startDay}
                  {...register("startDay", { required: true })}
                />
              </Box>
              <Box marginBottom="10px">
                <label htmlFor="img-office">
                  <Typography fontWeight="600">End Day</Typography>
                </label>
                <input
                  id="endDay"
                  type="text"
                  defaultValue={item?.endDay}
                  {...register("endDay", { required: true })}
                />
              </Box>
              <Box marginBottom="10px">
                <label htmlFor="img-office">
                  <Typography fontWeight="600">Start Time</Typography>
                </label>
                <input
                  id="startTime"
                  type="text"
                  defaultValue={item?.startTime}
                  {...register("startTime", { required: true })}
                />
              </Box>
              <Box marginBottom="10px">
                <label htmlFor="img-office">
                  <Typography fontWeight="600">End Time</Typography>
                </label>
                <input
                  id="endTime"
                  type="text"
                  defaultValue={item?.endTime}
                  {...register("endTime", { required: true })}
                />
              </Box>

              <br />
              <Button
                type="submit"
                sx={{ marginTop: "20px" }}
                variant="contained"
              >
                Update
              </Button>
            </form>
          );
        })}
    </Box>
  );
};

export default Phone;
