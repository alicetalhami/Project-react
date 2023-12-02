import PageHeader from "./PageHeader"
import { Link } from "react-router-dom"

const MyCards = () => {
    return (
        <>
        <PageHeader
        title="My Cards"
        description="you're cards are in the list below"
        />

        <div className="row">
            <link to="create-card">Create a New Card</link>
        </div>

        <div className="row">
            <p>no <cards styleName=""></cards></p>
        </div>
    
        </>
    );
};

export default MyCards;