import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";

const FavCards = () => {
  return (
    <>
      <PageHeader
        title="Fav Cards"
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

export default FavCards;
