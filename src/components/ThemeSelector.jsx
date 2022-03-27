import './ThemeSelector.css';
import { useTheme } from './../hooks/useTheme';
import { NAV_BG_COLOR_DEFAULT, NAV_BG_COLOR_FIRST, NAV_BG_COLOR_SECOND } from '../utilities/constants';

const themeColors = [NAV_BG_COLOR_DEFAULT, NAV_BG_COLOR_FIRST, NAV_BG_COLOR_SECOND];

export default function ThemeSelector() {
    const { changeColor } = useTheme();
  
    return (
        <div className='theme-selector'>
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
