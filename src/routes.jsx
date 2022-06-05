import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import EventsListing from "./pages/EventsListing";
import EventDetails from "./pages/EventsListing/EventDetails";
import BlogsListing from "./pages/BlogsListing";
import BlogDetails from "./pages/BlogsListing/BlogDetails";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Directory from "./pages/Directory";
import DirectoryMap from "./pages/Directory/DirectoryMap";
import DirectoryPersonal from "./pages/Directory/DirectoryPersonal";
import VirtualNetworking from "./pages/VirtualNetworking/index.jsx";
import CheckOut from "./pages/CheckOut";
import UpcomingEvents from "./pages/UpcomingEvents";
import AdminLayout from "./pages/Admin/";
import Connections from "./pages/Connections/";
import NewBlogs from "./pages/BlogsListing/NewBlogs";
import UserEventDetails from "./pages/UpcomingEvents/EventDetails";
import UserEventCardDetails from "./pages/UpcomingEvents/EventDetailsCard";
import Feedback from "./pages/FrontPages";
import EventCheckout from "./pages/FrontPages/EventCheckout";
import EventAttendees from "./pages/UpcomingEvents/EventAttendees";
import EventRegistrations from "./pages/UpcomingEvents/EventRegistrations";
import Inbox from "./pages/UpcomingEvents/inbox";
import FeedBack from "./pages/Feedback";
// import EventCheckout from "./pages/UpcomingEvents/EventCheckout";


// ----------------------------------------------------------------------
export default function Router() {
  const isLoggedIn = () => {
    const authToken = JSON.parse(localStorage.getItem("auth"));
    return !!(authToken && authToken.access_token);
  };

  return useRoutes([
    {
      path: "/d",
      element: isLoggedIn() ? <DashboardLayout /> : <Navigate to="/sign-in" />,
      children: [
        { path: "upcoming-events", element: <UpcomingEvents /> },
        { path: "app", element: <Dashboard /> },
        { path: "*", element: <Navigate to="/" /> },
        { path: "directory", element: <Directory to="/" /> },
        { path: "directorymap", element: <DirectoryMap to="/" /> },
        { path: "directorypersonal", element: <DirectoryPersonal to="/" /> },
        { path: "checkout", element: <CheckOut to="/" /> },
        { path: "virtualnet", element: <VirtualNetworking to="/" /> },
        { path: "connections", element: <Connections to="/" /> },
        { path: "event-details", element: <UserEventDetails to="/" /> },
        { path: "event-card-details", element: <UserEventCardDetails /> },
        // { path: "newblogs", element: <NewBlogs to="/" /> },
        { path: "event-attendees", element: <EventAttendees /> },
        { path: "event-registrations", element: <EventRegistrations /> },
        { path: "inbox", element: <Inbox /> },
        { path: "feedback", element: <FeedBack /> },
        { path: "event-checkout", element: <EventCheckout /> },
        { path: "event-attendees", element: <EventAttendees /> },
      ],
    },
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { element: <Navigate to="/" replace /> },
        { path: "/", element: <Home /> },
        { path: "membership", element: <Membership /> },
        { path: "events", element: <EventsListing /> },
        { path: "events/:eventID", element: <EventDetails /> },
        { path: "blogs", element: <BlogsListing /> },
        { path: "blogs/:blogID", element: <BlogDetails /> },
        { path: "products", element: <Products /> },
        { path: "newblogs", element: <NewBlogs /> },
        { path: "*", element: <Navigate to="/" /> },
        { path: "feedback", element: <Feedback /> },
        { path: "event-checkout", element: <EventCheckout /> },
      ],
    },
    {
      path: "/sign-in",
      element: isLoggedIn() ? <Navigate to="/d/app" /> : <SignIn />,
    },
    {
      path: "/admin",
      children: [
        { element: <Navigate to="/" replace /> },
        { path: "dashboard", element: <AdminLayout /> },
        {
          path: "users",
          element: <AdminLayout />,
          children: [{ path: "details", element: <AdminLayout /> }],
        },
        { path: "events", element: <AdminLayout /> },
        {
          path: "events",
          element: <AdminLayout />,
          children: [
            { path: "create-new-events", element: <AdminLayout /> },
            {
              path: "event-details",
              element: <AdminLayout />,
            },
            {
              path: "event-details-paid",
              element: <AdminLayout />,
            },
            {
              path: "event-details-paid2",
              element: <AdminLayout />,
            },
            {
              path: "registered-users",
              element: <AdminLayout />,
            },
          ],
        },
        { path: "membership", element: <AdminLayout /> },
        {
          path: "membership",
          element: <AdminLayout />,
          children: [
            { path: "create-membership", element: <AdminLayout /> },
            // { path: "edit-membership", element: <AdminLayout /> },
          ],
        },
        {
          path: "membership",
          element: <AdminLayout />,
          children: [{ path: "edit-membership", element: <AdminLayout /> }],
        },
        { path: "ads", element: <AdminLayout /> },
        {
          path: "ads",
          element: <AdminLayout />,
          children: [
            { path: "edit-ads", element: <AdminLayout /> },
            { path: "create-ads", element: <AdminLayout /> },
            { path: "user-ads", element: <AdminLayout /> },
          ],
        },
        { path: "blogs", element: <AdminLayout /> },
        {
          path: "blogs",
          element: <AdminLayout />,
          children: [
            { path: "edit-blog", element: <AdminLayout /> },
            { path: "create-new-blog", element: <AdminLayout /> },
            { path: "view-blog", element: <AdminLayout /> },
          ],
        },
      ],
    },
    {
      path: "/sign-up",
      element: isLoggedIn() ? <Navigate to="/d/app" /> : <SignUp />,
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
