import React from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

interface CustomTooltipProps extends Omit<TooltipProps, 'title' | 'children'> {
    title: string;
    classNameTip?: string;
    arrowSx?:{};
    children:any;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
    title,
    classNameTip = '',
    arrowSx = '',
    children,
    ...restProps
}) => (
    <Tooltip
        title={title}
        arrow
        placement="top"
        enterTouchDelay={0.3}    
        leaveTouchDelay={1000}  
        {...restProps}
        componentsProps={{
            tooltip: {
                sx: {
                    backgroundColor: '#000',
                    color: '#fff',
                    fontSize: '0.875rem',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                },
                className: `${classNameTip} transition duration-500`,
            },
            arrow: {
                sx: {
                    color: '#000',
                    ...arrowSx
                },
            },
        }}
    >
        {children}
    </Tooltip>

);