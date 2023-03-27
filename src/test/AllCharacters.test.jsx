import {render, screen} from '@testing-library/react';
import AllCharacters from '../components/allCharacters';
import { MemoryRouter as Router } from 'react-router-dom';

beforeEach(()=>{
    render(<Router><AllCharacters/></Router>);
})

test('get charactersImg',async()=>{
    const characterImg = await screen.findByRole('image');
    expect (characterImg).toBeInTheDocument();
});

test ('get charactersListName',async()=>{
    const characterName = await screen.findByText('Morty Smith');
    expect (characterName).toBeInTheDocument();
});



