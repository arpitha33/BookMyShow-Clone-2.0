import React, { useState } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Carousel, 
  Modal, 
  Button, 
  Form,
  Card,
  Row,
  Col,
  Tab,
  Tabs
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MOVIES_DATA = [
  {
    id: 1,
    name: 'Batman',
    genre: 'Action/Superhero',
    releaseDate: '2022-03-04',
    rating: 4.5,
    ticketPrice: '$14',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/Q1i6_3o5Wleajks5Y80Td4NhFnWYpYBp_RKg5OHSb2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYmF0bWFu/LW5ld3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAx/L1RoZS1CYXRtYW4t/MjAyMi1Nb3ZpZS1Q/b3N0ZXItMDEuanBl/Zz9maXQ9Mjc2NCw0/MDk2JnF1YWxpdHk9/ODAmc3RyaXA9aW5m/byZzc2w9MSZ3PTY5/NiZoPTUzNQ',
    backdrop: 'https://image.tmdb.org/t/p/original/3bbVWdNXSn5K1wqMF9VW6uffj2a.jpg',
    trailer: 'https://www.youtube.com/embed/mqqft2x_Aa4',
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption."
  },
  {
    id: 2,
    name: 'Dune: Part Two',
    genre: 'Sci-Fi/Adventure',
    releaseDate: '2024-03-01',
    rating: 4.7,
    ticketPrice: '$15',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/sBsKl5XDdbEntQB08Fy7eM2Ci9EV2Sn2RHO8Q3MfkH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/b2ZmaWNpYWwtY2hh/cmFjdGVyLXBvc3Rl/cnMtZm9yLWR1bmUt/cGFydC10d28tdjAt/OXJwdTdxbTYzNDRj/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9M2YzOGVmYTc2/MGUxNmIyY2Y1ZDNl/YTIxODVlZmE4ZWJj/ODUyYzg1OQ',
    backdrop: 'https://image.tmdb.org/t/p/original/9sqlRm8PuH7QPrFdBKU0M3HG9oa.jpg',
    trailer: 'https://www.youtube.com/embed/NEWS7aJKUm8',
    description: 'Paul Atreides unites with Chani and the Fremen to seek revenge against those who destroyed his family.'
  },
  {
    id: 3,
    name: 'Avengers: Endgame',
    genre: 'Action/Superhero',
    releaseDate: '2019-04-26',
    rating: 4.8,
    ticketPrice: '$15',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/TDGNiQg5NS8zTIy5_Qkvqd4DMA5qIS0utEH3C5x_Y0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzJ4L01M/b3UyX1BheW9mZl8x/LVNodF9PbmxpbmVf/RE9NX3Y3X1NtLmpw/Zw',
    backdrop: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3pTfTPnTh.jpg',
    trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    description: 'The Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.'
  },
  {
    id: 4,
    name: 'Inception',
    genre: 'Sci-Fi/Thriller',
    releaseDate: '2010-07-16',
    rating: 4.8,
    ticketPrice: '$12',
    status: 'Classic',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/mz5botSoMmwYorEw8hJ7KmMHIX4.jpg',
    trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
  },
  {
    id: 5,
    name: 'Guardians of the Galaxy Vol. 3',
    genre: 'Sci-Fi/Comedy',
    releaseDate: '2023-05-05',
    rating: 4.6,
    ticketPrice: '$15',
    status: 'Now Showing',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/tLxjm8WTPRhqw9mhHGMhZDfN0kV.jpg',
    trailer: 'https://www.youtube.com/embed/u3V5KDHRQvk',
    description: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.'
  },
  {
    id: 6,
    name: 'Oppenheimer',
    genre: 'Biography/Drama',
    releaseDate: '2023-07-21',
    rating: 4.7,
    ticketPrice: '$16',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/f7-T2eQ0tCLxPqu8XCN8pygmYNLoXwOkGbZ5gcrrvpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21p/Y2Jvb2suY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy80/LzIwMjMvMDUvNzVh/NTE2MmUtNjBiOC00/YmY0LTk5MDItM2Mw/ZWY0OWFmODVmLmpw/Zz93PTEwMjQ',
    backdrop: 'https://image.tmdb.org/t/p/original/fm6ne9L0hyKRl3mY4LJsa6ZWYFR.jpg',
    trailer: 'https://www.youtube.com/embed/uYPbbksJxIg',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.'
  },
  {
    id: 7,
    name: 'John Wick: Chapter 4',
    genre: 'Action/Thriller',
    releaseDate: '2023-03-24',
    rating: 4.6,
    ticketPrice: '$14',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/5sMMfm6Mjvr1vJoptzPeKl3kLQTr3o-au5uBhFSwwdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMy8w/Mi9qb2huLXdpY2st/NC1rZWFudS1yZWV2/ZXMtY2FzdC1jaGFy/YWN0ZXItcG9zdGVy/cy1pbmZvLTAxLmpw/Zz9xPTc1Jnc9ODAw/JmNicj0xJmZpdD1t/YXg',
    backdrop: 'https://image.tmdb.org/t/p/original/b0Ej6M4jh4t7wM4h0RuKLmZQwxL.jpg',
    trailer: 'https://www.youtube.com/embed/qEVUtrk8_B4',
    description: 'John Wick uncovers a path to defeating The High Table, a powerful organization that controls the world of assassins.'
  },
  {
    id: 8,
    name: 'Spider-Man: Across the Spider-Verse',
    genre: 'Animation/Superhero',
    releaseDate: '2023-06-02',
    rating: 4.9,
    ticketPrice: '$13',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/fMrE0ZBjrtRU7sHCsxzvDqCsyHlbMHsfFpm3D4FKYQg/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMjMvcG9zdGVy/cy9zcGlkZXJtYW5f/YWNyb3NzX3RoZV9z/cGlkZXJ2ZXJzZS5q/cGc',
    backdrop: 'https://image.tmdb.org/t/p/original/4aWUYdmFXqDftJV5FMIw0sKmAIh.jpg',
    trailer: 'https://www.youtube.com/embed/shW9i6k8fRg',
    description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.'
  },
  {
    id: 9,
    name: 'Mission: Impossible - Dead Reckoning Part One',
    genre: 'Action/Spy',
    releaseDate: '2023-07-14',
    rating: 4.5,
    ticketPrice: '$15',
    status: 'Now Showing',
    poster: 'https://imgs.search.brave.com/5Hu6PrTeIeGfC7TomNrqE8lnu7B6hK4gZlMY_v-Xhxc/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMjMvcG9zdGVy/cy9taXNzaW9uX2lt/cG9zc2libGVfX2Rl/YWRfcmVja29uaW5n/X3BhcnRfb25lX3Zl/cjIuanBn',
    backdrop: 'https://image.tmdb.org/t/p/original/wE6Uo1eC5zyMIcjMy9Kcxh6sdr1.jpg',
    trailer: 'https://www.youtube.com/embed/avz06PDnPgQ',
    description: 'Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.'
  }
];

