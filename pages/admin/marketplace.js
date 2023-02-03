import MainLayout from "Asset/layout/mainLayout";
import React from "react";

const Marketplace = () => {
  return <div>Marketplace</div>;
};

export default Marketplace;
Marketplace.getLayout = (page) => <MainLayout title={"Marketplace"}>{page}</MainLayout>;
