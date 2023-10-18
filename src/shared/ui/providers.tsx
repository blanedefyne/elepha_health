import React, { useContext } from 'react';
import {RowUser} from "shared/api";

const CurrentUser = React.createContext<RowUser | null>(null);

export function useCurrentUser() {
    return useContext(CurrentUser);
}

export default CurrentUser.Provider;
