import React from 'react';
import { connect } from 'react-redux';
import { getItems, editItems } from '../../../actions/itemActions';



class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false,

        }
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(event){
        console.log(event)
        this.setState({isChecked: event.target.checked}, () => {
                this.props.dispatch(editItems({'id': this.props.itemElement.id, 'done': this.state.isChecked, 'type': this.props.type, 'filter': this.props.filter}),

               // this.props.getItem()

            )


        })
    }

    render(){
        let idForButton = '#collapse' + this.props.itemElement.id 
        let idForAccordion = 'collapse' + this.props.itemElement.id
        return(
            <div className="accordion-item border-0" key={this.props.itemElement.id}>
                <h2 className="accordion-header " id="sdfgsdfs">

                        <div className='d-flex'>
                            <div className='flex-fill'>
                                <h5 className="accordion-button rounded-5" id='accordion-h' type="button" data-bs-toggle="collapse" data-bs-target={idForButton} aria-expanded="true" aria-controls="collapseOne">
                                    {this.props.itemElement.name}
                                </h5>
                            </div>
                            <div className='d-flex align-items-center' id='checkbox'>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked={this.props.itemElement.done} onChange={this.handleCheckbox}/>
                            </div>
                        </div>
                </h2>
                <div id={idForAccordion} className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    { this.props.itemElement.description ? this.props.itemElement.description : 'Нет описания'}
                </div>
                </div>
            </div>
        )
    }
}




export default connect()(Item)