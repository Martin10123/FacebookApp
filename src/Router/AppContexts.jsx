import { AppRouter } from "./AppRouter";
import {
  AuthUserProvider,
  GetComOAnsProvider,
  GetHistoriesProvider,
  GetPostsProvider,
  GetUsers_MessagesProvider,
} from "../context";

export const AppContexts = () => {
  return (
    <AuthUserProvider>
      <GetPostsProvider>
        <GetHistoriesProvider>
          <GetComOAnsProvider>
            <GetUsers_MessagesProvider>
              <AppRouter />
            </GetUsers_MessagesProvider>
          </GetComOAnsProvider>
        </GetHistoriesProvider>
      </GetPostsProvider>
    </AuthUserProvider>
  );
};
