import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from '~/Layouts';
import { Fragment } from 'react';
function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  let Layout = DefaultLayout;
                  if (route.layout) {
                     Layout = route.layout;
                  } else if (route.layout === null) {
                     Layout = Fragment;
                  }
                  const Page = route.element;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
