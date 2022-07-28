import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap'
import Button from './Button';
import ErrorFound from './ErrorFound';
import iphone from './iphone.jpg'
import Spiner from './Spiner';
import { useAxios } from './useAxios';
// import Wrong from './wrong.gif'
import { ModalContainer, ModalBody, ModalBox, ModalHeader } from './Modal';

const ProductCard = () => {

    // const datas = [
    //     { ImgPath: "./iphone.jpg", Name: 'Iphone X', Price: 60000, Description: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
    //     { ImgPath: "logo.png", Name: 'Iphone XR', Price: 40000, Description: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
    //     { ImgPath: "logo.png", Name: 'Iphone 11', Price: 52000, Description: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
    //     { ImgPath: "logo.png", Name: 'Iphone 12', Price: 60000, Description: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
    //     { ImgPath: "logo.png", Name: 'Iphone 13', Price: 73000, Description: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
    //     { ImgPath: "logo.png", Name: 'Iphone 14', Price: 120000, Description: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
    // ];
    let initialScreenWidth = 0;
    const [productList, setProductList] = useState([]);
    const [windowWidth, setWindowWidth] = useState(initialScreenWidth)
    const [modal, setModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null)

    const { data, error, loading, setError } = useAxios({
        method: "GET",
        url: 'todos'
    });

    useEffect(() => {
        data ? setProductList(data) : setProductList([])
        const resizeListener = (e) => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeListener)
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [data, windowWidth, initialScreenWidth]);
    const handleClick = (select) => {
        setSelectedData(select)
        handleModal()
    }

    const handleModal = () => {
        setModal(!modal)
        console.log("first")
    }

    const renderData = productList.map((items) => (
        <Col lg={3} md={4} sm={6} key={items.id}>
            <Card className='mb-3 p-1' style={{ backgroundColor: '#e6e6e666', boxShadow: '5px 5px 0px 2px #e0e0e018' }}>
                <Card.Img src={iphone} alt="image" />
                <Card.Body className=''>
                    <div className="p-2">
                        <h3 className='text-dark'>{items.id}</h3>
                        <p>${items.title}</p>
                    </div>
                    <p>{items.Description}</p>
                    <div className="d-flex justify-content-between">
                        <Button color='gold' border="1px solid #EEEEEE" radius={'6px'} padding={'10px 20px'} fontColor={'#ffffff'}>Buy Now</Button>
                        <Button handleClick={() => handleClick(items)} color='rgba(33, 138, 219, 0.733)' border="1px solid #EEEEEE" radius={'6px'} padding={'10px 20px'} fontColor={'#ffffff'}>View Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    ))

    const header = (
        <div>
            <ModalHeader className='d-flex justify-content-between align-items-center'>
                <p>Modal</p>
                <p onClick={handleModal} style={{ cursor: 'pointer', fontSize: '40px' }}>&times;</p>
            </ModalHeader>
        </div>
    )

    const body = (
        <ModalBody className='center'>
            <Card className='mb-3 p-1' style={{ backgroundColor: '#e6e6e666', boxShadow: '5px 5px 0px 2px #e0e0e018' }}>
                <Card.Img src={iphone} alt="image" />
                <Card.Body className=''>
                    <div className="p-2">
                        <h3 className='text-dark'>{selectedData?.id}</h3>
                        <p>${selectedData?.title}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                    </div>
                </Card.Body>
            </Card>
        </ModalBody>
    )


    return (
        <>
            <div>
                <Container >
                    <Row >
                        {
                            loading ? <Spiner /> : error ? <ErrorFound /> :
                                <>
                                    {renderData}
                                </>
                        }
                    </Row>
                    <ModalContainer >
                        <Button handleClick={handleModal}>OpenModal</Button>
                        <ModalBox className={modal ? 'active-modal' : ''} >
                            {header}
                            {body}
                        </ModalBox>
                    </ModalContainer>
                </Container>
            </div>
        </>
    )
}

export default ProductCard