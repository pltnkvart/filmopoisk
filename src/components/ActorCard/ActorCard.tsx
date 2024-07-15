import { Actor } from '~/types/types';
import styles from './styles.module.css';

interface IActorCardProps {
  actor: Actor;
}

export const ActorCard = ({ actor }: IActorCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={actor.photo} alt={actor.name} />
      <p className={styles.name}>{actor.name}</p>
    </div>
  );
};
