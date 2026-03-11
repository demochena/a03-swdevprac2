import styles from './card.module.css';
import Image from 'next/image';

export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/concert_event.jpg'}
                alt='Product Picture'
                fill={true}
                objectFit='concert'/>
            </div>
            <div className={styles.cardtext}>
                <h3>Concert Theme</h3>
                <h5>A vibrant venue perfect for concerts, parties, and unforgettable night events.</h5>
            </div>
        </div>
    )
}