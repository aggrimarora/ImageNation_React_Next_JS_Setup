import Card from './Card.js';

const Featured = () => (
    <div class="container">
        <Card {...{"title": "Card 1", "description": "Info about Card 1"}} />
        <Card {...{"title": "Card 2", "description": "Info about Card 2"}} />
    </div>
    
);

export default Featured;