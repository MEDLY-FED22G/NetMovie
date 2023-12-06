import { CardsCarousel } from '../Components/CardsCarousel';
import { MoviesCarousel } from '../Components/MoviesCarousel';

export default function Home() {
  return (
    <>
      <div style={{  width: '100%', height: '400px' }}>
        <MoviesCarousel />
        <CardsCarousel />
      </div>
    </>
  );
}
