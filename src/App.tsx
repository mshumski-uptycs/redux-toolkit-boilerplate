import { useCallback } from "react";
import { useAppDispatch } from "./redux";
import { fetchUserAccountsThunk } from "./redux/user/userThunks";

const App = () => {
  const dispatch = useAppDispatch();

  const pow = useCallback(() => {
    return dispatch(fetchUserAccountsThunk({ title: "", postBody: "" }));
  }, []);

  return <button onClick={pow}>Hello react</button>;
};

export default App;
