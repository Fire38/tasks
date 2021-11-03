import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { getRubrics } from '../../../actions/rubricActions';
import { getItems, editItems } from '../../../actions/itemActions';
import Item from './item.js';


class WantList extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedFilter: 'all',
        }
        this.handleChange = this.handleChange.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(getRubrics())
        this.props.dispatch(getItems('want', this.state.selectedFilter))
    }

    componentDidUpdate(prevProps){
        if (this.props.type !== prevProps.type){
            this.props.dispatch(getItems(this.props.type, this.state.selectedFilter))
        }
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value}, () => {
            this.props.dispatch(getItems(this.props.type, this.state.selectedFilter))
        })

    }
    getItem(type, filter){
        this.props.dispatch(getItems(this.props.type, this.state.selectedFilter))
    }


    render(){
        let items = ''
        if (this.props.itemReducer.items.items){
            items = this.props.itemReducer.items.items.map((item) => 
                <Item 
                    key={ item.id } 
                    itemElement={item} 
                    func={this.textFunction} 
                    type={this.props.type} 
                    filter={this.state.selectedFilter} 
                    getItem={this.getItem}
                />
            )
        }

        let rubrics = ''
        if (this.props.rubricReducer.rubrics.rubrics){
             rubrics = this.props.rubricReducer.rubrics.rubrics.map((element) =>
                <option key={ element.id } value={ element.id }>{ element.name }</option>   
            )
        }

        let itemList = (
            <div className="accordion col-xl-4" id="accordionExample">
                { items }
            </div>
        );
        
        let noTasks = (
                <div className='col-xl-4 text-center'>
                    Пусто
                </div>
        );


        return(
            <div>
                <div id='wantList' className='row justify-content-center'>
                    <div className='col-xl-4'>
                        <h5 className='text-center'>Фильтр</h5>
                        <select required className='form-select mb-3 mr-3 col-xl-3' name='selectedFilter' onChange={this.handleChange}>
                            <option value='all'>Все</option>
                            { rubrics }
                        </select>
                    </div>
                </div>
                <div id='wantList' className='row justify-content-center'>
                   { items.length !== 0 ? itemList : noTasks}
                </div>
            </div>
        )
    }
}

const wantListWithRouter = withRouter(WantList)

function mapStateToProps(state){
    return {
        rubricReducer: state.rubricReducer,
        itemReducer: state.itemReducer
    }
}

export default connect(mapStateToProps)(wantListWithRouter)