const EVENTS_DATA = [
  {
    id: 1,
    name: 'Summer Music Festival',
    date: '2024-07-15',
    location: 'Central Park, New York',
    price: '$75',
    description: 'A day-long music extravaganza featuring top international artists across multiple genres.',
    poster: 'https://imgs.search.brave.com/zlxRW0CWXSS04kdqpffybRs3vPxlXcAIrfCf6yJWDS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQw/OTUxMTI0L3Bob3Rv/L2xpdmUtZmVzdGl2/YWwtbGlmZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WlpE/WWlXZnhncUthc05y/M0ZLOFk4MklzWXkw/OFFPOE44S3E4dzNQ/VXFPaz0'
  },
  {
    id: 2,
    name: 'Comedy Night Stand-up Special',
    date: '2024-06-20',
    location: 'Comedy Club, Los Angeles',
    price: '$45',
    description: 'An evening of side-splitting comedy with renowned stand-up comedians.',
    poster: 'https://imgs.search.brave.com/6VN5nMK2bV1P45zb4tqw5yd9TAyC6rxePnrf0PFQMnc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDIv/bmV0ZmxpeC1zdGFu/ZC11cC1zcGVjaWFs/cy5qcGc_cXVhbGl0/eT04NSZ3PTI0MDA'
  }
];

const PLAYS_DATA = [
  {
    id: 1,
    name: 'Hamilton',
    date: '2024-08-10',
    location: 'Broadway Theater, New York',
    price: '$120',
    description: 'The groundbreaking musical about American Founding Father Alexander Hamilton.',
    poster: 'https://imgs.search.brave.com/4nInaK0sfbUFyMWS3kXUa48wqqV93KcIHgfKq6c4Ra8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9maXQtNTYwdyxm/X2F1dG8scV9hdXRv/OmJlc3Qvcm9ja2Nt/cy8yMDI1LTAzLzI1/MDMwNi1oYW1pbHRv/bi1tbi0wODMwLTlk/MWUwZi5qcGc'
  },
  {
    id: 2,
    name: 'The Lion King',
    date: '2024-09-15',
    location: 'Royal Theater, London',
    price: '$95',
    description: 'The award-winning musical adaptation of the beloved Disney animated film.',
    poster: 'https://imgs.search.brave.com/egCud-7Uov3mZHJMQY1tGsqq8PUQUyX-09k7jV32udU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vOS85ZC9E/aXNuZXlfVGhlX0xp/b25fS2luZ18yMDE5/LmpwZw'
  }
];

