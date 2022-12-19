import React, { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./Layouts/Dashboard/Dashboard"));
const Inbox = lazy(() => import("./pages/Inbox/Inbox"));
const Create = lazy(() => import("./pages/Create/Create"));
const Invoice = lazy(() => import("./pages/Invoice"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="create" element={<Create />} />
          <Route index element={<Inbox />} />
          <Route path="create/invoice" element={<Invoice/>}/>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

  );
}
