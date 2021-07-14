import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';


const CustomButoon = ({children, ...props}) => (
    <CustomButtonContainer {...props} >
      {children}  
    </CustomButtonContainer>
);

export default CustomButoon;