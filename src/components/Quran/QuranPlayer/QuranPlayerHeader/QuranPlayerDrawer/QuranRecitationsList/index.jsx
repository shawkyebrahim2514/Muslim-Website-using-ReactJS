import { Fragment, useMemo, useState } from 'react'
import recitations from '../../../../../../data/recitations'
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { v4 as uuid } from 'uuid';
import { Divider } from '@mui/material';
import QuranRecitationListTitle from './QuranRecitationListTitle';
import QuranRecitationItem from './QuranRecitationItem';

export default function QuranRecitationsList() {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return Object.entries(recitations).map(([recitationId, value], index) => {
            return (
                <Fragment key={uuid()}>
                    <QuranRecitationItem
                        recitationId={recitationId}
                        value={value}
                        recitationNumber={index + 1} />
                    <Divider light />
                </Fragment>
            )
        })
    }, []);

    return (
        <>
            <QuranRecitationListTitle open={open} setOpen={setOpen} />

            <Collapse in={open} timeout={0}>
                <List component="div" disablePadding>
                    {items}
                </List>
            </Collapse>
        </>
    )
}
