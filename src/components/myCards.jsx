import { Link } from "react-router-dom";
import PageHeader from "./common/PageHeader";

const MyCards = () => {
  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />

      <div className="row">
        <Link to="create-card">Create a New Card</Link>
      </div>

      <div className="row">
        <p>no cards...</p>
        some cards
      </div>
    </>
  );
};
 
export default MyCards;
