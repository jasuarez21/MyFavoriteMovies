/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '../../../utils/test-util';
import List from '../List';

const movies = [
  {
    title: 'Some movie',
    poster_path: '',
    overview: 'Description'
  }
];

describe('Given a List component', () => {
  test('Should render a List of Movies', () => {
    render(<List movies={movies} />, {
      initialState: {
        favourites: [{
          title: 'Some movie', id: 1212
        }],
        movies
      }
    });
    expect(screen.getByText(/Some movie/i)).toBeInTheDocument();
  });
});
