import React, { useEffect, useState } from "react";
import "./admin.css";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Users from "./Users";
import UserDetails from "./Users/UserDetails";
import Events from "./Events";
import CreateNewEvents from "./Events/CreateNewEvents";
import EventsCreatePage from "./Events/EventsCreatePage";
import EventsCreatePage2 from "./Events/EventsCreatePage2";
import EventsCreatePage3 from "./Events/EventsCreatePage3";
import Membership from "./Membership";
import CreateMembership from "./Membership/CreateMembership";
import EditMembership from "./Membership/EditMembership";
import Ads from "./Ads";
import CreateAds from "./Ads/CreateAds";
import EditAds from "./Ads/EditAds";
import Blogs from "./Blogs";
import EditBlogs from "./Blogs/EditBlog";
import CreateBlog from "./Blogs/CreateBlog";
import ViewBlog from "./Blogs/ViewBlog";
import UserAds from "./Ads/UserAds";
import DownloadedUser from "./Events/DownloadedUser";

function AdminLayout() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="admin-layout">
      <Sidebar />
      <Header />

      {path === "/admin/dashboard" && <Dashboard />}
      {path === "/admin/users" && <Users />}
      {path === "/admin/events" && <Events />}
      {path === "/admin/events/create-new-events" && <CreateNewEvents />}
      {path === "/admin/events/event-details" && <EventsCreatePage />}
      {path === "/admin/events/event-details-paid" && <EventsCreatePage2 />}
      {path === "/admin/events/event-details-paid2" && <EventsCreatePage3 />}
      {path === "/admin/events/registered-users" && <DownloadedUser />}
      {path === "/admin/membership" && <Membership />}
      {path === "/admin/membership/create-membership" && <CreateMembership />}
      {path === "/admin/membership/edit-membership" && <EditMembership />}
      {path === "/admin/ads" && <Ads />}
      {path === "/admin/ads/create-ads" && <CreateAds />}
      {path === "/admin/users/details" && <UserDetails />}
      {path === "/admin/blogs" && <Blogs />}
      {path === "/admin/blogs/create-new-blog" && <CreateBlog />}
      {path === "/admin/blogs/view-blog" && <ViewBlog />}
      {path === "/admin/blogs/edit-blog" && <EditBlogs />}
      {path === "/admin/ads/edit-ads" && <EditAds />}
      {path === "/admin/ads/create-ads" && <CreateAds />}
      {path === "/admin/ads/user-ads" && <UserAds />}

      {path === "/admin/membership/edit-membership" && <EditMembership />}
    </div>
  );
}

export default AdminLayout;
