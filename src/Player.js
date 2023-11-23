import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Player =({element})=> {
    return (
<Card style={{ width: '18rem', borderRadius:'8px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
<Card.Img variant="top" src={element.imageUrl} />
<Card.Body>
  <Card.Title><h1>{element.name}</h1></Card.Title>
  <Card.Text>
    {element.team}
  </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroup.Item>Age : {element.age}</ListGroup.Item>
  <ListGroup.Item><h2>{element.nationality}</h2></ListGroup.Item>
  <ListGroup.Item>#{element.jerseyNumber}</ListGroup.Item>
</ListGroup>
<Card.Body>
  <Card.Link href="#">Vote for </Card.Link>
  <Card.Link href="#">More stats</Card.Link>
</Card.Body>
</Card> )
}

export default Player