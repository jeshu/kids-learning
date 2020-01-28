import React, { useEffect } from 'react';
import DashboardItem from './DashboardItem';
import { Grid, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import {loadDashboardData} from '../../core/actions/dashboard'

export function Dashboard({loadData = ()=>{}, data}) {
    useEffect(()=>{
        loadData();
    }, [loadData]);

    
    return data ? (
        <React.Fragment>
            <Container>
                <Grid container spacing={3} >
                    {data.map(item =>
                        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                            <DashboardItem  data-testid="dashboard-item" {...item} />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
    ) : "";
}

const mapStateToProps = (state) => ({
    ...state.Dashboard
})

const mapDispatchToProps = {
    loadData: loadDashboardData
}

export default connect(mapStateToProps, mapDispatchToProps)( Dashboard)
