import {render, screen} from '@testing-library/react';
import AllCharacters from '../components/allCharacters';
import { MemoryRouter as Router } from 'react-router-dom';

beforeEach(()=>{
    render(<Router><AllCharacters/></Router>);
})

test('get charactersImg',async()=>{
    const characterImg = await screen.findByRole('img');
    expect (characterImg).toBeInTheDocument();
});

test ('get charactersListName',async()=>{
    const characterName = await screen.findByText(/Rick Sanchez/i);
    expect (characterName).toBeInTheDocument();
});



