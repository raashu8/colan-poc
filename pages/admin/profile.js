import MainLayout from "Asset/layout/Layout";
import Head from "next/head";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>My Profile</title>
      </Head>
      Profile
    </div>
  );
};

export default Profile;
Profile.getLayout = (page) => <MainLayout title={"Profile"}>{page}</MainLayout>;
