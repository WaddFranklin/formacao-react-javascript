import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="redes-sociais">
                <img src="/images/fb.png" alt="facebook" />
                <img src="/images/tw.png" alt="twitter" />
                <img src="/images/ig.png" alt="instagram" />
            </div>
            <div>
                <img src="/images/logo.png" alt="organo" />
            </div>
            <div>
                <p>Desenvolvido por Franklin Nascimento.</p>
            </div>
        </footer>
    );
};
export default Rodape;
