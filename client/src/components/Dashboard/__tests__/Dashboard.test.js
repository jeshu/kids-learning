import React from 'react';
import Dashboard from "..";
import { render } from "@testing-library/react";


describe('test suit for dashboard', () => {
    const props = {
        data:[{
            title:"title-1",
            path:"path-1",
            desc:"desc-1",
            id:"id-1"
        },{
            title:"title-2",
            path:"path-2",
            desc:"desc-2",
            id:"id-2"
        },{
            title:"title-3",
            path:"path-3",
            desc:"desc-3",
            id:"id-3"
        }]
    }
    it('should render without errors but not buttons', () => {
        const { container } = render(<Dashboard />)
        expect(container).toMatchSnapshot();
    });

    it('should render the DashboardItems in dom', ()=>{
        const { getAllByTestId } = render(<Dashboard {...props} />);
        expect(getAllByTestId("dashboard-item").length).toBe(3);
    })

});
