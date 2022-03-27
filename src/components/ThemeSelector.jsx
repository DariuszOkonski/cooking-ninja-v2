import './ThemeSelector.css';
import { useTheme } from './../hooks/useTheme';
import { NAV_BG_COLOR_DEFAULT, NAV_BG_COLOR_FIRST, NAV_BG_COLOR_SECOND } from '../utilities/constants';
import modeIcon from '../assets/mode-icon.svg';
import { MODE_DARK, MODE_LIGHT } from './../utilities/constants';

const themeColors = [NAV_BG_COLOR_DEFAULT, NAV_BG_COLOR_FIRST, NAV_BG_COLOR_SECOND];

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();
  
    const toggleMode = () => {
        changeMode(mode === MODE_DARK ? MODE_LIGHT : MODE_DARK);
    }

    return (
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img 
                    onClick={toggleMode}
                    src={modeIcon} 
                    alt="modeIcon" 
                    style={{ filter: mode === MODE_DARK ? 'invert(100%)' : 'invert(20%)' }}
                />

            </div>

            <div className="theme-buttons">
                { themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    /> 
                ))}
            </div>
        </div>
    )
}
