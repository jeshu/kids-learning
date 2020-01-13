import React from "react";
import { render,  screen, fireEvent } from "@testing-library/react";
import SettingPopup from "../";

describe('Test suit for Setting popup', () => {

    it('should not render in dom', () => {
        render(<SettingPopup show={false} />)
        expect(screen.queryByTestId('settings-popup')).toBeNull();
    })

    it('should render without error', () => {
        const { asFragment} = render(<SettingPopup show={true} />);
        expect(asFragment()).toMatchSnapshot();
        expect(screen.queryByTestId('settings-popup')).toBeInTheDocument();
    })
    
    it('should not be in the dom once close btn clicked', () => {
        const onClose = jest.fn();
        let showState = true;
        const {getByTestId, rerender} = render(<SettingPopup show={showState} onClose={onClose}  />);
        fireEvent.click(screen.queryByTestId('settings-close'));
        expect(onClose).toHaveBeenCalled();

    })
    
    it('should have dropdown to change music', () => {
        render(<SettingPopup show={true} />)
        expect(screen.queryByTestId('settings-music')).toBeInTheDocument();
    })
});