import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="card-bg p-4 mt-10 mb-10 max-w-5xl mx-auto">
      <Helmet>
        <title>Eventure | PrivacyPolicy</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 font text-center">
          Privacy Policy
        </h1>
        <p className="text-base leading-relaxed text-justify paragraph">
          Your privacy is important to us. This Privacy Policy describes how we
          collect, use, and protect your personal information when you use our
          website. By accessing or using our service, you agree to this policy.
          <br />
          <br />
          We collect information that you voluntarily provide, such as your
          name, email address, and any other details submitted through our
          contact forms. Additionally, we may gather technical data like your IP
          address, browser type, and usage data through cookies and analytics
          tools to improve the user experience.
          <br />
          <br />
          All data is stored securely and used solely for the purposes
          described. We never share your information with third parties without
          your consent, except as required by law. You may request to access,
          update, or delete your personal data at any time by contacting us.
          <br />
          <br />
          We reserve the right to modify this Privacy Policy at any time.
          Updates will be posted on this page with an updated effective date.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
