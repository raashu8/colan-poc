import MainLayout from "Asset/layout/mainLayout";
import React from "react";

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;
Profile.getLayout = (page) => <MainLayout title={"Profile"}>{page}</MainLayout>;
