export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const GENERAL_AURAL_UPDATE = 'GENERAL-AURAL-UPDATE';
export const generalAuralUpdate = () => ({
    type: GENERAL_AURAL_UPDATE,
})

