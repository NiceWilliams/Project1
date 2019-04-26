import * as React from 'react';
import { Component } from 'react';
import { Reimbursement } from '../../model/reimbursement';
import { type } from 'os';


export interface reimbursementCardProps {
 reimCard: Reimbursement; 
}
 
 
export class ReimburseCardComponent extends React.Component<reimbursementCardProps> {
    render() { 
    let reimpass = this.props.reimCard;
        return ( 
            <div key={'reimbursement-' + reimpass.reimbursementId} className="card col-md-4 col-sm-6 col-xs-12">
                    <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg"
                      className="card-img-top"
                      alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{reimpass.author}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Amount: {reimpass.type}</li>
                      <li className="list-group-item">DateSubmitted: {reimpass.datesubmitted}</li>
                      <li className="list-group-item">DateResolved: {reimpass.dateresolved}</li>
                      <li className="list-group-item">Description: {reimpass.description}</li>
                      <li className="list-group-item">Resolver: {reimpass.resolver}</li>
                      <li className="list-group-item">Status: {reimpass.status}</li>
                      <li className="list-group-item">Type: {reimpass.type}</li>
                      <li className="list-group-item">
                        <button className="btn btn-danger">Delete</button>
                      </li>
                    </ul>
                  </div>    
         );
    }
}