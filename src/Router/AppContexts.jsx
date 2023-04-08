import { AppRouter } from "./AppRouter";
import {
  AuthUserProvider,
  GetComOAnsProvider,
  GetPostsProvider,
} from "../context";

export const AppContexts = () => {
  return (
    <AuthUserProvider>
      <GetPostsProvider>
        <GetComOAnsProvider>
          <AppRouter />
        </GetComOAnsProvider>
      </GetPostsProvider>
    </AuthUserProvider>
  );
};
