import React from 'react'
import Header from '../index';
import {render, fireEvent, screen, waitForDomChange} from '@testing-library/react';

describe('Header component test', () => {
    it('should render the header component wihtout errors', () => {
        const {asFragment} = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
        expect(screen.getByTestId("header-component")).toBeInTheDocument();
    });

    it('should should render a logo in header', ()=>{
        render(<Header />)
        expect(screen.getByTestId("logo")).toBeInTheDocument();
    });

    it('should have settings button', ()=>{
        render(<Header />)
        expect(screen.getByTestId("settings-btn")).toBeInTheDocument();
    })

    it('should click on setting button open the settingPopup', async ()=> {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((init) => [init, setState]);
        render(<Header />)
        fireEvent.click(screen.getByTestId("settings-btn"));
        expect(setState).toHaveBeenCalledWith(true);
        
    });
})
