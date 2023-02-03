import MainLayout from "Asset/layout/Layout";
import React from "react";

const Cloud = () => {
  return <div>Cloud</div>;
};

export default Cloud;
Cloud.getLayout = (page) => <MainLayout title={"Cloud"}>{page}</MainLayout>;
