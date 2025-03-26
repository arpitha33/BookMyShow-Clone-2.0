import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Modal 
} from 'react-bootstrap';

// Mock Streaming Content Data
const STREAMING_CATEGORIES = [
  {
    id: 'trending',
    name: 'Trending Now',
    items: [
      {
        id: 1,
        title: 'Stranger Things',
        genre: 'Sci-Fi/Horror',
        rating: 4.7,
        image: 'https://via.placeholder.com/200x300?text=Stranger+Things',
        description: 'A sci-fi horror series about mysterious supernatural events in a small town.',
        trailer: 'https://www.youtube.com/embed/mNgwNXKBEW0'
      },
      {
        id: 2,
        title: 'The Witcher',
        genre: 'Fantasy/Action',
        rating: 4.5,
        image: 'https://via.placeholder.com/200x300?text=The+Witcher',
        description: 'A monster hunter struggles to find his place in a world of supernatural creatures.',
        trailer: 'https://www.youtube.com/embed/ndl1W4ltcmg'
      },
      {
        id: 3,
        title: 'Money Heist',
        genre: 'Crime/Thriller',
        rating: 4.6,
        image: 'https://via.placeholder.com/200x300?text=Money+Heist',
        description: 'A criminal mastermind recruits eight people to carry out an ambitious plan.',
        trailer: 'https://www.youtube.com/embed/To_kEjaQs1w'
      }
    ]
  },
  {
    id: 'top-rated',
    name: 'Top Rated',
    items: [
      {
        id: 4,
        title: 'Breaking Bad',
        genre: 'Crime/Drama',
        rating: 4.9,
        image: 'https://via.placeholder.com/200x300?text=Breaking+Bad',
        description: 'A high school chemistry teacher turns to a life of crime.',
        trailer: 'https://www.youtube.com/embed/HhesaQXLuRY'
      },
      {
        id: 5,
        title: 'Game of Thrones',
        genre: 'Fantasy/Drama',
        rating: 4.8,
        image: 'https://via.placeholder.com/200x300?text=Game+of+Thrones',
        description: 'Noble families fight for control over the mythical lands of Westeros.',
        trailer: 'https://www.youtube.com/embed/KPLWWIOCOOQ'
      }
    ]
  }
];

function StreamingSection() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  const handleShowTrailer = (show) => {
    setSelectedShow(show);
    setShowTrailerModal(true);
  };

  return (
    <Container fluid className="streaming-section px-4 py-3">
      {STREAMING_CATEGORIES.map(category => (
        <div key={category.id} className="mb-4">
          <h3 className="mb-3">{category.name}</h3>
          <Row className="flex-nowrap overflow-auto">
            {category.items.map(show => (
              <Col key={show.id} xs={6} md={3} lg={2} className="mb-3">
                <Card 
                  className="h-100 show-card" 
                  style={{ 
                    minWidth: '200px', 
                    cursor: 'pointer', 
                    transition: 'transform 0.3s' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Card.Img 
                    variant="top" 
                    src={show.image} 
                    style={{ 
                      height: '300px', 
                      objectFit: 'cover' 
                    }} 
                  />
                  <Card.Body>
                    <Card.Title>{show.title}</Card.Title>
                    <Card.Text>
                      <small>{show.genre} | ⭐ {show.rating}/5</small>
                    </Card.Text>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      onClick={() => handleShowTrailer(show)}
                    >
                      Watch Trailer
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {/* Trailer Modal */}
      <Modal 
        show={showTrailerModal} 
        onHide={() => setShowTrailerModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedShow?.title} - Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedShow && (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="100%"
                height="400"
                src={selectedShow.trailer}
                title={`${selectedShow.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default StreamingSection;