//
import config from '~/config';
//layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';

//public route
const publicRoutes = [
   { path: config.routes.home, element: Home },
   { path: config.routes.following, element: Following },
   { path: config.routes.profile, element: Profile },
   { path: config.routes.upload, element: Upload, layout: HeaderOnly },
   { path: config.routes.live, element: Live },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
