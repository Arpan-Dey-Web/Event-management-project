import React from "react";
import { Helmet } from "react-helmet-async";

const TermsCondition = () => {
  return (
    <div className="card-bg my-10 rounded-2xl max-w-5xl mx-auto">
      <Helmet>
        <title>Eventure | TermsCondition</title>
      </Helmet>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 font text-center ">
          Terms & Conditions
        </h1>
        <p className="text-base leading-relaxed text-justify paragraph">
          By accessing and using this website, you accept and agree to be bound
          by the terms and conditions set forth in this agreement. If you do not
          agree to these terms, please do not use the website.
          <br />
          <br />
          The content of this website is for general information only and is
          subject to change without notice. We strive to ensure that all
          information is accurate and up to date, but we make no warranties or
          representations of any kind.
          <br />
          <br />
          Unauthorized use of this website may give rise to a claim for damages
          and/or be a criminal offense. Users are responsible for ensuring their
          use of the site complies with all applicable laws and regulations.
          <br />
          <br />
          We reserve the right to restrict or terminate your access to the
          website if you breach any of these terms. These terms and conditions
          are governed by and construed in accordance with the laws of our
          jurisdiction.
          <br />
          <br />
          Continued use of the site after changes to these terms signifies your
          acceptance of the revised terms.
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
