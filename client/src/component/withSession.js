import React from 'react';

import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from '../queries/index';

const withSession = Component => props => (
    <Query query={GET_CURRENT_USER}>
        {({ data, loading }) =>{
            console.log("Data::", data);
            if(loading) return null;
            return(
                <Component  {...props} /> 



                
            )
        }}


    </Query>
)

export default withSession;