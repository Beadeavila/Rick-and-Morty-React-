import { render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
beforeEach(()=>{
  render(<App/>);
})


test('render logo',() =>{
  
  const logo =screen.getByRole('img', {name:'logo de serie'});
  expect(logo).toBeInTheDocument();
})

test('render title',() =>{
  
  const title=screen.getByText(/lista de persoNajes/i);
  expect(title).toBeInTheDocument();
})
