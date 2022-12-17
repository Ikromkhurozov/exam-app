import React, { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./Layouts/Dashboard/Dashboard"));
const Inbox = lazy(() => import("./pages/Inbox/Inbox"));
const Create = lazy(() => import("./pages/Create/Create"));
const Outgoing = lazy(() => import("./pages/Outgoing/Outgoing"));
const Save = lazy(() => import("./pages/Save/Save"));
const Cancel = lazy(() => import("./pages/Cancel/Cancel"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="create"  element={<Create />} />
          <Route index element={<Inbox />} />
          <Route path="outgoing"  element={<Outgoing />} />
          <Route path="save" element={<Save />} />
          <Route path="cancel"  element={<Cancel />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

  );
}
