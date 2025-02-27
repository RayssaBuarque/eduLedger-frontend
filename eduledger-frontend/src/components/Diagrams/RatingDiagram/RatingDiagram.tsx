import styles from './RatingDiagram.module.css';
import Example from '../../PieChart/PieChart';
// IMAGENS

const RatingDiagram = () => {

  return (
    <div className={styles.container}>

        <div className='topDiagram'>
            <div className='infoLabels'>
                <h3>Your Rating</h3>
            </div>
        </div>

        <div className='diagram'>
            <Example/>
        </div>
          
    </div>
  );
};

export default RatingDiagram;