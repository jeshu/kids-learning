import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons';
import { Modal, Fade, Backdrop, Typography, IconButton, Toolbar, Paper, Grid, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2, 3, 4),
        height: "60%",
        width: "80%"
    },

    heading: {
        flex: 1
    }
}))

function SettingPopup({ show, onClose, settings, onSettingsUpdate}) {
    const classes = useStyles();
    const onTrackChange = (evt)=>{
        const track = evt.target.value;
        onSettingsUpdate({
            ...settings,
            track
        });
    }
    return (
        <React.Fragment>
            <Modal data-testid="settings-popup"
                className={classes.modal}
                open={show}
                onClose={onClose}
                BackdropComponent={Backdrop}>
                <Fade in={show}>
                    <Paper className={classes.paper}>
                        <Toolbar>
                            <Typography className={classes.heading} variant="h5">Settings</Typography>
                            <IconButton onClick={onClose} data-testid="settings-close">
                                <Close />
                            </IconButton>
                        </Toolbar>
                        <Grid container>
                            <Grid item xs md lg>
                                <Typography>Music Track</Typography>
                            </Grid>
                            <Grid item xs md lg>
                                <FormControl>
                                    <InputLabel id="settings-music-label">Select Track</InputLabel>
                                    <Select
                                        labelId="settings-music-label"
                                        id="settings-music"
                                        data-testid="settings-music"
                                        value="1"
                                        onChange={onTrackChange}
                                    >
                                        <MenuItem value={1}>Symphony 1</MenuItem>
                                        <MenuItem value={2}>Symphony 2</MenuItem>
                                        <MenuItem value={3}>Symphony 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}

export default SettingPopup
