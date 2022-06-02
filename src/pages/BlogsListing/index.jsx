import * as React from "react";
import HeroSection from "../../components/HeroSection";
import SubscriptionPanel from "../../components/SubscriptionPanel";
import BlogsListingHeroImage from "../../assets/images/BlogListingHeroImage.png";
import BlogsList from "../../components/BlogsList";

export default function BlogsListing() {
  return (
    <>
      <HeroSection
        heading="Blogs"
        para="Various Blogs related to events are posted here."
        heroImage={BlogsListingHeroImage}
        heroImageStyle={{ paddingBottom: "20px" }}
        background={{
          background:
            "linear-gradient(11.76deg, rgba(30, 112, 161, 0.45) -15.24%, #96BCD3 -15.24%, rgba(150, 188, 211, 0.08) 34.74%, rgba(255, 255, 255, 0.19) 78.85%)",
        }}
      />
      <BlogsList />
      <SubscriptionPanel />
    </>
  );
}
