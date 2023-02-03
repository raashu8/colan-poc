import { UilEstate } from "@iconscout/react-unicons";
import { UilCloudLock } from "@iconscout/react-unicons";
import { UilChartGrowth } from "@iconscout/react-unicons";
import { UilUserCircle } from "@iconscout/react-unicons";
import HomeIcon from '@mui/icons-material/Home';

export const mainRoute = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <HomeIcon   />,
  },
  {
    name: "Marketplace",
    path: "/admin/marketplace",
    icon: <UilChartGrowth />,
  },
  {
    name: "Cloud services",
    path: "/admin/cloud",
    icon: <UilCloudLock />,
  },
  {
    name: "My profile",
    path: "/admin/profile",
    icon: <UilUserCircle />,
  },
];
