/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";
import { red, blue } from "@mui/material/colors";
import { toast } from "react-toastify";
import {
  useCreateImagesMutation,
  useDeleteImageMutation,
  useGetImagesQuery,
} from "../../app/features/office/officeApi";
import { useSelector } from "react-redux";

const OfficeTour = () => {
  const [createImages, { isLoading, isSuccess, isError }] =
    useCreateImagesMutation();
  const [
    deleteImage,
    {
      isLoading: isdelOfficeLoading,
      isSuccess: isdelOfficeSuccess,
      isError: isdelOfficeError,
    },
  ] = useDeleteImageMutation();
  const { data: tableData } = useGetImagesQuery(undefined);
  const { user } = useSelector((state) => state.persisted.user);
  const img_hosting_token = process.env.REACT_APP_IMAGE_UPLOAD;
  const [image, setImage] = useState(null);

  // toast
  if (isSuccess) {
    toast("Office Image Created succesfully!", {
      toastId: "office create",
    });
  }
  if (isLoading) {
    toast("Please wait a moment while Creating Service!", {
      toastId: "office pending",
    });
  }
  if (isError) {
    toast("Something went wrong", {
      toastId: "office error",
    });
  }
  if (isdelOfficeSuccess) {
    toast("Office Image deleted succesfully!", {
      toastId: "office del create",
    });
  }
  if (isdelOfficeLoading) {
    // toast("Please wait a moment while Creating Service!", {
    //   toastId: "office del pending",
    // });
  }
  if (isdelOfficeError) {
    toast("Something went wrong", {
      toastId: "office del error",
    });
  }

  const { register, handleSubmit } = useForm();
  const onSubmitOffice = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${img_hosting_token}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      // console.log("Image uploaded:", responseData.data.url);
      const id = user && user.length > 0 ? user[0]._id : null;
      const payload = {
        url: responseData?.data?.url,
        uploadedBy: id,
      };
      // const officeInfo = {
      //   data: payload,
      // };
      await createImages(payload);
      setImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleImageDelete = async (id) => {
    await deleteImage(id);
  };

  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Box>
        <Typography fontWeight="600" fontSize="22px">
          {" "}
          Add Your Office New Photo
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmitOffice)}>
            <label htmlFor="img-office">
              <Box
                sx={{
                  width: "110px",
                  height: "100px",
                  border: "1px solid gray",
                  borderRadius: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CloudUploadIcon />
                <Divider />
                Upload Image
              </Box>
            </label>
            <input
              id="img-office"
              type="file"
              accept="image/*"
              style={{ position: "absolute", left: "-9999px" }}
              {...register("image", { required: true })}
              onChange={handleImageChange}
            />

            <Typography>{image && image.name}</Typography>
            <Button
              type="submit"
              sx={{ marginTop: "20px" }}
              variant="contained"
            >
              Upload
            </Button>
          </form>
        </Box>
      </Box>
      <Divider sx={{ marginTop: "40px" }} />
      <Box sx={{ marginTop: "20px" }}>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "500",
          }}
        >
          Manage your Images
        </Typography>
        <TableContainer component={Paper} sx={{ background: blue[200] }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Image
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Uploaded By
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Created Time
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.data.map((row) => (
                <TableRow key={row?._id} sx={{ "td, th": { border: 1 } }}>
                  <TableCell align="center" component="th" scope="row">
                    <img
                      src={row?.url}
                      alt="photo"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </TableCell>
                  <TableCell align="center">{row?.uploadedBy?.email}</TableCell>
                  <TableCell align="center">
                    {new Date(row?.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ backgroundColor: red[500] }}
                      onClick={() => handleImageDelete(row?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default OfficeTour;
