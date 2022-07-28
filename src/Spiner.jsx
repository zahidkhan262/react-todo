import Spinner from 'react-bootstrap/Spinner';

function Spiner() {
    return (
        <div className="text-center">
            <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Spiner;