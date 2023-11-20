import PageHeader from "./common/PageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          {" "}
          Real <i className="bi bi-card-heading"></i>
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores fuga culpa repellendus! Ipsum reiciendis sed ducimus blanditiis expedita labore doloribus consectetur adipisci error aliquam aliquid dolores, sit asperiores voluptatibus dolor?"
    />
  );
};

export default Home;
