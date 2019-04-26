import React from 'react';
import { Reimbursement } from '../../model/reimbursement'
import { ReimburseCardComponent } from './reimbursementcard.component';

interface IReimbursement {
    reimbursements: Reimbursement[];
}

export class ReimbursementDisplay extends React.Component<any, IReimbursement> {

    constructor(props: any) {
        super(props);
        this.state = {
            reimbursements: []
        }

    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:8081/reimbursements/reimbursements/author/userid/19');
        const body = await response.json();
        this.setState({
            reimbursements: body
        })
    }
    
    render()  {
        return (
            <div className="container">
                <div className="row">
                    {this.state.reimbursements.map( (reim) => (
                        <ReimburseCardComponent reimCard={reim} />
                    ))}
                </div>
       </div>
        )
    }
}
