import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          {" "}
          About Bcard <i className="bi bi-card-heading"></i>
        </>
      }
      description="we use the most advanced technology to make card making easy and fast for our clients!"
    />
  );
};

export default About;
