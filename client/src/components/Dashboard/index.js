import React from 'react';
import DashboardItem from './DashboardItem';
import { Grid, Container } from '@material-ui/core';

function Dashboard(props) {
    return props ? (
        <React.Fragment>
            <Container>
                <Grid container spacing={3}>
                    {props.data && props.data.map(item =>
                        <Grid key={item.id} item xs={12} md={6} lg={3} >
                            <DashboardItem  data-testid="dashboard-item" {...item} />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
    ) : "";
}

export default Dashboard
