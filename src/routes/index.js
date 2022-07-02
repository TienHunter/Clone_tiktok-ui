//
import config from '~/config';
//layout
import { HeaderOnly } from '~/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//public route
const publicRoutes = [
   { path: config.routes.home, element: Home },
   { path: config.routes.following, element: Following },
   { path: config.routes.profile, element: Profile },
   { path: config.routes.upload, element: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
