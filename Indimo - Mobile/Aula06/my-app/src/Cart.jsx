import React from 'react';
import { Modal, Button, ListGroup} from 'react-bootstrap';

const cart = ({ cartItems, RemoveFromCart, show, handClose, finalizePurchase }) => {

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    
    return (
        <Modal Show={show} onHide={handClose}>
            <Moldal.header closeButton>
                <Modal.Title>Carrinho de Compras</Modal.Title>
            </Moldal.header>
            <Moldal.body>
                <ListGroup>
                    {cartItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                            {item.name} - R$ {item.price.toFixed(2)}
                            <Button variant="danger" size="sm" onClick={() => RemoveFromCart(index)} className="ms-2">
                                Remover
                            </Button>
                        </ListGroup.Item>
                        )
                    )}
                </ListGroup>
                <p className="mt-3">Total: R$ {totalPrice.toFixed(2)}</p>
            </Moldal.body>
            <Moldal.footer>
                <Button variant="secondary" onClick={handClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={finalizePurchase}>
                    Finalizar Compra
                </Button>
            </Moldal.footer>
        </Modal>
    );
}

export default cart;

