import withContent from '../HOCs/withContent';
import * as request from '~/services/seasonAnimeNow';
import { SeasonContent } from '~/components/SeasonContent';
const selectRequest = {
    getRequest: (props) => {
       return request.getSeasonRequest(props);
    },
 };
const Test = withContent(SeasonContent, selectRequest,false,[]);

export default Test;