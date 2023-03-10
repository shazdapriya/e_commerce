import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../Testimonial/images/testimonial-1.jpg';
import img2 from '../Testimonial/images/quotes.svg';
import img3 from '../Testimonial/images/cta-banner.jpg';
import MainTitle from '../Title/MainTitle';
import '../Testimonial/css/style.css';

export default function MainTestimonial() {
  return (
    <>
      <div className='my-5'>
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <div>
                <Container>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                        <MainTitle ourTitle='Testimonial'/>
                    </Col>
                    </Row>
                  </Container>
                </div>
              <div className='testimonial_item border rounded text-center py-4'>
                  <img src={img1}
                  width="50%"
                  className="rounded-circle"
                  />
                  <h5 className='fw-bold my-3 fs-5' style={{ color:"#6c757d" }}>ALAN DOE</h5>
                  <h6 className='fw-normal  fs-5' style={{ color:"#333333" }}>CEO & Founder Invision</h6>
                  <img src={img2}
                  className="my-4"
                  height="20"
                  width="20"
                  />
                  <p className='fs-6'style={{ color:"#6c757d" }}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.</p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div
              className="testimonial_item d-flex justify-content-center broder rounded align-items-center "
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="testimonial_overly text-center bg-white p-5 border rounded border-0 opacity-75">
                <Button variant="dark">25% Discount</Button>
                <a href="#">
                  <h5 className="text-dark pt-2">Summer collection</h5>
                </a>
                <a href="#" className="text-light-emphasis">
                  SHOP NOW
                </a>
              </div>
            </div>
            </Col>
            <Col sm={12} md={3}>
            <div className='rounded'>
              <Container>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                      <MainTitle ourTitle='Our Services'/>
                  </Col>
                  </Row>
                </Container>
              </div>
              <div className='testimonial_item border rounded py-3 px-3'>
                  <div className='testimonial_services d-flex align-item-between my-4'>
                    <div>
                      <a href='#' className=' fs-3 me-3' style={{ color:"#6c757d" }}>
                        <i class="fa-solid fa-ship"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='fw-semibold fs-6' style={{ color:"#6c757d" }}>Worldwide Delivery</h4>
                      <p className='fs-6 fw-normal' style={{ color:"#6c757d" }}>For Order Over $100</p>
                    </div>
                  </div>
                  <div className='testimonial_services d-flex align-item-between mb-4'>
                    <div>
                      <a href='#' className=' fs-3 me-3' style={{ color:"#6c757d" }}>
                        <i class="fa-sharp fa-solid fa-rocket"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='fw-semibold fs-6' style={{ color:"#6c757d" }}>Next Day delivery</h4>
                      <p className='fs-6 fw-normal' style={{ color:"#6c757d" }}>UK Orders Only</p>
                    </div>
                  </div>
                  <div className='testimonial_services d-flex align-item-between mb-4'>
                    <div>
                      <a href='#' className=' fs-3 me-3' style={{ color:"#6c757d" }}>
                        <i class="fa-solid fa-phone"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='fw-semibold fs-6' style={{ color:"#6c757d" }}>Best Online Support</h4>
                      <p className='fs-6 fw-normal' style={{ color:"#6c757d" }}>Hours: 8AM - 11PM</p>
                    </div>
                  </div>
                  <div className='testimonial_services d-flex align-item-between mb-4'>
                    <div>
                      <a href='#' className=' fs-3 me-3' style={{ color:"#6c757d" }}>
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='fw-semibold fs-6' style={{ color:"#6c757d" }}>Return Policy</h4>
                      <p className='fs-6 fw-normal' style={{ color:"#6c757d" }}>Easy & Free Return</p>
                    </div>
                  </div>
                  <div className='testimonial_services d-flex align-item-between mb-4'>
                    <div>
                      <a href='#' className=' fs-3 me-3' style={{ color:"#6c757d" }}>
                        <i class="fa-solid fa-ticket"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='fw-semibold fs-6' style={{ color:"#6c757d" }}>30% money back</h4>
                      <p className='fs-6 fw-normal' style={{ color:"#6c757d" }}>For Order Over $100</p>
                    </div>
                  </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  )
}
