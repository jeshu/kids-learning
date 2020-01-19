import React from "react";
import DashboardItem from "../DashboardItem";
import { render, fireEvent } from "@testing-library/react";

describe('tests for component DashboardItem', () => {
    const props = {
        id: "someId",
        path:"someImagePath",
        title:"someDummyTitle",
        desc: "some dummy description"
    }

    it('should render without errors but not buttons', () => {
        const { container, queryAllByRole } = render(<DashboardItem />);
        expect(queryAllByRole("button")).toHaveLength(0);
        expect(container).toMatchSnapshot();
    });

    it('should render without errors with buttons ', () => {
        const { container, queryAllByRole } = render(<DashboardItem {...props}/>);
        expect(queryAllByRole("button")).toHaveLength(3);
        expect(container).toMatchSnapshot();
    });
    
    it('should call the preview method from props with id', () => {
        props.onPreview = jest.fn();
        const {getByTitle} = render(<DashboardItem {...props}/>);
        fireEvent.click(getByTitle("preview"));
        expect(props.onPreview).toHaveBeenCalledTimes(1);
        expect(props.onPreview).toHaveBeenCalledWith({id:"someId"});
    });

    it('should call the onLaunch of props with id', () => {
        props.onLaunch = jest.fn();
        const {getByTitle} = render(<DashboardItem {...props}/>);
        fireEvent.click(getByTitle("launch"));
        expect(props.onLaunch).toHaveBeenCalledTimes(1);
        expect(props.onLaunch).toHaveBeenCalledWith({id:"someId"});
        
    });
    
});
