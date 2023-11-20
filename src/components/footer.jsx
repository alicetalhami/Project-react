const Footer = () => {
    return ( 

        <div className="border-top pt-3 py-2 text-center">
        <span>
        Bcard <i className="bi bi-card-heading"></i>
        </span>
        <span className="mx-2"> &copy;</span>
        <span>{new Date().getFullYear()}</span>


    </div>
    );
};

export default Footer;