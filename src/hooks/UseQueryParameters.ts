import {useLocation} from 'react-router';

function useQueryParameters() {
  return new URLSearchParams(useLocation().search);
}

export default useQueryParameters;
