import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const rooms = [
  {
    title: 'CITY VIEW STAYCATION',
    img: ['/room1.jpg', '/room1_2.jpg', '/room1_3.jpg'],
    description:
      'Enjoy a relaxing stay in our City View Staycation with modern amenities and stunning city views.',
    pricing: ['Weekdays: ₱2,299 (2–4 pax)', 'Weekends: ₱2,500 (2–4 pax)'],
    inclusions: ['1 Bedroom', 'Queen Bed + Sofa', 'Kitchen', 'Smart TV', 'WiFi', 'Sky Lounge'],
  },
  {
    title: 'BEACH/POOL VIEW STAYCATION',
    img: ['/room2.jpg', '/room2_2.jpg', '/room2_3.jpg'],
    description:
      'Relax in a spacious 2-bedroom suite with pool views and full amenities.',
    pricing: ['Weekdays: ₱3,500 (4–6 pax)', 'Weekends: ₱4,000 (4–6 pax)'],
    inclusions: ['2 Bedrooms', '2 Queen Beds + Sofa', 'Pool Access', 'Kitchen', 'Smart TV', 'WiFi'],
  },
  {
    title: 'CITY VIEW STAYCATION – ROOM 2',
    img: ['/room3.jpg', '/room3_2.jpg', '/room3_3.jpg'],
    description:
      'Stylish 1-bedroom suite with kitchenette and skyline view.', 
    pricing: ['2 Pax – ₱2,000', '4 Pax – ₱2,300/2,500'],
    inclusions: ['1 Bedroom', 'Double Bed + Sofa', 'Mini Kitchen', 'Smart TV', 'WiFi', 'Toiletries'],
  },
];

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const arrowStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    padding: '0 .5rem',
    zIndex: 1,
  };

  return (
    <div className="position-relative overflow-hidden rounded-top-3" style={{ height: '160px' }}>
      <div
        className="d-flex"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
          transition: 'transform 0.4s ease-in-out',
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-100"
            style={{
              flex: `0 0 ${100 / images.length}%`,
              objectFit: 'cover',
              height: '160px',
            }}
          />
        ))}
      </div>
      <button
        className="position-absolute top-50 start-0 translate-middle-y"
        style={arrowStyle}
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="position-absolute top-50 end-0 translate-middle-y"
        style={arrowStyle}
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
}

function Rooms() {
  const [showModal, setShowModal] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);

  const handleShow = (room) => {
    setActiveRoom(room);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  return (
    <div className="">
      <div className="container text-center">
        <h3 className="fw-bold mb-2">Rooms</h3>
        <div className="bg-primary mx-auto rounded-pill mb-4" style={{ height: '4px', width: '50px' }}></div>

        <div className="row g-3">
          {rooms.map((room, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <ImageSlider images={room.img} />
                <div className="card-body p-3 text-start">
                  <p className="small mb-2">{room.description}</p>
                  <div className="text-center">
                    <button
                      className="btn btn-outline-primary p-2 btn-sm rounded "
                      onClick={() => handleShow(room)}
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeRoom && (
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title className="fs-6">{activeRoom.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: '0.9rem' }}>
              <strong>Rates:</strong>
              <ul className="mb-2">
                {activeRoom.pricing.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <strong>Inclusions:</strong>
              <ul>
                {activeRoom.inclusions.map((inc, idx) => (
                  <li key={idx}>{inc}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button size="sm" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Rooms;
