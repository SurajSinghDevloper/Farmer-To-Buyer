import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { signout } from '../../../actions/auth.action';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Navbars(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(signout());
        history.push('/'); // Redirect to the home page
    };
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://react-bootstrap.netlify.app/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>

                </Container>
                <Button bg="primary" onClick={handleLogout}>
                    Log Out
                </Button>
            </Navbar>
        </>
    );
}

export default Navbars;