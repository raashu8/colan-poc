import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import UploadImage from "../../Asset/Images/aa.png";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import MainLayout from "Asset/layout/Layout";

const Dashboard = () => {
  const [buttoun, setButtoun] = useState(false);
  const [count, setCount] = useState(0);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      profile_image: null,
    },
    validationSchema: Yup.object({
      profile_image: Yup.string().required("Image is required"),
    }),
    onSubmit: (val) => {
      var formValue = new FormData();
      formValue.append("profile_image", val.profile_image);
      // dispatch(postAllUserDataApi(formValue));
      formik.resetForm();
      alert("Upload Completed Mate", val);
      console.log("<DONE>", val);
      setCount(0);
    },
  });
  return (
    <div
      style={{ paddingTop: "20px", textAlign: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          maxWidth: 700,
          borderRadius: 5,
          p: 5,
          maxHeight: "100%",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            xl={6}
            lg={6}
            sx={{
              border: "1px dashed grey",
              maxHeight: "100%",
              background: "#f7f9fc",
              borderRadius: 5,
            }}
          >
            <div id="File-Body">
              <label id="File-Lable" for="File-For">
                <div id="Filebutton" className="input-hover">
                  <Image
                    src={UploadImage}
                    width={"85%"}
                    height={"100%"}
                    alt=""
                    style={{ alignContent: "center" }}
                  />
                </div>
              </label>
              <input
                id="File-For"
                name="profile_image"
                error={Boolean(
                  formik.touched.profile_image && formik.errors.profile_image
                )}
                onChange={(event) => {
                  setCount(event?.currentTarget?.files.length);
                  formik.setFieldValue(
                    "profile_image",
                    event.currentTarget.files[0]
                  );
                  setButtoun(true);
                }}
                type="file"
                accept="text/xml"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} mt={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Excel Document
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontSize: "1rem", mt: 4 }}
              >
                Upload your document so we can process the data in the real time
                and give you the response
              </Typography>
              {buttoun && count > 0 ? (
                <button className="upld-btn" onClick={formik.handleSubmit}>
                  Upload
                </button>
              ) : (
                ""
              )}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        explicabo iusto eius delectus ipsum atque officiis eum. A maiores dolor
        voluptates ipsum asperiores quisquam minima vitae, saepe rem ex ea
        corporis aliquam eaque consequuntur rerum voluptatum ipsam reprehenderit
        necessitatibus, expedita atque! Amet, nostrum animi?
      </h1>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        explicabo iusto eius delectus ipsum atque officiis eum. A maiores dolor
        voluptates ipsum asperiores quisquam minima vitae, saepe rem ex ea
        corporis aliquam eaque consequuntur rerum voluptatum ipsam reprehenderit
        necessitatibus, expedita atque! Amet, nostrum animi?
      </h1>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        explicabo iusto eius delectus ipsum atque officiis eum. A maiores dolor
        voluptates ipsum asperiores quisquam minima vitae, saepe rem ex ea
        corporis aliquam eaque consequuntur rerum voluptatum ipsam reprehenderit
        necessitatibus, expedita atque! Amet, nostrum animi?
      </h1>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        explicabo iusto eius delectus ipsum atque officiis eum. A maiores dolor
        voluptates ipsum asperiores quisquam minima vitae, saepe rem ex ea
        corporis aliquam eaque consequuntur rerum voluptatum ipsam reprehenderit
        necessitatibus, expedita atque! Amet, nostrum animi?
      </h1>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        explicabo iusto eius delectus ipsum atque officiis eum. A maiores dolor
        voluptates ipsum asperiores quisquam minima vitae, saepe rem ex ea
        corporis aliquam eaque consequuntur rerum voluptatum ipsam reprehenderit
        necessitatibus, expedita atque! Amet, nostrum animi?
      </h1>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = (page) => <MainLayout title={"Main"}>{page}</MainLayout>;
