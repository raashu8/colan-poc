import MainLayout from "Asset/layout/Layout";
import Head from "next/head";
import React from "react";

const Cloud = () => {
  return <div>
      <Head>
        <title>Cloud Services</title>
      </Head>
    Cloud</div>;
};

export default Cloud;
Cloud.getLayout = (page) => <MainLayout title={"Cloud"}>{page}</MainLayout>;
