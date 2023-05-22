import { AppRouter } from "./AppRouter";
import {
  AuthUserProvider,
  GetComOAnsProvider,
  GetHistoriesProvider,
  GetPostsProvider,
  GetUsers_MessagesProvider,
} from "../context";
import { OpenWindownChatProvider } from "../components";

export const AppContexts = () => {
  return (
    <AuthUserProvider>
      <GetPostsProvider>
        <GetHistoriesProvider>
          <GetComOAnsProvider>
            <GetUsers_MessagesProvider>
              <OpenWindownChatProvider>
                <AppRouter />
              </OpenWindownChatProvider>
            </GetUsers_MessagesProvider>
          </GetComOAnsProvider>
        </GetHistoriesProvider>
      </GetPostsProvider>
    </AuthUserProvider>
  );
};
