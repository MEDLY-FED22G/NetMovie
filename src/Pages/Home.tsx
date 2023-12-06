import { MoviesCarousel } from '../Components/MoviesCarousel';

export default function Home() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginTop: '50px',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <MoviesCarousel />
    </div>
  );
}
