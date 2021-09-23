import React, {Component} from "react";
import store from "../store/configure-store";
import {connect} from "react-redux";
import ListSelection from "./ListSelection"
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {addItem, removeItem, selectItem, deselectItem} from "../ducks/groceries";


class ListTable extends Component {

    constructor() {
        super();
        this.state = {
            selected: false
        }
    }

    componentDidMount() {
        console.log(this.props.groceryList);

    }


    render() {


        return (

            <div className="listTable">
                <header>ListTable</header>

                <table>
                    <th>id</th>
                    <th>name</th>

                    <th>category</th>
                    <th>delivery method</th>

                    <tbody>
                    {


                            (

                                (

                                    this.props.groceryList.map((item) =>
                                        (<tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>{item.deliveryMethod}</td>
                                                <input
                                                    type="checkbox"

                                                    // checked={this.props.selectItem}
                                                    onChange={() => !this.props.isItemSelected ? this.props.selectItem(item) : this.props.deselectItem(item)}
                                                />
                                                <button onClick={() => {
                                                    this.props.removeItem(item)
                                                }}>delete
                                                </button>
                                            </tr>

                                        ))
                                )

                            )
                    }
                    </tbody>
                </table>
            </div>
        );
    };
}

ListTable.propTypes = {
    selectItem: PropTypes.func.isRequired,
    deselectItem: PropTypes.func.isRequired,

    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    groceryList: PropTypes.array.isRequired,

};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addItem,
        removeItem,
        selectItem,
        deselectItem
    }, dispatch)
);


const mapStateToProps = ({groceries: {list: groceryList, isItemSelected, selectedItem}}) => ({
        groceryList, isItemSelected, selectedItem
    }

);
export default connect(mapStateToProps, mapDispatchToProps)(ListTable);


