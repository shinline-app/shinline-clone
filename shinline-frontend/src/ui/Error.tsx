import { useRouteError } from 'react-router-dom';
import Button from './Button.tsx';

type ErrorProps = {
  to?: string;
  text?: string;
};

function Error({ to, text }: ErrorProps) {
  const error: Error = useRouteError() as Error;

  return (
    <div className="mt-14">
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <Button type="success" to={to}>
        &larr; {text ? text : 'Go back'}
      </Button>
    </div>
  );
}

export default Error;
