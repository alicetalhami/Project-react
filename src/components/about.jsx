import PageHeader from "./common/PageHeader";

const About = () => {
    return (
      <PageHeader 
      
      title={
        <> 
        {" "}
       About Bcard <i className="bi bi-card-heading"></i>
        </>
      }
      
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores fuga culpa repellendus! Ipsum reiciendis sed ducimus blanditiis expedita labore doloribus consectetur adipisci error aliquam aliquid dolores, sit asperiores voluptatibus dolor?" />
    );
  };
  
  export default About;