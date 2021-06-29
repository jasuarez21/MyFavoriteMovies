/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '../../utils/test-util';
import SearchMovie from './index';

jest.mock('react-router-dom', () => {
  const ActualReactRouterDom = jest.requireActual('react-router-dom');
  return {
    ...ActualReactRouterDom,
    useParams: () => ({
      infoMovieSearched: '1212'
    })
  };
});

const movies = [
  {
    title: 'Some movie',
    poster_path: '',
    id: '1212',
    overview: 'Description'
  }
];

describe('Given a SearchMovie component', () => {
  test('Should render detail of searchedMovie', () => {
    render(<SearchMovie />, {
      initialState: {
        favourites: [{
          title: 'Some movie', id: '1212'
        }],
        movies
      }
    });
    expect(screen.getByText(/Your search/i)).toBeInTheDocument();
  });
});
