import * as app from './app.actions';


export interface State {
	loading: boolean;
}

const initialState: State = {
	loading: false
};


export function reducer(state = initialState, action: app.Actions): State {
	switch (action.type) {

		case app.DISPLAY_LOADING: {
			return {
				...state,
				loading: true
			}
		} 
        
		case app.HIDE_LOADING: {
			return {
				...state,
				loading: false
			}
		}

		default: {
			return state;
		}
	}
}


export const getLoading = (state: State) => state.loading;