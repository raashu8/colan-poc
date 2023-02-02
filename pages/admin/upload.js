import * as React from "react";
import { Grid, CardContent, Typography, Card } from "@mui/material";
import UploadImage from "../../Asset/Images/aa.png";
import Image from "next/image";
import MainLayout from "Asset/layout/mainLayout";

const UploadCard = () => {
  return (
    <div style={{ padding: "200px", paddingTop:"20px", marginLeft:"60px"}}>
      <Card
        sx={{
          maxWidth: 700,
          borderRadius: "15px",
          p: 5,  
          maxHeight: "100%",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              border: "1px dashed grey",
              maxHeight: "100%",
              background: "#f7f9fc",
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
                  />
                </div>
              </label>
              <input id="File-For" type="file" />
            </div>
          </Grid>
          <Grid item xs={6}>
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
              <button className="upld-btn">Upload</button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default UploadCard;
UploadCard.getLayout = (page) => <MainLayout>{page}</MainLayout>;
