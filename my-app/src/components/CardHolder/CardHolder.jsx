import './CardHolder.css';
import ReactCards from '../ReactCards/ReactCards';
import Components from '../../images/Components.png';
import Declarative from '../../images/Declrative.png';
import JSX from '../../images/JSX.png';
import SingleWay from '../../images/SingleWay.png';

function CardHolder(){

        const arrayCards=[
            {src: Declarative, title: 'Declarative', description: 'React makes it painless to create interactive UIs' },
            {src: Components, title: 'Components', description: 'Build encapsulated components' },
            {src: SingleWay, title: 'Single-Way', description: 'A set of immutable values' },
            {src: JSX, title: 'JSX', description: 'Statically-typed' }
        ]

        return (
            <div className="container">
                {arrayCards.map((card) => {
                    return <ReactCards src={card.src} title={card.title} description={card.description} />
                })}
            </div>
    );
}

export default CardHolder;