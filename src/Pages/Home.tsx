import { MoviesCarousel } from '../Components/MoviesCarousel';

export default function Home() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    marginTop: '50px', // Adjust margin as needed
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <MoviesCarousel />
      {/* <CardsCarousel /> */}
    </div>
  );
}
