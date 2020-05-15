import { useHistory } from 'react-router-dom';

export const useNavigate = () => {
	const history = useHistory();

	const navigate = (to: string, options?: any) => {
		history.push(to, options);
	};

	return navigate;
};

export default useNavigate;
