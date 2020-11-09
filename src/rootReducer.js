/** Reducer Notes
 * State
 * - intialize to empty object
 * - will populate with keys of postIds
 * - each key will eval to an object with post title, description, body, and comments-array
 * Actions
 * - ADD_POST (doubles as edit)
 * - DELETE_POST
 * - ADD_COMMENT
 * - DELETE_COMMENT
 */
import { ADD_POST, ADD_COMMENT, DELETE_POST, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = { posts: {} };
const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post.data,
                },
            };

        case DELETE_POST:
        case ADD_COMMENT:
        case DELETE_COMMENT:
        default:
            return state;
    }
};

export default rootReducer;
