import { createMutationToPost } from '@utils/createHook';
import endpoints from '@utils/endpoints';

const useMutationSignUp = createMutationToPost(endpoints.signup, {
  onSuccess: () => {
    // TODO: Handle event
  },
  onError: () => {
    // TODO: Handle event
  },
});

export default useMutationSignUp;
