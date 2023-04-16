import { AppRouter } from "./AppRouter";
import {
  AuthUserProvider,
  GetComOAnsProvider,
  GetHistoriesProvider,
  GetPostsProvider,
} from "../context";

export const AppContexts = () => {
  return (
    <AuthUserProvider>
      <GetPostsProvider>
        <GetComOAnsProvider>
          <GetHistoriesProvider>
            <AppRouter />
          </GetHistoriesProvider>
        </GetComOAnsProvider>
      </GetPostsProvider>
    </AuthUserProvider>
  );
};
