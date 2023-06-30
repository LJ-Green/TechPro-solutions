import React from "react";

const AboutSection = () => {
  return (
    <div className="text-center mx-10">
      <h1 className="text-[30px] font-bold my-10">What We Do</h1>
      <p className="mb-10">
        At TechPro, we are passionate about delivering digital solutions that
        empower businesses to establish and enhance their digital presence. Our
        mission is to partner with clients who are seeking to start or improve
        their digital presence and provide them with innovative and effective
        solutions tailored to their unique needs.
      </p>
      <p className="mb-10">
        We understand the ever-evolving digital landscape and the importance of
        leveraging technology to drive growth and success. With a team of
        skilled professionals and a customer-centric approach, we are committed
        to delivering exceptional results that exceed our clients' expectations.
      </p>
      <div>
        <div className="mb-10 border-4 p-4 rounded-xl bg-gradient-to-r from-[#e7e7e7] to-[#3fcdbc]">
          <h2 className="text-[22px] font-bold">Our Focus</h2>
          <p>
            We specialize in helping businesses navigate the digital realm and
            harness its full potential. Whether you are a startup looking to
            establish your online presence or an established company seeking to
            revamp your digital strategy, we have the expertise and resources to
            guide you every step of the way.
          </p>
        </div>
        <div className="border-4 p-4 rounded-xl bg-gradient-to-l from-[#cfcfcf] to-[#3fcdbc]">
          <h2 className="text-[22px] font-bold">Our Service</h2>
          <p>
            At TechPro, we offer a comprehensive range of digital solutions
            designed to enhance your brand, streamline operations, and drive
            meaningful growth. Our services include:
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
