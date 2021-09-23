import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      // console.log("payload", payload);
      let index = state.list.indexOf(payload);
      // console.log("index deleted: ", index);
      const dup = [...state.list];
      const newList = dup.splice(index, 1);
      // console.log("list after removing", newList);
      // Write a custom reducer that will remove an item from the list array
      return {...state, list: dup};


    case SELECT_ITEM:
      // Write a custom reducer that will select an item

      console.log(state.isItemSelected);
      return  {...state,
      isItemSelected: true,
        selectedItem: payload
    };

    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item
      return  {...state,
        isItemSelected: false,
        selectedItem: null
      };

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
})
export const selectItem = item => ({
  type: SELECT_ITEM,
  payload: item
})
export const deselectItem = item => ({
  type: DESELECT_ITEM,
  payload: item
})

