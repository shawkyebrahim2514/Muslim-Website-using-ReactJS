import QuranPlayerHeader from './QuranPlayerHeader'
import QuranPlayerBody from './QuranPlayerBody'
import QuranPlayerFooter from './QuranPlayerFooter';
import { useImmerReducer } from 'use-immer';
import { reducer } from '../../../reducers/QuranPlayerReducer';
import QuranPlayerContext from './QuranPlayerContext';
import { useMemo } from 'react';
import Tafsir from './Tafsir';
import { Box, Container } from '@mui/material';
import { getQuranPlayerLocalStorage } from '../../../data/localStorage';

export default function QuranPlayer() {
    const [quranPlayerState, dispatchQuranPlayerState] = useImmerReducer(reducer, getQuranPlayerLocalStorage());
    const contextValue = useMemo(() => ([quranPlayerState, dispatchQuranPlayerState]), [quranPlayerState]);
    const containerMaxWidth = useMemo(() => 'xl', []);

    return (
        <QuranPlayerContext.Provider value={contextValue}>
            <Box component='main'>
                <Container maxWidth={containerMaxWidth}>
                    <QuranPlayerHeader containerMaxWidth={containerMaxWidth} />
                    <QuranPlayerBody containerMaxWidth={containerMaxWidth} />
                    <QuranPlayerFooter containerMaxWidth={containerMaxWidth} />
                </Container>
                <Tafsir containerMaxWidth={containerMaxWidth} />
            </Box>
        </QuranPlayerContext.Provider>
    )
}
