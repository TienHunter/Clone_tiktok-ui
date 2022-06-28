//
import routeConfig from '~/config/routes';
//layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//public route
const publicRoutes = [
   { path: routeConfig.home, element: Home },
   { path: routeConfig.following, element: Following },
   { path: routeConfig.profile, element: Profile },
   { path: routeConfig.upload, element: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
