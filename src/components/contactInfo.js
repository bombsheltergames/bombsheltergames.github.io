// Framework Imports
import React from "react";
// Component Imports
import Button from "components/button";
// Style Imports
import "styles/components/contactInfo.css";
// Import Press Kit zip file for download
import DoSPressKit from "press/DoSPressKit.zip";

const ContactInfo = () => {
  return (
    <div className="ContactInfo">
      <h2>Contact Us</h2>
      <p className="ContactInfo-email">
        <strong>General Support:</strong> info[at]bombsheltergames[dot]com
      </p>
      <p>
        <strong>Press Inquiries:</strong> press[at]bombsheltergames[dot]com
      </p>
      <Button type="ghost" href={DoSPressKit} download>
        Download Press Kit
      </Button>
    </div>
  );
};

export default ContactInfo;
