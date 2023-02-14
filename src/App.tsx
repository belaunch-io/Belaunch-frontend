import Loading from "@components/Loading";
import PageLayout from "@components/PageLayout";
import routeConfig from "@constants/routeConfig";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <PageLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routeConfig.map((item, index) => (
                <Route key={index} path={item.path} element={item.component} />
              ))}
            </Routes>
          </Suspense>
        </PageLayout>
      </Router>
    </React.StrictMode>
  );
}

export default App;
