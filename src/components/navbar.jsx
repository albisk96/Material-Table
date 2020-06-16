import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThemeContext from '../theme-context';

const NavBar = ({ toggleTheme, isDark }) => {
    const theme = useContext(ThemeContext);
    const labelText = isDark === 'black' ? 'Dark Mode Off' : 'Dark Mode On';
    return(
        <div style={theme}>
            <FormGroup>
            <FormControlLabel
                control={<Switch 
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }} 
                    onClick={toggleTheme}
                />}
                label={labelText}
            />
            </FormGroup>
      </div>
    )
}

export default NavBar;