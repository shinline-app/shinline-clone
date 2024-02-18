import CalcContent from '../../calc/Calc';
import NewsContent from '../../news/components/News';

function HomePage() {
  return (
    <div className="py-24 pb-12">
      <CalcContent />
      <NewsContent />
    </div>
  );
}

export default HomePage;
