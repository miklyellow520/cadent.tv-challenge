import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addItem, deselectItem, removeItem, selectItem} from "../ducks/groceries";

const ListSelection = (props) => (
    <div className="listSelection">
        ListSelection

        {
            props.isItemSelected &&
                (
                    <table>
                        <th>id</th>
                        <th>name</th>

                        <th>category</th>
                        <th>delivery method</th>

                        <tbody>
                    <tr>
                        <td>{props.selectedItem.id}</td>
                        <td>{props.selectedItem.name}</td>
                        <td>{props.selectedItem.category}</td>
                        <td>{props.selectedItem.deliveryMethod}</td>
                        <input
                            type="checkbox"
                            checked
                            onChange={() => props.deselectItem(props.selectedItem)}
                        />
                        <button onClick={() => {
                            props.removeItem(props.selectedItem)
                        }}>delete
                        </button>
                    </tr>
                        </tbody>
                    </table>


                )

}

    </div>


);
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

export default connect (mapStateToProps, mapDispatchToProps)(ListSelection);
