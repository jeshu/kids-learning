import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import SettingPopup from '../SettingsPopup';
import { Settings } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

function Header({ onSettingsUpdate }) {
    const [settingStatus, setSettingStatus] = useState(false)
    const classes = useStyles();
    const showSettings = () => {
        setSettingStatus(true);
    };

    const hideSettings = () => {
        setSettingStatus(false);
    };
    return (
        <div data-testid="header-component">
            <AppBar position="static">
                <Container>

                    <Toolbar>
                        <Typography variant="h6" className={classes.title} data-testid="logo">Kids Learning</Typography>
                        <IconButton color="inherit" onClick={showSettings} data-testid="settings-btn">
                            <Settings />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <SettingPopup show={settingStatus} onClose={hideSettings} onSettingsUpdate={onSettingsUpdate} />
        </div>
    )
}

export default Header