const BookMyShowApp = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedPlay, setSelectedPlay] = useState(null);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [setSearchTerm ,setSearchResults,searchTerm] = useState(null);
  const handleShowMovieModal = (movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  const handleShowEventModal = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleShowPlayModal = (play) => {
    setSelectedPlay(play);
    setShowPlayModal(true);
  };
  const handleSearch = () => {
    const results = MOVIES_DATA.filter(movie => 
      movie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults(MOVIES_DATA);
  };
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">BookMyShow 2.0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search movies/events..." className="me-2" />
              <Button variant="outline-light">Search</Button>
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Tabs */}
      <Container className="mt-4">
        <Tabs
          defaultActiveKey="movies"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {/* Movies Tab */}
          <Tab eventKey="movies" title="Movies">
            <Row className="g-4">
              {MOVIES_DATA.map((movie) => (
                <Col xs={12} sm={6} md={4} lg={4} key={movie.id}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={movie.poster} style={{ height: '400px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{movie.name}</Card.Title>
                      <Card.Text>Genre: {movie.genre}</Card.Text>
                      <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
                      <Button variant="primary" onClick={() => handleShowMovieModal(movie)}>View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>

          {/* Events Tab */}
          <Tab eventKey="events" title="Events">
            <Row className="g-4">
              {EVENTS_DATA.map((event) => (
                <Col xs={12} sm={6} md={4} lg={4} key={event.id}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={event.poster} style={{ height: '400px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{event.name}</Card.Title>
                      <Card.Text>Date: {event.date}</Card.Text>
                      <Card.Text>Location: {event.location}</Card.Text>
                      <Button variant="primary" onClick={() => handleShowEventModal(event)}>View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>

          {/* Plays Tab */}
          <Tab eventKey="plays" title="Plays">
            <Row className="g-4">
              {PLAYS_DATA.map((play) => (
                <Col xs={12} sm={6} md={4} lg={4} key={play.id}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={play.poster} style={{ height: '400px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{play.name}</Card.Title>
                      <Card.Text>Date: {play.date}</Card.Text>
                      <Card.Text>Location: {play.location}</Card.Text>
                      <Button variant="primary" onClick={() => handleShowPlayModal(play)}>View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>

      {/* Movie Modal */}
      <Modal show={showMovieModal} onHide={() => setShowMovieModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedMovie?.poster} alt={selectedMovie?.name} className="img-fluid mb-3" />
          <p><strong>Genre:</strong> {selectedMovie?.genre}</p>
          <p><strong>Release Date:</strong> {selectedMovie?.releaseDate}</p>
          <p><strong>Description:</strong> {selectedMovie?.description}</p>
          <p><strong>Rating:</strong> {selectedMovie?.rating}</p>
          <p><strong>Ticket Price:</strong> {selectedMovie?.ticketPrice}</p>
          <iframe 
            width="100%" 
            height="315" 
            src={selectedMovie?.trailer} 
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>

      {/* Event Modal */}
      <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedEvent?.poster} alt={selectedEvent?.name} className="img-fluid mb-3" />
          <p><strong>Date:</strong> {selectedEvent?.date}</p>
          <p><strong>Location:</strong> {selectedEvent?.location}</p>
          <p><strong>Description:</strong> {selectedEvent?.description}</p>
          <p><strong>Ticket Price:</strong> {selectedEvent?.price}</p>
          <Button variant="primary">Book Tickets</Button>
        </Modal.Body>
      </Modal>

      {/* Play Modal */}
      <Modal show={showPlayModal} onHide={() => setShowPlayModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPlay?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedPlay?.poster} alt={selectedPlay?.name} className="img-fluid mb-3" />
          <p><strong>Date:</strong> {selectedPlay?.date}</p>
          <p><strong>Location:</strong> {selectedPlay?.location}</p>
          <p><strong>Description:</strong> {selectedPlay?.description}</p>
          <p><strong>Ticket Price:</strong> {selectedPlay?.price}</p>
          <Button variant="primary">Book Tickets</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookMyShowApp;