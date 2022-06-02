import * as React from "react";
import HeroSection from "../../components/HeroSection";
import SubscriptionPanel from "../../components/SubscriptionPanel";
import MembershipHeroImage from "../../assets/images/MembershipHeroImage.png";
import MembershipPricingSection from "../../components/MembershipPricingSection";
import axios from "axios";

export default function Membership() {
  const [membership, setMemberShip] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("membership-plan/")
      .then((response) => {
        console.log(response);
        setMemberShip(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <HeroSection
        heading="Membership"
        para="Select a type of membership you want."
        heroImage={MembershipHeroImage}
        heroImageStyle={{ paddingBottom: "20px" }}
        background={{
          background:
            "linear-gradient(11.76deg, rgba(30, 112, 161, 0.45) -15.24%, #96BCD3 -15.24%, rgba(150, 188, 211, 0.08) 34.74%, rgba(255, 255, 255, 0.19) 78.85%)",
        }}
      />
      <MembershipPricingSection membershipData={membership} />
      <SubscriptionPanel />
    </>
  );
}
